import type { NextConfig } from "next";

const wpApiUrl = process.env.WORDPRESS_API_URL;

if (!wpApiUrl || !URL.canParse(wpApiUrl)) {
    throw new Error(`
            Please provide a valid WordPress instance URL.
            Add to your environment variables WORDPRESS_API_URL.
        `);
}

const { protocol, hostname, port } = new URL(wpApiUrl);

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: protocol.slice(0, -1) as "http" | "https",
                hostname: hostname,
                ...(port ? { port } : {}),
            },
            { protocol: "https", hostname: "secure.gravatar.com" },
        ],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
