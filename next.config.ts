import type { NextConfig } from "next";

const isS3Build = process.env.BUILD_TARGET === "s3";

const nextConfig: NextConfig = isS3Build
  ? {
      output: "export",
      // Emit out/legal/privacidad/index.html (and friends) so the static
      // S3 bucket can serve the nested /legal/* routes as folders.
      trailingSlash: true,
      images: { unoptimized: true },
      turbopack: { root: process.cwd() },
    }
  : {};

export default nextConfig;
