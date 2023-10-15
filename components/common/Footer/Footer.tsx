/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="pt-16 mx-auto w-full bg-red-600">
			<div className="max-w-[85rem] mx-auto px-4 md:px-6 lg:px-8 grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
				<div className="md:max-w-md lg:col-span-2">
					<a className="flex-none text-xl font-semibold relative block h-16 w-28" href="/" aria-label="Brand">
						<svg className="h-16" viewBox="0 0 168 82" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="5" width="41" height="71" rx="4" fill="#DC2626"/>
							<path d="M18.7273 73H8.86932V43.9091H18.9261C21.8144 43.9091 24.2955 44.4915 26.3693 45.6562C28.4527 46.8116 30.053 48.4735 31.1705 50.642C32.2879 52.8106 32.8466 55.4053 32.8466 58.4261C32.8466 61.4564 32.2831 64.0606 31.1562 66.2386C30.0388 68.4167 28.4242 70.0881 26.3125 71.2528C24.2102 72.4176 21.6818 73 18.7273 73ZM14.1392 68.4403H18.4716C20.4981 68.4403 22.1884 68.071 23.5426 67.3324C24.8968 66.5843 25.9148 65.4716 26.5966 63.9943C27.2784 62.5076 27.6193 60.6515 27.6193 58.4261C27.6193 56.2008 27.2784 54.3542 26.5966 52.8864C25.9148 51.4091 24.9063 50.3059 23.571 49.5767C22.2453 48.8381 20.5975 48.4688 18.6278 48.4688H14.1392V68.4403Z" fill="white"/>
							<path d="M13.2727 9.90909L19.679 20.5625H19.9062L26.3409 9.90909H32.3494L23.3864 24.4545L32.4915 39H26.3835L19.9062 28.4176H19.679L13.2017 39H7.12216L16.3125 24.4545L7.2358 9.90909H13.2727Z" fill="white"/>
							<path d="M43.8693 39V9.90909H49.1392V23.2756H49.4943L60.8438 9.90909H67.2784L56.0284 22.9631L67.3778 39H61.0426L52.3636 26.5284L49.1392 30.3352V39H43.8693ZM86.593 17.9062C86.4605 16.6657 85.9018 15.6998 84.9169 15.0085C83.9415 14.3172 82.6726 13.9716 81.1101 13.9716C80.0116 13.9716 79.0694 14.1373 78.2834 14.4688C77.4974 14.8002 76.8961 15.25 76.4794 15.8182C76.0627 16.3864 75.8497 17.035 75.8402 17.7642C75.8402 18.3703 75.9775 18.8958 76.2521 19.3409C76.5362 19.786 76.9197 20.1648 77.4027 20.4773C77.8857 20.7803 78.4207 21.036 79.0078 21.2443C79.5949 21.4527 80.1868 21.6278 80.7834 21.7699L83.5107 22.4517C84.6091 22.7074 85.665 23.053 86.6783 23.4886C87.701 23.9242 88.6148 24.4735 89.4197 25.1364C90.2341 25.7992 90.8781 26.5994 91.3516 27.5369C91.825 28.4744 92.0618 29.5729 92.0618 30.8324C92.0618 32.5369 91.6262 34.0379 90.755 35.3352C89.8838 36.6231 88.6243 37.6316 86.9766 38.3608C85.3383 39.0805 83.3544 39.4403 81.0249 39.4403C78.7616 39.4403 76.7966 39.09 75.13 38.3892C73.4728 37.6884 72.1754 36.6657 71.2379 35.321C70.3099 33.9763 69.808 32.3381 69.7322 30.4062H74.9169C74.9927 31.4195 75.3052 32.2623 75.8544 32.9347C76.4036 33.607 77.1186 34.1089 77.9993 34.4403C78.8894 34.7718 79.8838 34.9375 80.9822 34.9375C82.1281 34.9375 83.1319 34.767 83.9936 34.4261C84.8648 34.0758 85.5466 33.5928 86.0391 32.9773C86.5315 32.3523 86.7824 31.6231 86.7919 30.7898C86.7824 30.0322 86.5599 29.4072 86.1243 28.9148C85.6887 28.4129 85.0779 27.9962 84.2919 27.6648C83.5154 27.3239 82.6063 27.0208 81.5646 26.7557L78.255 25.9034C75.8591 25.2879 73.9652 24.3551 72.5732 23.1051C71.1906 21.8456 70.4993 20.1742 70.4993 18.0909C70.4993 16.3769 70.9633 14.8759 71.8913 13.5881C72.8288 12.3002 74.1025 11.3011 75.7124 10.5909C77.3222 9.87121 79.1451 9.51136 81.1811 9.51136C83.2455 9.51136 85.0542 9.87121 86.6072 10.5909C88.1697 11.3011 89.3961 12.2907 90.2862 13.5597C91.1764 14.8191 91.6357 16.268 91.6641 17.9062H86.593Z" fill="white"/>
							<path d="M49.1392 43.9091V73H43.8693V43.9091H49.1392ZM74.3345 53.1989C74.0978 52.4318 73.7711 51.7453 73.3544 51.1392C72.9472 50.5237 72.4548 49.9981 71.8771 49.5625C71.3089 49.1269 70.6555 48.8002 69.9169 48.5824C69.1783 48.3551 68.3733 48.2415 67.5021 48.2415C65.9396 48.2415 64.5476 48.6345 63.326 49.4205C62.1044 50.2064 61.1432 51.3617 60.4425 52.8864C59.7512 54.4015 59.4055 56.2481 59.4055 58.4261C59.4055 60.6231 59.7512 62.4839 60.4425 64.0085C61.1338 65.5331 62.0949 66.6932 63.326 67.4886C64.5571 68.2746 65.987 68.6676 67.6158 68.6676C69.093 68.6676 70.3714 68.3835 71.451 67.8153C72.54 67.2472 73.3781 66.4422 73.9652 65.4006C74.5523 64.3494 74.8459 63.1184 74.8459 61.7074L76.0391 61.892H68.1413V57.7727H79.9453V61.267C79.9453 63.7576 79.415 65.9119 78.3544 67.7301C77.2938 69.5483 75.8355 70.9498 73.9794 71.9347C72.1233 72.91 69.9927 73.3977 67.5874 73.3977C64.9074 73.3977 62.5542 72.7964 60.5277 71.5938C58.5107 70.3816 56.9339 68.6629 55.7976 66.4375C54.6707 64.2027 54.1072 61.5511 54.1072 58.483C54.1072 56.1345 54.4387 54.0369 55.1016 52.1903C55.7739 50.3438 56.7114 48.7765 57.9141 47.4886C59.1167 46.1913 60.5277 45.2064 62.147 44.5341C63.7663 43.8523 65.5277 43.5114 67.4311 43.5114C69.041 43.5114 70.5419 43.7481 71.9339 44.2216C73.326 44.6856 74.5618 45.3485 75.6413 46.2102C76.7304 47.072 77.6252 48.0947 78.326 49.2784C79.0268 50.4621 79.486 51.7689 79.7038 53.1989H74.3345ZM90.3111 43.9091V73H85.0412V43.9091H90.3111ZM94.7393 48.3267V43.9091H117.95V48.3267H108.958V73H103.731V48.3267H94.7393ZM122.644 73H117.019L127.261 43.9091H133.766L144.022 73H138.397L130.627 49.875H130.4L122.644 73ZM122.829 61.5938H138.17V65.8267H122.829V61.5938ZM147.854 73V43.9091H153.124V68.5824H165.936V73H147.854Z" fill="white"/>
						</svg>
					</a>
					<div className="mt-4 lg:max-w-sm">
						<p className="text-sm text-gray-200">
						Xksdigital - Votre partenaire pour l'excellence digitale. Boostez votre présence en ligne avec l'agence digitale de référence. Notre expertise en marketing digital, design web et développement vous permettra de transformer votre vision en réalité.
						</p>
						<p className="mt-4 text-sm text-gray-200">
						Découvrez comment Xksdigital peut propulser votre entreprise vers de nouveaux sommets. Contactez-nous dès aujourd'hui.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
					<div>
						<p className="font-semibold tracking-wide text-gray-200">
						Category
						</p>
						<ul className="mt-2 space-y-2">
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							News
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							World
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Games
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							References
							</a>
						</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-200">
						Business
						</p>
						<ul className="mt-2 space-y-2">
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Web
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							eCommerce
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Business
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Entertainment
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Portfolio
							</a>
						</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-200">Apples</p>
						<ul className="mt-2 space-y-2">
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Media
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Brochure
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Nonprofit
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Educational
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Projects
							</a>
						</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-200">Cherry</p>
						<ul className="mt-2 space-y-2">
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Infopreneur
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Personal
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Wiki
							</a>
						</li>
						<li>
							<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
							Forum
							</a>
						</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="max-w-[85rem] mx-auto px-4 md:px-6 lg:px-8">
				<div className="w-full flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
					<p className="text-sm text-gray-200">
						© 2023 Tous droits réservés à XKSDIGITAL.
					</p>
					<div className="flex items-center mt-4 space-x-4 sm:mt-0">
						<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
							<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
							</svg>
						</a>
						<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							<svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
							<circle cx="15" cy="15" r="4" />
							<path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
							</svg>
						</a>
						<a
							href="/"
							className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
							<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer