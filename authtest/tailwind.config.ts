import type { Config } from 'tailwindcss'
import {typewindTransforms} from "typewind/transform"
const config: Config = {
  content: {files:[
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  transform:typewindTransforms},
  darkMode: "class",
  theme: {
      extend: {
        backgroundImage: {
          'morning': "url('/publicdomainq-0041781jae.jpg')",
          'night': "url('/publicdomainq-0060524jyp.jpg')",
        },
        fontSize: {
          "responsive": "calc((100vw - 375px) * 10 / 905 + 20px)"
        }
      }
  },
  plugins: [require("daisyui")],
}
export default config

/**
 * BreakPointの最小値を375として
 * 100vwがいくらくらい375を超えているかを計算
 * ViewPortSizeがいくつ増えるとどれくらいサイズが増えるかを
 * 考えて、超えている分大きさに、増えているサイズをかけて
 * それをViewPortが増えるときと前のときのViewPortの数値を引いたもので割り、
 * 最後に従来のフォントサイズを加える。
 */