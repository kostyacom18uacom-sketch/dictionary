/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-ink': '#1d2130',
        'cloud-white': '#fcfcfd',
        'slate-gray': '#d5d9e8',
        'frost': '#ebeef7',
        'coal-black': '#151720',
        'deep-space': '#0a0d16',
        'sky-dust': '#d8fbed',
        'emerald-echo': '#0b3d28',
        'sour-apple': '#bfff5a',
        'hydro-blue': '#1a67fd',
        'sunny-glow': '#ffd888',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'cards': '24px',
        'buttons': '56px',
        'navitems': '44px',
        'textcontainers': '9999px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '72': '72px',
        '96': '96px',
        '120': '120px',
      }
    },
  },
  plugins: [],
}
