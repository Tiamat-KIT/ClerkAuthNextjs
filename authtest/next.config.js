/** @type {import('next').NextConfig} */
const {createVanillaExtractPlugin} = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    env:{
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_d29uZHJvdXMtY3JhbmUtMi5jbGVyay5hY2NvdW50cy5kZXYk",
        CLERK_SECRET_KEY: "sk_test_xNyPnO8JJznylzEErzjr0QyHKXwQiwUfuLwyKS0BB8"
    },
    experimental: {
        swcPlugins:[[
            "typewind/swc",{}
        ]]
    }
}

module.exports = withVanillaExtract(nextConfig)
