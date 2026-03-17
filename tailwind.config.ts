// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B', // Base Surface
        gold: {
          DEFAULT: '#C5B358', // Bureau Primary
          muted: '#857528',   // Secondary Accents
        },
        vellum: '#F4F1EA',    // Document Background
      },
      fontFamily: {
        bureau: ['var(--font-serif)', 'serif'],
        terminal: ['var(--font-mono)', 'monospace'],
      },
    },
  },
}