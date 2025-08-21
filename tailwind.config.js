const { fontFamily } = require("tailwindcss/defaultTheme")
const shadcnConfig = require("shadcn/ui/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...shadcnConfig,
  content: [...shadcnConfig.content, "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...shadcnConfig.theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...shadcnConfig.theme.extend,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, hsl(220 10% 15%) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 10% 15%) 1px, transparent 1px)",
        "gradient-dark": "linear-gradient(to bottom, hsl(0 0% 0%), hsl(220 10% 4%))",
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
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "fade-out": "fadeOut 0.3s ease-in forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "scale-out": "scaleOut 0.3s ease-in forwards",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in",
        "fade-out": "fade-out",
        "scale-in": "scale-in",
        "scale-out": "scale-out",
      },
    },
  },
  plugins: [...shadcnConfig.plugins, require("tailwindcss-animate")],
}
