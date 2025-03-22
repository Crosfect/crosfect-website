module.exports = {
    theme: {
       extend: {
           boxShadow: {
               'right-bottom': '4px 4px 6px -1px rgba(0, 0, 0, 0.1), 4px 4px 4px -1px rgba(0,0,0,0.06)',
   
           },
           animation: {
            fadeIn: "fadeIn 1s ease-in forwards",
          },
          keyframes: {
            fadeIn: {
              from: { opacity: 0, transform: "translateY(10px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          },
       }
    },
    variants: {},
    plugins: []   
   }