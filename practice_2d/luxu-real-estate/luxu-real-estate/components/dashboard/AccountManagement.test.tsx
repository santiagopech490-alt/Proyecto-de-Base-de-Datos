import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// @ts-ignore
import ProfileSettingsForm from './ProfileSettingsForm';
// @ts-ignore
import AvatarUpload from './AvatarUpload';

describe('Account Management Components', () => {
  it('renders ProfileSettingsForm fields', () => {
    render(<ProfileSettingsForm userId="test-id" defaultValues={{ full_name: '', email_notifications: false, push_notifications: false, sms_notifications: false }} />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    // Notification switch is rendered with a label, test for presence of form-item
    expect(screen.getByText(/email notifications/i)).toBeInTheDocument();
  });

  it('renders AvatarUpload area', () => {
    render(<AvatarUpload userId="test-id" currentAvatarUrl={null} />);
    expect(screen.getByText(/upload new photo/i)).toBeInTheDocument();
  });
});
