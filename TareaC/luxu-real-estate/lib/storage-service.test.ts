import { describe, it, expect, vi, beforeEach } from 'vitest';
import { storageService } from './storage-service';
import { supabase } from './supabase';

// Mock the supabase client
vi.mock('./supabase', () => ({
  supabase: {
    storage: {
      from: vi.fn(() => ({
        upload: vi.fn(),
        getPublicUrl: vi.fn(),
        list: vi.fn(),
        remove: vi.fn(),
      })),
    },
  },
}));

describe('Storage Service', () => {
  const userId = 'test-user-id';
  const mockFile = {
    name: 'test.png',
  } as unknown as File;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should upload an avatar and return its public URL', async () => {
    const mockPublicUrl = 'https://example.com/avatars/test-user-id/avatar.png';
    
    // Setup mocks
    const uploadMock = vi.fn().mockResolvedValue({ error: null });
    const getPublicUrlMock = vi.fn().mockReturnValue({ data: { publicUrl: mockPublicUrl } });
    
    (supabase.storage.from as any).mockReturnValue({
      upload: uploadMock,
      getPublicUrl: getPublicUrlMock,
    });

    const result = await storageService.uploadAvatar(userId, mockFile);

    expect(uploadMock).toHaveBeenCalledWith(
      `${userId}/avatar.png`,
      mockFile,
      expect.objectContaining({ upsert: true })
    );
    expect(getPublicUrlMock).toHaveBeenCalledWith(`${userId}/avatar.png`);
    expect(result).toBe(mockPublicUrl);
  });

  it('should throw an error if upload fails', async () => {
    const uploadError = new Error('Upload failed');
    const uploadMock = vi.fn().mockResolvedValue({ error: uploadError });
    
    (supabase.storage.from as any).mockReturnValue({
      upload: uploadMock,
    });

    await expect(storageService.uploadAvatar(userId, mockFile)).rejects.toThrow('Error uploading avatar: Upload failed');
  });

  it('should delete an avatar successfully', async () => {
    const mockFiles = [{ name: 'avatar.png' }];
    const listMock = vi.fn().mockResolvedValue({ data: mockFiles, error: null });
    const removeMock = vi.fn().mockResolvedValue({ error: null });
    
    (supabase.storage.from as any).mockReturnValue({
      list: listMock,
      remove: removeMock,
    });

    await storageService.deleteAvatar(userId);

    expect(listMock).toHaveBeenCalledWith(userId);
    expect(removeMock).toHaveBeenCalledWith([`${userId}/avatar.png`]);
  });
});
