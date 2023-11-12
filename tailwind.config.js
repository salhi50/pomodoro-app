/** @type import("tailwindcss").Config */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./public/template.html"
  ],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#fff",
      gray: "gray",
      tomato: {
        50: '#fef4f2',
        100: '#fee6e2',
        200: '#ffd1c9',
        300: '#fdb1a4',
        400: '#fa846f',
        500: '#f15c42',
        600: '#d53b20',
        700: '#bb321a',
        800: '#9a2d1a',
        900: '#802b1c',
        950: '#461209',
      },    
      blue: {
        50: '#f2f4fc',
        100: '#e3e7f6',
        200: '#cdd6f0',
        300: '#aabae6',
        400: '#8196d9',
        500: '#6477cd',
        600: '#535fc1',
        700: '#464caf',
        800: '#3e408f',
        900: '#353873',
        950: '#242547',
      },
      green: {
        50: '#f4fcf1',
        100: '#e4fade',
        200: '#cbf4be',
        300: '#a0ea8b',
        400: '#6fd652',
        500: '#4dc32c',
        600: '#399c1d',
        700: '#307a1b',
        800: '#29611a',
        900: '#215017',
        950: '#0e2c07',
      },  
      theme: {
        50: 'var(--theme-color-50)',
        100: 'var(--theme-color-100)',
        200: 'var(--theme-color-200)',
        300: 'var(--theme-color-300)',
        400: 'var(--theme-color-400)',
        500: 'var(--theme-color-500)',
        600: 'var(--theme-color-600)',
        700: 'var(--theme-color-700)',
        800: 'var(--theme-color-800)',
        900: 'var(--theme-color-900)',
        950: 'var(--theme-color-950)',
      },  
    },
    textColor: {
      muted: "rgba(255,255,255,0.75)"
    },
    fontFamily: {
      Itim: "Itim",
      DEFAULT: "Roboto, system-ui, -apple-system, verdana, Arial, sans-serif"
    },
    spacing: {
      0: 0,
      2: "0.125rem",
      4: "0.25rem",
      6: "0.375rem",
      8: "0.5rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
      "btn-y-shadow": ".125rem"
    },
    fontSize: {
      sm: "0.875rem",
      DEFAULT: "1rem",
      lg: "rfs(1.25rem)",
      xl: "rfs(2rem)",
      display: "rfs(10rem)"
    },
    borderRadius: {
      DEFAULT: ".375rem",
      circle: "50%",
      pill: "50rem"
    },
    screens: {
      ds: "768px"
    },
    keyframes: {
      spin: {
        from: {transform: "rotate(0deg)"},
        to: {transform: "rotate(360deg)"}
      }
    },
    animation: {
      spin: "spin 1s linear infinite"
    }
  }
}