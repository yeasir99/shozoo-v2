"use client";

import { FaAngleRight, FaArrowRight, FaBars, FaUser } from "react-icons/fa";
import { FaAngleLeft, FaX } from "react-icons/fa6";
import("swiper/react");

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const shows = [
	{
		title: "Slice Of Life",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/e65ff0dc-ae94-42a0-b112-e187f97b07b3.jpg",
		videos: "139 videos",
		link: "/show/drunk-friend/?ref=watch_shows",
	},
	{
		title: "Cheap Vs Expensive",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/7f1f7960-df14-447b-9482-0efb6fe67c32.jpg",
		videos: "16 videos",
		link: "/show/cheapvsexpensive/?ref=watch_shows",
	},
	{
		title: "Interviews",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/dccb282f-ad01-4b92-a472-6dfe67d97403.jpg",
		videos: "18 videos",
		link: "/show/interview/?ref=watch_shows",
	},
	{
		title: "FIQ",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/fefa830f-f75f-44a7-ade3-25e4d1a2318c.jpg",
		videos: "4 videos",
		link: "/show/fiq/?ref=watch_shows",
	},
	{
		title: "Specials",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/6815ca18-d931-4fbc-8c5c-717c2f328912.jpg",
		videos: "8 videos",
		link: "/show/special/?ref=watch_shows",
	},
	{
		title: "FIQ",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/fefa830f-f75f-44a7-ade3-25e4d1a2318c.jpg",
		videos: "4 videos",
		link: "/show/fiq/?ref=watch_shows",
	},
	{
		title: "Specials",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/6815ca18-d931-4fbc-8c5c-717c2f328912.jpg",
		videos: "8 videos",
		link: "/show/special/?ref=watch_shows",
	},
	{
		title: "FIQ",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/fefa830f-f75f-44a7-ade3-25e4d1a2318c.jpg",
		videos: "4 videos",
		link: "/show/fiq/?ref=watch_shows",
	},
	{
		title: "Specials",
		image:
			"https://wp.scoopwhoop.com/wp-content/uploads/2022/08/6815ca18-d931-4fbc-8c5c-717c2f328912.jpg",
		videos: "8 videos",
		link: "/show/special/?ref=watch_shows",
	},
];

const SumMenu = ({ onClose }) => {
	const container = "flex justify-between max-w-[1100px] mx-auto";
	return (
		<div className='fixed w-full h-full lg:w-screen lg:h-screen top-0 left-0 overflow-x-hidden bg-white transition-transform duration-300 ease-out z-[200] bg-custom-gradient'>
			<div className='text-black bg-white p-3 box-border border-0 border-solid border-neutral list-none font-sans leading-inherit tabular-nums'>
				<div className={container}>
					<div>
						<a className='cursor-pointer' href='/?ref=nav_top'>
							<svg width='70' height='52' fill='none'>
								<path
									d='M70 0v.6c-.025.096-.065.191-.073.288-.213 2.65-.423 5.3-.632 7.95l-.84 10.73c-.312 3.934-.627 7.866-.947 11.798-.294 3.69-.588 7.38-.88 11.071-.069.846-.082.833-.975.964-4.763.704-9.525 1.41-14.287 2.121-.73.108-1.463.209-2.238.32l-1.533-30.719-.475.088-1.617 31.177-17.414 2.588-3.43-42.242 11.034-1.638 1.446 30.73c.342.048.493-.045.511-.378.112-2.126.242-4.253.365-6.379l.568-9.76c.228-3.868.457-7.735.687-11.602.063-1.05.13-2.101.195-3.173L55.2 2.197l1.844 30.695.476-.065 1.446-31.19L70 0z'
									fill='url(#smnav_linear)'
								/>
								<path
									d='M23.725 22.66l-10.903 1.62v-.465-5.232c0-.172.008-.345-.017-.514-.05-.339-.15-.675-.571-.72-.418-.043-.784.114-.944.503a2.28 2.28 0 0 0-.157.833c-.015 1.558.013 3.117-.015 4.674-.018.963.42 1.653 1.307 2.002.734.289 1.525.464 2.306.619 1.737.344 3.427.813 5.08 1.44 2.101.798 3.27 2.31 3.8 4.336.17.651.261 1.32.272 1.991.033 2.244.052 4.49.001 6.733-.056 2.463-.658 4.782-2.287 6.765-1.492 1.816-3.492 2.908-5.736 3.615-2.68.843-5.438 1.273-8.261 1.105a11.483 11.483 0 0 1-2.833-.526c-2.553-.83-3.864-2.702-4.348-5.154a15.573 15.573 0 0 1-.271-2.68c-.04-1.944-.014-3.89-.014-5.833 0-.113.01-.226.018-.37l10.869-1.616V41.426c0 .172 0 .343.009.515.019.353.129.651.537.743.386.087.85-.115.99-.488.103-.275.15-.583.153-.877.015-1.544-.004-3.088.011-4.632.01-.918-.386-1.618-1.27-1.926-1.028-.359-2.096-.627-3.162-.871-1.478-.34-2.928-.733-4.326-1.32C1.798 31.66.71 29.99.231 27.865c-.072-.32-.13-.65-.131-.976-.02-3.142-.308-6.294.196-9.417.613-3.798 2.915-6.373 6.58-7.81 3.228-1.267 6.602-1.799 10.09-1.504 3.687.312 6.078 2.519 6.563 6.082.15 1.1.168 2.22.188 3.333.03 1.685.008 3.37.008 5.086z'
									fill='url(#smnav1_linear)'
								/>
								<defs>
									<linearGradient
										id='smnav_linear'
										x1='-6.087'
										y1='-13'
										x2='44.03'
										y2='51.538'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#FFEC41' />
										<stop offset='1' stopColor='#FFB341' />
									</linearGradient>
									<linearGradient
										id='smnav1_linear'
										x1='-12.174'
										y1='6.5'
										x2='10.013'
										y2='52.931'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#FFEC41' />
										<stop offset='1' stopColor='#FFB341' />
									</linearGradient>
								</defs>
							</svg>
						</a>
					</div>
					<div className='text-black box-border border-0 border-solid border-neutral leading-inherit font-sans list-none bg-opacity-100 flex items-center gap-4'>
						<FaBars className='w-5 h-[31px]' />

						<button type='button' onClick={() => onClose()}>
							<FaX className='w-[22px] h-[22px]' />
						</button>
					</div>
				</div>
			</div>

			<div
				className='w-full max-w-[1100px] mx-auto list-none leading-inherit font-sans tab-[4] 
    text-opacity-100  box-border'
			>
				<div className='mb-8'>
					<div className='pt-[30px]'>
						<div className='leading-tight flex items-center mb-[30px]'>
							<span>
								<FaUser className='w-[18px] h-[18px] text-white' />
							</span>
							<button type='button' className='pl-3 text-white'>
								Sign In
							</button>
						</div>
						<div className='flex'>
							<div className='relative flex-1 w-1/2 pr-[34px] after:w-[1px] after:h-[70%] after:top-[40px] after:absolute after:bg-white after:bottom-0 after:opacity-[0.5] after:right-0'>
								<div className='flex items-center mb-[14px]'>
									<h2 className='tracking-[.41em] text-[13px] font-bold text-white mr-2'>
										CATEGORIES
									</h2>
									<span className='h-[1px] bg-white flex-1'></span>
								</div>
								<div className='flex flex-wrap justify-between category_items'>
									{[
										"Viral",
										"Entertainment",
										"Humor",
										"Opinion",
										"Food",
										"Travel",
										"Women",
										"LGBTQIA",
										"Animals",
										"Sex & Relationships",
										"Culture",
										"Sports",
										"Tech",
										"Men",
										"Health",
										"Bigg Boss",
									].map((category) => (
										<div key={category} className='w-1/3'>
											<a
												className='hover:scale-[1.05] transition-transform text-white text-lg font-bold leading-6 no-underline mb-5 block duration-150  ease-in-out border-0  border-gray-300 box-border font-sans'
												role='presentation'
												href={`/category/${category
													.toLowerCase()
													.replace(/ /g, "-")}/?ref=nav_links`}
											>
												{category}
											</a>
										</div>
									))}
								</div>
							</div>
							<div className='flex-1 w-1/2 pl-[34px]'>
								<div className='flex items-center mb-[14px]'>
									<h2 className='tracking-[.41em] text-[13px] pr-4 font-bold text-white'>
										OUR CHANNELS
									</h2>
									<span className='h-[1px] bg-white flex-1'></span>
								</div>
								<div className='flex justify-evenly items-center h-[90%]'>
									{[
										{
											href: "https://hindi.scoopwhoop.com/?ref=scoopwhoop&utm_source=scoopwhoop&utm_medium=desktop",
											imgSrc: "/_next/static/media/sw_hindi.40fd7a47.svg",
											alt: "SW Hindi",
										},
										{
											href: "https://www.youtube.com/channel/UC7lmZqhJeTzeQQkqNvfmjqw",
											imgSrc: "/_next/static/media/ok_tested.58dc2292.svg",
											alt: "OK Tested",
										},
										{
											href: "https://www.youtube.com/user/scoopwhoopvideos",
											imgSrc: "/_next/static/media/sw_ske.102ee47c.svg",
											alt: "SW Sketches",
										},
										{
											href: "https://www.vagabomb.com/?ref=scoopwhoop&utm_source=scoopwhoop&utm_medium=desktop",
											imgSrc: "/_next/static/media/vb.676f3863.svg",
											alt: "Vagabomb",
										},
									].map(({ href, imgSrc, alt }) => (
										<a key={alt} target='_blank' href={href} rel='noreferrer'>
											<div className='w-20 h-20 relative'>
												<img
													alt={alt}
													loading='lazy'
													decoding='async'
													className='object-cover'
													src={imgSrc}
													style={{
														position: "absolute",
														height: "100%",
														width: "100%",
														left: 0,
														top: 0,
														right: 0,
														bottom: 0,
														color: "transparent",
													}}
												/>
											</div>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-between max-w-[1100px] mx-auto'>
				<div className='mb-11'>
					<div className='mb-7'>
						<div className='mb-2 lg:mb-[30px] lg:text-[22px] text-base lg:text-[#e0dede] text-white font-bold'>
							<div className='hidden lg:block max-w-2xl mb-9'>
								<div className='flex pt-4 pr-4 pb-2 flex-1 items-center'>
									<span className='pr-3 lg:uppercase text-white text-lg lg:text-[13px] lg:tracking-[4px] font-bold leading-[20px]'>
										Our Shows
									</span>
									<span className='bg-[#ffec41] h-[2px] flex-1 hidden lg:inline-block'></span>
								</div>
							</div>
						</div>

						<div className='max-w-[1100px]'>
							<Swiper
								modules={[Navigation, Autoplay]}
								spaceBetween={15}
								slidesPerView={"auto"}
								navigation
							>
								{shows.map((show, index) => (
									<SwiperSlide key={index} style={{ width: "207px" }}>
										<div className='showSlide relative lg:w-[212px] lg:h-[365px] w-[167px] h-[287px]'>
											<img
												src={show.image}
												alt={show.title}
												className='object-cover'
												style={{
													position: "absolute",
													height: "100%",
													width: "100%",
													inset: "0px",
												}}
											/>
											<div className='sliderImageOverlay'></div>
											<div className='flex flex-col h-full'>
												<div className='flex-1 z-10 relative'>
													<a
														className='absolute top-0 right-0 bottom-0 left-0'
														href={show.link}
													>
														<span></span>
													</a>
												</div>
												<div className='p-3 z-10'>
													<button
														type='button'
														className='flex flex-col text-left'
													>
														<div className='h-2/12 w-2/12'>
															<svg
																width='28'
																height='16'
																fill='currentColor'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	fill='#ADADAD'
																	fillRule='evenodd'
																	d='M13.563 4.445l11.373 11.288 2.189-2.205L13.546.05.07 13.629l2.205 2.19L13.563 4.444z'
																	clipRule='evenodd'
																></path>
															</svg>
														</div>
														<h4 className='text-white text-xl my-1 font-bold uppercase'>
															{show.title}
														</h4>
													</button>
													<a
														className='flex leading-4 pr-2 items-center showSlideArrow'
														href={show.link}
													>
														<span className='text-sm leading-4 text-[#ffec41]'>
															Watch now
														</span>
														<svg
															width='15'
															height='8'
															viewBox='0 0 15 8'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<path
																d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z'
																fill='#FFEC41'
															></path>
														</svg>
													</a>
													<span className='text-white block lg:block text-sm leading-4 pt-1'>
														{show.videos}
													</span>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-between max-w-[1100px] mx-auto'>
				<div className='flex justify-between flex-wrap w-[70%] tracking-[.235em]'>
					<a
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='/about/?ref=nav_links'
					>
						ABOUT US
					</a>
					<a
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='/contact/?ref=nav_links'
					>
						CONTACT US
					</a>
					<a
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='/advertise/?ref=nav_links'
					>
						ADVERTISE WITH US
					</a>
					<a
						target='_blank'
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='https://recruiterflow.com/scoopwhoop/jobs'
					>
						CAREERS
					</a>
					<a
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='/privacy-policy/?ref=nav_links'
					>
						PRIVACY POLICY
					</a>
					<a
						className='w-[33%] mb-[10px] hover:scale-[1.05] transition-transform text-sm text-white'
						href='/terms-and-conditions/?ref=nav_links'
					>
						TERMS AND CONDITIONS
					</a>
				</div>
				<a
					className='flex mt-4 hover:scale-105 transition-transform float-right text-xl leading-4 pr-2'
					href='/all_shows/?ref=nav_show'
				>
					<div className='pr-2 text-white'>View All</div>
					<FaArrowRight className='w-[17] h-[13px] text-white' />
				</a>
			</div>
		</div>
	);
};

export default SumMenu;
