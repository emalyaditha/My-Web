module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        card: "rgb(var(--card-rgb) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground-rgb) / <alpha-value>)",
        neon: "rgb(var(--neon-rgb) / <alpha-value>)",
        "neon-glow": "rgb(var(--neon-glow-rgb) / <alpha-value>)"
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"]
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-strong": "var(--shadow-glow-strong)"
      }
    }
  }
};
