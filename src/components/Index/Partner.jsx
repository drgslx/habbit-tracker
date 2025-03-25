"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import pratnerLogo1 from "/public/images/partner-white-logo1.png";
import pratnerLogo2 from "/public/images/partner-white-logo2.png";
import pratnerLogo3 from "/public/images/partner-white-logo3.png";
import pratnerLogo4 from "/public/images/partner-white-logo4.png";
import pratnerLogo5 from "/public/images/partner-white-logo5.png";
import pratnerLogo6 from "/public/images/partner-white-logo6.png";

const Partner = ({ partners }) => {
	if (partners.length == 0) return;
	return (
		<>
			<div className="bg-[#2B4660] py-[50px] md:py-[80px] lg:py-[140px]">
				<div className="container mx-auto xl:px-[30px] lg:max-w-[1710px]">
					<Swiper
						spaceBetween={30}
						autoplay={{
							delay: 5000,
							pauseOnMouseEnter: true,
							disableOnInteraction: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							1200: {
								slidesPerView: 6,
							},
						}}
						modules={[Autoplay]}
						className="pratner-slider"
					>
						{partners.map((partner, index) => (
							<SwiperSlide key={index} className="text-center">
								<Image
									src={partner.image}
									alt="pratner"
									className="inline-block"
									width={155}
									height={49}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Partner;
