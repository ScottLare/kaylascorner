/* jshint esversion: 9 */

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}']
	},
	theme: {
		extend: {
			animation: {
				close: 'close 1s 1',
				open: 'open 1s 1',
				fadeIn: 'fadeIn linear 1s'
			},
			backgroundImage: {
				cloudbillingbkgrd: "url('./static/cloudbillingbkgrd_1.png')",
				cloudbillingbkgrd4: "url('./static/cloudbillingbkgrd_4.png')",
				cloudbillingbkgrd5: "url('./static/cloudbillingbkgrd_5.png')",
				integrator: "url('./static/bloombergSvelteBkgrd_1.png')",
				integrator2: "url('./static/bloombergBackground_1.png')",
				kaylanicole1: "url('./static/KaylasCorner3.png')",
				server: "url('./static/icon-server-on.svg')",
				iframe: "url('./static/background_iframe_pages.svg')",
				iframeback: "url('./static/iframe_back.png')",
				unsplash1: "url('./static/unsplashImage.jpg')",

				checkmark: "url('./static/redCheckIcon.svg')"
			},
			backgroundColor: {
				'gray-variant1': '#374753',
				fff: '#fff',
				'index-left': 'rgba(255, 255, 255, 0.9)',
				'blue-variant1': '#002e5f',
				'index-right': 'rgba(255, 255, 255, 0.6)',
				'dash-color': 'rgba(255, 255, 255, 0.4)',
				dashboardContent: 'rgba(255, 255, 255, 0.8)'
			},
			backgroundPosition: {
				index: '40% 40%',
				dashboard: '0 -20rem'
			},
			backgroundSize: {
				'12px': '12px'
			},
			borderColor: {
				globe: '#409ca2'
			},
			borderRadius: {
				'point-3': '.3rem',
				'2px': '2px'
			},
			colors: {
				teal: {
					50: '#f2f9f9',
					100: '#e6f2f2',
					200: '#bfdfdf',
					300: '#99cccc',
					400: '#4da6a6',
					500: '#008080',
					600: '#007373',
					700: '#006060',
					800: '#004d4d',
					900: '#003f3f'
				}
			},
			fontFamily: {
				'mono-sans': ['myriad-pro', 'sans-serif']
			},
			fontSize: {
				'rem-point8': '.8rem',
				'rem-point95': '.95rem',
				'rem-point9': '.9rem',
				'rem-2': '2rem',
				'rem-1': '1rem',
				'rem-1point1': '1.1rem',
				'rem-1point7': '1.7rem',
				'rem-1point9': '1.9rem',
				'rem-1point3': '1.3rem',
				'rem-1point1': '1.1rem',
				'rem-point85': '.85rem'
			},
			flex: {
				'one-one-30perc': '1 1 30%',
				'one-one-49perc': '1 1 49%',
				'one-one-60perc': '1 1 60%',
				'one-one-65perc': '1 1 65%',
				'zero-one-30perc': '0 1 30%'
			},
			height: {
				'42px': '42px',
				'17px': '17px',
				'12-important': '12px !important',
				'18-important': '18px !important',
				'15px': '15px',
				'25px': '25px',
				'36px': '36px',
				'84perc': '84%',
				'94perc': '94%',
				'97perc': '97%',
				fit: 'fit-content'
			},
			inset: {
				'5point5': '5.5rem',
				'30rem': '30rem'
			},
			keyframes: {
				close: {
					'0%': { transform: 'scaleY(1)' },
					'100%': { transform: 'scaleY(0)' }
				},
				open: {
					'0%': { transform: 'scaleY(0)' },
					'100%': { transform: 'scaleY(1)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			letterSpacing: {
				'zero-point-one': '.01em',
				'zero-zero-four': '.004em'
			},
			lineHeight: {
				num3: '3'
			},
			margin: {
				'10point5': '10.5rem',
				'6point5': '6.5rem',
				'zero-auto': '0 auto',
				'1point3': '1.3rem',
				dashboardContent: '.5rem 0 .8rem .3rem',
				dashboardContenth1: '.6rem 0',
				dashboardCards: '-.5rem .3rem .3rem .3rem',
				teamList: '1rem .5rem',
				menuitem: '.5rem .2rem .5rem .15rem',
				point67: '0.67em 0',
				point8: '.8rem',
				point6: '.6rem',
				'point5-zero': '.5rem 0',
				'1point5': '1.5rem 0',
				vertTool: '.5rem .4rem .5rem .6rem',
				'5point2': '5.2rem',
				'18point7rem': '18.7rem'
			},
			maxHeight: {
				'74perc': '74%',
				'92perc': '92%'
			},
			maxWidth: {
				1600: '1600px'
			},
			minWidth: {
				250: '250px'
			},
			padding: {
				'1point8': '1.8rem',
				'point-6': '.6rem',
				'point-7': '.7rem',
				dashboardContenth1: '0 1rem 0 0',
				'zero-point5-doublezero': '0 .5rem 0 0 '
			},
			textColor: {
				'orange-variant1': '#df5658',
				'gray-variant1': '#374753',
				'blue-variant2': '#00A9E6',
				fff: '#fff'
			},
			transitionDelay: {
				0: '0s'
			},
			transitionDuration: {
				point5: '0.5s'
			},
			transitionProperty: {
				onlytransform: 'transform'
			},
			width: {
				'27px': '27px',
				'18px': '18px',
				'28px': '28px',
				'36px': '36px',
				'80px': '80px',
				'30perc': '30%',
				'70perc': '70%'
			}
		}
	},
	variants: {
		extend: {
			listStyleType: ['hover', 'focus'],
			listStylePosition: ['hover', 'focus'],
			opacity: ['disabled'],
			textColor: ['disabled']
		}
	},
	plugins: []
};
