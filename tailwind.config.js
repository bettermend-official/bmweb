/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070a13",
        card: "#0f1524",
        "card-hover": "#161f33",
        primary: {
          DEFAULT: "#10b981",
          glow: "rgba(16, 185, 129, 0.15)",
          dark: "#059669",
          navy: "#030C54",
        },
        secondary: {
          DEFAULT: "#6366f1",
          glow: "rgba(99, 102, 241, 0.15)",
          purple: "#a855f7",
          orange: "#FF9800",
        },
        accent: {
          cyan: "#06b6d4",
          amber: "#f59e0b",
          rose: "#ef4444",
        },
        dark: {
          900: "#070a13",
          850: "#0b0f1d",
          800: "#0f1524",
          700: "#161f33",
          600: "#1e293b",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          focus: "rgba(16, 185, 129, 0.4)",
          glass: "rgba(255, 255, 255, 0.06)",
        },
        text: {
          main: "#f3f4f6",
          muted: "#9ca3af",
          dark: "#4b5563",
        }
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
        "gradient-secondary": "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        "gradient-accent": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        "gradient-radial-glow": "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(6, 182, 212, 0.2)",
        "glow-primary": "0 0 25px rgba(16, 185, 129, 0.25)",
        "glow-purple": "0 0 25px rgba(99, 102, 241, 0.25)",
        card: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        phone: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(16, 185, 129, 0.15)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        spinSlow: "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      }
    },
  },
  plugins: [],
};
