// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
        'custom-dark': '#1F2937',
        'custom-light': '#ffffff',
        },
      },
    },
    plugins: [],
  }


  

  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#888888',
        'scrollbar-track': '#e0e0e0',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.scrollbar': {
          '@apply overflow-y-auto': {},
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
      });
    },
  ],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}







  