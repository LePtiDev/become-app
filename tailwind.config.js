const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [],
  daisyui: {
    themes: false,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Inter', ...defaultTheme.fontFamily.serif],
      mono: ['Inter', ...defaultTheme.fontFamily.mono],
    },
  },
}
