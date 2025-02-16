/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        none: "0px",
        "radius-4": "4px",
        "radius-6": "4px",
        "radius-8": "4px",
        "radius-10": "4px",
        "radius-12": "4px",
        "radius-16": "4px",
        "radius-20": "4px",
        "radius-24": "4px",
        "radius-full": "999px",
      },
      colors: {
        /* Palatte is from color 'Neutral' */
        darkBlue: "#2547D0",
        lightBlue: "#335CFF",
        green: "#21C16B",
        lightGreen: "#D1FBE9",
        red: "#FB3748",
        lightRed: "#FFD5D8",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Lora: ["Noto", "serif"],
        Inconsolata: ["Source Code", "monospace"],
      },
      lineHeight: {
        relaxed: "1.2",
      },
      spacing: {
        28.88: "28.88px",
        "spacing-0": "0px",
        "spacing-2": "0.125rem",
        "spacing-4": "0.25rem",
        "spacing-6": "0.375rem",
        "spacing-8": "0.5rem",
        "spacing-12": "0.75rem",
        "spacing-16": "1rem",
        "spacing-20": "1.25rem",
        "spacing-24": "1.5rem",
        "spacing-32": "2rem",
        "spacing-40": "2.5rem",
        "spacing-48": "3rem",
        "spacing-64": "4rem",
        "spacing-80": "5rem",
      },
    },
  },
  plugins: [],
};
