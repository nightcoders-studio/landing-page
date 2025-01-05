/** @type {import('tailwindcss').Config} */

const colors = {
  /* Background Colors */
  "bg-default": "var(--color-bg-default)",
  "bg-default-secondary": "var(--color-bg-default-secondary)",
  "bg-default-tertiary": "var(--color-bg-default-tertiary)",
  "bg-default-quaternary": "var(--color-bg-default-quaternary)",
  "bg-brand": "var(--color-bg-brand)",
  "bg-brand-secondary": "var(--color-bg-brand-secondary)",
  "bg-brand-tertiary": "var(--color-bg-brand-tertiary)",
  "bg-disabled": "var(--color-bg-disabled)",
  "bg-success": "var(--color-bg-success)",
  "bg-warning": "var(--color-bg-warning)",
  "bg-danger": "var(--color-bg-danger)",

  /* Text Colors */
  "text-default": "var(--color-text-default)",
  "text-default-secondary": "var(--color-text-default-secondary)",
  "text-default-tertiary": "var(--color-text-default-tertiary)",
  "text-default-quaternary": "var(--color-text-default-quaternary)",
  "text-brand": "var(--color-text-brand)",
  "text-brand-secondary": "var(--color-text-brand-secondary)",
  "text-brand-tertiary": "var(--color-text-brand-tertiary)",
  "text-disabled": "var(--color-text-disabled)",
  "text-success": "var(--color-text-success)",
  "text-warning": "var(--color-text-warning)",
  "text-danger": "var(--color-text-danger)",

  /* Icon Colors */
  "icon-default": "var(--color-icon-default)",
  "icon-default-secondary": "var(--color-icon-default-secondary)",
  "icon-default-tertiary": "var(--color-icon-default-tertiary)",
  "icon-default-quaternary": "var(--color-icon-default-quaternary)",
  "icon-brand": "var(--color-icon-brand)",
  "icon-brand-secondary": "var(--color-icon-brand-secondary)",
  "icon-brand-tertiary": "var(--color-icon-brand-tertiary)",
  "icon-disabled": "var(--color-icon-disabled)",
  "icon-success": "var(--color-icon-success)",
  "icon-warning": "var(--color-icon-warning)",
  "icon-danger": "var(--color-icon-danger)",

  /* Border Colors */
  "border-default": "var(--color-border-default)",
  "border-default-secondary": "var(--color-border-default-secondary)",
  "border-default-tertiary": "var(--color-border-default-tertiary)",
  "border-default-quaternary": "var(--color-border-default-quaternary)",
  "border-brand": "var(--color-border-brand)",
  "border-brand-secondary": "var(--color-border-brand-secondary)",
  "border-brand-tertiary": "var(--color-border-brand-tertiary)",
  "border-disabled": "var(--color-border-disabled)",
  "border-success": "var(--color-border-success)",
  "border-warning": "var(--color-border-warning)",
  "border-danger": "var(--color-border-danger)",
};

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./layouts/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        /* Background Colors */
        "bg-default": "var(--color-bg-default)",
        "bg-default-secondary": "var(--color-bg-default-secondary)",
        "bg-default-tertiary": "var(--color-bg-default-tertiary)",
        "bg-default-quaternary": "var(--color-bg-default-quaternary)",
        "bg-brand": "var(--color-bg-brand)",
        "bg-brand-secondary": "var(--color-bg-brand-secondary)",
        "bg-brand-tertiary": "var(--color-bg-brand-tertiary)",
        "bg-disabled": "var(--color-bg-disabled)",
        "bg-success": "var(--color-bg-success)",
        "bg-warning": "var(--color-bg-warning)",
        "bg-danger": "var(--color-bg-danger)",

        /* Text Colors */
        "text-default": "var(--color-text-default)",
        "text-default-secondary": "var(--color-text-default-secondary)",
        "text-default-tertiary": "var(--color-text-default-tertiary)",
        "text-default-quaternary": "var(--color-text-default-quaternary)",
        "text-brand": "var(--color-text-brand)",
        "text-brand-secondary": "var(--color-text-brand-secondary)",
        "text-brand-tertiary": "var(--color-text-brand-tertiary)",
        "text-disabled": "var(--color-text-disabled)",
        "text-success": "var(--color-text-success)",
        "text-warning": "var(--color-text-warning)",
        "text-danger": "var(--color-text-danger)",

        /* Icon Colors */
        "icon-default": "var(--color-icon-default)",
        "icon-default-secondary": "var(--color-icon-default-secondary)",
        "icon-default-tertiary": "var(--color-icon-default-tertiary)",
        "icon-default-quaternary": "var(--color-icon-default-quaternary)",
        "icon-brand": "var(--color-icon-brand)",
        "icon-brand-secondary": "var(--color-icon-brand-secondary)",
        "icon-brand-tertiary": "var(--color-icon-brand-tertiary)",
        "icon-disabled": "var(--color-icon-disabled)",
        "icon-success": "var(--color-icon-success)",
        "icon-warning": "var(--color-icon-warning)",
        "icon-danger": "var(--color-icon-danger)",

        /* Border Colors */
        "border-default": "var(--color-border-default)",
        "border-default-secondary": "var(--color-border-default-secondary)",
        "border-default-tertiary": "var(--color-border-default-tertiary)",
        "border-default-quaternary": "var(--color-border-default-quaternary)",
        "border-brand": "var(--color-border-brand)",
        "border-brand-secondary": "var(--color-border-brand-secondary)",
        "border-brand-tertiary": "var(--color-border-brand-tertiary)",
        "border-disabled": "var(--color-border-disabled)",
        "border-success": "var(--color-border-success)",
        "border-warning": "var(--color-border-warning)",
        "border-danger": "var(--color-border-danger)",

        fontFamily: {
          default: "var(--dt-font-family-default)",
          secondary: "var(--dt-font-family-secondary)",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
