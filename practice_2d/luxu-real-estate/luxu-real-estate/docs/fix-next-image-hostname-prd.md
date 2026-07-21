# PRD: Fix Next.js Image Unconfigured Hostname Error

## Problem Statement
The application is experiencing a runtime error when trying to render images from `lh3.googleusercontent.com` using the `next/image` component. Next.js requires external hostnames to be explicitly configured in `next.config.ts` for security and optimization purposes.

## Success Criteria
- Images from `lh3.googleusercontent.com` are successfully rendered in the application.
- The `next/image` runtime error regarding unconfigured hostnames is resolved.

## Technical Requirements
- Update `next.config.ts` to include `lh3.googleusercontent.com` in the `images.remotePatterns` configuration.

## Proposed Solution
Modify `next.config.ts` to add the `images` configuration block:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

## Testing Plan
1. Restart the development server.
2. Navigate to the home screen where `PropertyCard` components are rendered.
3. Verify that images load correctly and no error appears in the console.
