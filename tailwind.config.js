/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // सभी React components को scan करने के लिए
    "./public/index.html"         // optional, अगर कोई Tailwind class सीधे HTML में use हुई है
  ],
  theme: {
    extend: {},                   // यहाँ अपने custom colors, spacing आदि add कर सकते हो
  },
  plugins: [],                    // optional, जैसे forms या typography plugins add कर सकते हो
}
