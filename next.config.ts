import {NextConfig} from "next";

let nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
  },
  async headers() {
    return [
      {
        source: "/:any*",
        headers: [
          {
            key: "X-Clacks-Overhead",
            value: "GNU Sir Terry Pratchett"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "same-origin",
          },
          {
            key: "Referrer-Policy",
            value: "same-origin",
          },
          {
            key: "Permissions-Policy",
            value: "",
          }
        ]
      }
    ];
  }
};

export default nextConfig;
