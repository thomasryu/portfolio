import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade .3s ease forwards',
      },

      aspectRatio: {
        mobile: '390 / 840',
        desktop: '1366 / 840',
      },

      colors: {
        black: colors.gray[900],
        white: colors.gray[50],
        gray: colors.gray[400],
        'dark-gray': colors.gray[600],

        yellow: colors.yellow[400],
      },

      fontFamily: {
        sans: ['var(--font-nunito-sans)'],
        serif: ['var(--font-nunito)'],
      },

      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      transitionTimingFunction: {
        'jump-in': 'cubic-bezier(0, 1.63, 0.83, 1.2)',
        'jump-out': 'cubic-bezier(0.38,-0.36, 0.78,-0.05)',
      },

      width: {
        mobile: 'calc(100% * (390 / 1756))',
        desktop: 'calc(100% * (1366 / 1756))',
      },
    },
  },
  plugins: [],
}
export default config
