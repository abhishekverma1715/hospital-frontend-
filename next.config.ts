import type { NextConfig } from "next";

const API_URL = process.env.API_URL || "http://localhost:5000";

const nextConfig: NextConfig = {
  // Uploaded images are stored on the backend and referenced by relative
  // "/uploads/<file>" paths. Proxy those requests to the backend so they
  // resolve on the public site (works in Docker and local dev alike).
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${API_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
