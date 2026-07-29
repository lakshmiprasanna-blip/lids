import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4010",
        pathname: "/uploads/**",
      },
      // add your production CMS host here when you deploy, e.g.:
      // { protocol: "https", hostname: "cms.lids.example.com", pathname: "/uploads/**" },
    ],
    // Next's optimizer blocks fetches that resolve to private/loopback IPs (SSRF
    // protection), which localhost always does — so skip optimization in dev.
    // Production CMS_API_BASE_URL will be a real host, so this won't apply there.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;