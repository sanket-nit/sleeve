/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
  	extend: {
			keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '2%': { transform: 'translate(-10px, 5px)' },
          '4%': { transform: 'translate(10px, -5px)' },
          '6%': { transform: 'translate(-10px, 5px)' },
          '8%': { transform: 'translate(10px, -5px)' },
          '10%': { transform: 'translate(0)' },
          '12%': { transform: 'translate(-5px, 10px)' },
          '14%': { transform: 'translate(5px, -10px)' },
          '16%': { transform: 'translate(-5px, 10px)' },
          '18%': { transform: 'translate(5px, -10px)' },
          '20%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        'glitch-text': 'glitch 1s infinite',
        'glitch-text-2': 'glitch 1s infinite 0.1s',
        'glitch-text-3': 'glitch 1s infinite 0.2s',
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

