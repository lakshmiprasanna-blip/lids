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
      {
        protocol: "https",
        hostname: "lids-cms-backend.onrender.com",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;