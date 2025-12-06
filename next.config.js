/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "nacue.com",
			},
			{
				protocol: "https",
				hostname: "www.saffronai.in",
			},
			{
				protocol: "https",
				hostname: "mir-s3-cdn-cf.behance.net",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
// next.config.js
module.exports = {
	eslint: { ignoreDuringBuilds: true }, // skip ESLint errors during build
	typescript: { ignoreBuildErrors: true }, // skip type-check errors during build
};
