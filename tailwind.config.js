/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'brand': {
          'primary': '#285967',
          'secondary': '#4eaecc', 
          'light-grey': '#dbe2e8',
          'off-white': '#e7f0ef',
          'text-black': '#000000'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'elegant': ['Crimson Text', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.01em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.01em' }],
        // Premium display sizes
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-2xl': ['6rem', { lineHeight: '1', letterSpacing: '0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(40, 14, 79, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(40, 14, 79, 0.6)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'elevation': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'mobile': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      fontWeight: {
        'hairline': '100',
        'thin': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      }
    },
  },
  plugins: [],
};