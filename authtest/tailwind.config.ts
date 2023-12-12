import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
      extend: {
        backgroundImage: {
          'morning': "url('/publicdomainq-0041781jae.jpg')",
          'night': "url('/publicdomainq-0060524jyp.jpg')",
        }
      }
  },
  plugins: [require("daisyui")],
}
export default config
