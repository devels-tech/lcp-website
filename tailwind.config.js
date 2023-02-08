module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	  extend: {
      fontFamily: {
        sans: ['helvetica_neue', 'sans-serif'],
      },

      fontSize: {
        '12xl': '11rem'
      },

      colors: {
        primary: {
          400: 'rgba(52,109,191, .9)',
          500: 'rgba(30, 71, 141, 1)',
        },

        secondary: {
          500: 'rgb(251, 191, 36)',
        }
      },

      height: {
        'fit': 'fit-content'
      },

      width: {
        'fit': 'fit-content',
        '35%': '35%'
      },

      screens: {
        'mm': "@media (min-width: 320px)",
        'xs': "@media (min-width: 375x)",
        'ml': "@media (min-width: 425px)",
        '3xl': '@media (min-width: 1534px)',
        '4xl': '@media (min-width: 1660px)',
        '5xl': '@media (min-width: 1780px)',

        'max-w-350': { max: '350px' },
        'max-mm': { max: '320px' },
        'max-xs': { max: '375x' },
        'max-ml': { max: '425px' },
        'max-md': { max: '768px' },
      },

      spacing: {
        '66': '280px',
        '76': '300px',
        '500': '500px',
        'screen-8': '80vh',
        'screen-8.5': '85vh',
        'screen-10': '110vh',
        'screen-15': '115vh',
        'screen-20': '120vh',
        'screen-25': '125vh',
      },

      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '176px': '176px'
      },

      minHeight: {
        'screen-7.5': '75vh',
        'screen-10': '110vh',
        'screen-14': '140vh',
      },

      zIndex: {
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,

      }
		},
	},
  variants: {
    backgroundColor: ['responsive', 'focus', 'hover'],
    borderColor: ['responsive', 'focus', 'hover'],
    extend: {
      // display: ['group-hover'],
      // opacity: ['group-hover'],
      // scale: ['group-hover'],
      visibility: ['hover', 'focus'],
      brightness: ['hover', 'focus'],
      backgroundImage: ['hover'],
      backgroundColor: ['active'],
      textColor: ['active'],
      placeholderColor: ['active'],
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
