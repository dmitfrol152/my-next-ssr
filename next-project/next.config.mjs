/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "habrastorage.org",
			},
		],
	},
};

export default nextConfig;
