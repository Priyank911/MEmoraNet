/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        'nextjs-black': '#2c2c2c',
        'nextjs-gray': {
          100: '#f6f6f6',
          200: '#eaeaea',
          300: '#c4c4c4',
          400: '#9f9f9f',
          500: '#7c7c7c',
          600: '#747474',
          700: '#606060',
          800: '#3c3c3c',
          900: '#1c1c1c',
        },
        'nextjs-blue': '#0070f3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'nextjs-card': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.nextjs-black'),
            a: {
              color: theme('colors.nextjs-blue'),
              '&:hover': {
                color: theme('colors.nextjs-blue'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.nextjs-black'),
            },
            h2: {
              color: theme('colors.nextjs-black'),
            },
            h3: {
              color: theme('colors.nextjs-black'),
            },
            h4: {
              color: theme('colors.nextjs-black'),
            },
            code: {
              color: theme('colors.nextjs-blue'),
            },
            blockquote: {
              color: theme('colors.nextjs-gray.700'),
              borderLeftColor: theme('colors.nextjs-blue'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.nextjs-gray.100'),
            a: {
              color: theme('colors.nextjs-blue'),
              '&:hover': {
                color: theme('colors.nextjs-blue'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.nextjs-gray.100'),
            },
            h2: {
              color: theme('colors.nextjs-gray.100'),
            },
            h3: {
              color: theme('colors.nextjs-gray.100'),
            },
            h4: {
              color: theme('colors.nextjs-gray.100'),
            },
            code: {
              color: theme('colors.nextjs-blue'),
            },
            blockquote: {
              color: theme('colors.nextjs-gray.300'),
              borderLeftColor: theme('colors.nextjs-blue'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};
