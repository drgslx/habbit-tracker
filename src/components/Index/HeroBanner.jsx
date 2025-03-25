"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import heroImg from "/public/images/hero1.png";
import orangeSupplement from "/public/images/orange-supplement.png";
import { useParams } from "next/navigation";

const HeroBanner = ({ currentUser }) => {
	const { lang } = useParams();
	return (
		<>
			<div className="bg-[#E5FFEF] pt-[50px] md:pt-[60px] lg:pt-[80px]">
				<div className="container mx-auto max-w-[1570px]">
					<div className="relative">
						<h1
							className="large-heading text-[#D8F2E1] text-[50px] sm:text-[95px] md:text-[128px] lg:text-[165px] xl:text-[200px] 2xl:text-[280px] sm:tracking-[-5.6px] font-semibold leading-none md:absolute md:-top-[10px] md:left-0 md:z-0 text-center md:text-start"
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							Health Coach
						</h1>

						<div className="grid items-center gap-[40px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative">
							<div className="text-center md:text-start">
								<h4
									className="text-black text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] font-bold leading-none mb-[15px]"
									data-aos="fade-up"
									data-aos-delay="100"
									data-aos-duration="800"
									data-aos-once="true"
								>
									Hi, I’m John
								</h4>

								<h1
									className="text-black text-[35px] md:text-[50px] lg:text-[54px] xl:text-[70px] 2xl:text-[120px] font-bold leading-none mb-[25px] mb:md-[40px] lg:mb-[50px]"
									data-aos="fade-up"
									data-aos-delay="200"
									data-aos-duration="800"
									data-aos-once="true"
								>
									Personal{" "}
									<Image
										src={orangeSupplement}
										alt="orangeSupplement"
										className="rounded-full border-4 border-[#fff] hidden lg:inline-block"
									/>{" "}
									Health Coach
								</h1>

								<div
									className="space-x-[5px] sm:space-x-[20px] md:space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse"
									data-aos="fade-up"
									data-aos-delay="300"
									data-aos-duration="800"
									data-aos-once="true"
								>
									{!currentUser && (
										<Link
											href={`/${lang}/login`}
											className="primaryBg text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium inline-block rounded-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none transition duration-500 ease-in-out hover:bg-[#FCA120]"
										>
											Get Started Now
										</Link>
									)}

									<Link
										href={`/${lang}/courses`}
										className="text-black text-[12px] sm:text-[13px] lg:text-[14px] font-medium inline-block rounded-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#717FF8] hover:border-[#717FF8] hover:text-[#fff]"
									>
										View All Courses
									</Link>
								</div>

								<p className="text-[#587886] text-[14px] font-medium absolute bottom-[88px] 2xl:bottom-[135px] rtl:2xl:bottom-[115px] right-[53%] rtl:right-auto rtl:left-[0%] 2xl:right-[46%] rtl:2xl:right-auto rtl:2xl:left-[0%] hidden xl:block">
									Make your body shape
								</p>

								<div
									className="absolute bottom-[16%] 2xl:bottom-[20%] right-[38%] rtl:right-auto rtl:left-[0%] 2xl:right-[35%] rtl:2xl:right-auto rtl:2xl:left-[0%] hidden xl:block z-10"
									data-aos="fade-up"
									data-aos-delay="100"
									data-aos-duration="800"
									data-aos-once="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="158"
										height="208"
										viewBox="0 0 158 208"
										fill="none"
									>
										<path
											d="M149.854 0.646447C149.658 0.451184 149.342 0.451184 149.146 0.646447L145.964 3.82843C145.769 4.02369 145.769 4.34027 145.964 4.53553C146.16 4.7308 146.476 4.7308 146.672 4.53553L149.5 1.70711L152.328 4.53553C152.524 4.7308 152.84 4.7308 153.036 4.53553C153.231 4.34027 153.231 4.02369 153.036 3.82843L149.854 0.646447ZM149.5 207.5V208H150V207.5H149.5ZM149 1V207.5H150V1H149ZM149.5 207H0.5V208H149.5V207Z"
											fill="#587886"
										/>
										<path
											d="M141 9L149.5 1L157 9"
											stroke="#587886"
											strokeWidth="1.3"
										/>
									</svg>
								</div>
							</div>

							{/* Hero Image */}
							<div
								className="lg:text-end"
								data-aos="fade-down"
								data-aos-delay="400"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<Image
									src={heroImg}
									alt="Hero Image"
									className="inline-block"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBanner;
