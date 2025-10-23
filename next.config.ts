import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_DATASOURCE_ID: process.env.NOTION_DATASOURCE_ID,
  },
};

export default nextConfig;
