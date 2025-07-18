const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(0 0% 20%)",
        input: "hsl(0 0% 15%)",
        ring: "hsl(0 0% 25%)",
        background: "hsl(0 0% 0%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(50 100% 50%)",
          foreground: "hsl(220 10% 8%)",
        },
        secondary: {
          DEFAULT: "hsl(220 10% 15%)",
          foreground: "hsl(0 0% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 100% 50%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(220 10% 12%)",
          foreground: "hsl(0 0% 70%)",
        },
        accent: {
          DEFAULT: "hsl(220 10% 15%)",
          foreground: "hsl(0 0% 98%)",
        },
        popover: {
          DEFAULT: "hsl(220 10% 8%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(220 10% 10%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, hsl(220 10% 15%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 10% 15%) 1px, transparent 1px)',
        'gradient-dark': 'linear-gradient(to bottom, hsl(0 0% 0%), hsl(220 10% 4%))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "fade-out": "fadeOut 0.3s ease-in forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "scale-out": "scaleOut 0.3s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
