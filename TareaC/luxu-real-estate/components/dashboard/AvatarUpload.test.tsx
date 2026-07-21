import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AvatarUpload from './AvatarUpload';
import { storageService } from '@/lib/storage-service';
import { supabase } from '@/lib/supabase';

vi.mock('@/lib/storage-service', () => ({
  storageService: {
    uploadAvatar: vi.fn().mockResolvedValue('https://new-url.com/avatar.png')
  }
}));

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      update: vi.fn(() => ({
        eq: vi.fn().mockResolvedValue({ error: null })
      }))
    }))
  }
}));

describe('AvatarUpload Component', () => {
  it('handles avatar upload', async () => {
    const { container } = render(<AvatarUpload userId="test-id" currentAvatarUrl={null} />);
    
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = container.querySelector('#avatar-upload') as HTMLInputElement;

    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => {
      expect(storageService.uploadAvatar).toHaveBeenCalled();
    });
  });
});
