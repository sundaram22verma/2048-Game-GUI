import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        game: {
          bg: "hsl(var(--game-bg))",
          board: "hsl(var(--board-bg))",
          empty: "hsl(var(--empty-tile))",
        },
        tile: {
          2: "hsl(var(--tile-2))",
          "2-fg": "hsl(var(--tile-2-fg))",
          4: "hsl(var(--tile-4))",
          "4-fg": "hsl(var(--tile-4-fg))",
          8: "hsl(var(--tile-8))",
          "8-fg": "hsl(var(--tile-8-fg))",
          16: "hsl(var(--tile-16))",
          "16-fg": "hsl(var(--tile-16-fg))",
          32: "hsl(var(--tile-32))",
          "32-fg": "hsl(var(--tile-32-fg))",
          64: "hsl(var(--tile-64))",
          "64-fg": "hsl(var(--tile-64-fg))",
          128: "hsl(var(--tile-128))",
          "128-fg": "hsl(var(--tile-128-fg))",
          256: "hsl(var(--tile-256))",
          "256-fg": "hsl(var(--tile-256-fg))",
          512: "hsl(var(--tile-512))",
          "512-fg": "hsl(var(--tile-512-fg))",
          1024: "hsl(var(--tile-1024))",
          "1024-fg": "hsl(var(--tile-1024-fg))",
          2048: "hsl(var(--tile-2048))",
          "2048-fg": "hsl(var(--tile-2048-fg))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
