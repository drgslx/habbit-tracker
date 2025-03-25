"use client";

import React from "react";
import Image from "next/image";

import process1 from "/public/images/process1.png";
import process2 from "/public/images/process2.png";
import process3 from "/public/images/process3.png";

import shape6 from "/public/images/shape6.png";
import shape7 from "/public/images/shape7.png";

const WorkingProcess = () => {
	return (
		<>
			<div className="bg-[#173948] py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto">
					<h1 className="text-white text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px] lg:max-w-[600px] mx-auto">
						How we are working
					</h1>

					<div className="relative space-y-[30px] lg:space-y-[50px]">
						<div
							className="relative z-10 border border-[#999] p-[25px] sm:p-[40px] md:p-[30px] xl:p-[0] xl:border-none"
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							

								<div className="text-[#E1F8E678] space-y-[15px] lg:pl-[30px] rtl:lg:pl-0 rtl:lg:pr-[30px] max-w-[496px]">
									<h3 className="text-[#E1F8E6] text-[22px] md:text-[25px] lg:text-[30px] leading-[1.1]">
										<span className="text-[#E1F8E678]">
											01.
										</span>{" "}
										<span className="text-[#FCA120]">
											Write us on whatsapp
										</span>{" "}
										for ordering
									</h3>

									<p className="text-[15px]">
										You just write to us on whatsapp regarding the product code and color and you will give a response from us!
									</p>

									<p className="text-[15px]">
										Unfortunately, we do not have a proper way of ordering so this is the best workaround
									</p>
								</div>
							</div>
						</div>

						<div
							className="relative z-10 border border-[#999] p-[25px] sm:p-[40px] md:p-[30px] xl:p-[0] xl:border-none"
							data-aos="fade-in"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<div className="grid items-center gap-[30px] lg:gap-[0] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
								<div className="text-[#E1F8E678] space-y-[15px] xl:pl-[150px] rtl:xl:pl-0 rtl:xl:pr-[150px] max-w-[610px]">
									<h3 className="text-[#E1F8E6] text-[22px] md:text-[25px] lg:text-[30px] leading-[1.1]">
										<span className="text-[#E1F8E678]">
											02.
										</span>{" "}
										<span className="text-[#FCA120]">
											We are processing
										</span>{" "}
										your order
									</h3>

									<p className="text-[15px]">
										We sill process your order as fast as we can to give you a good working experience
									</p>

									
								</div>

								<div>
									<Image src={process2} alt="process" />
								</div>
							</div>
						</div>

						<div
							className="relative z-10 border border-[#999] p-[25px] sm:p-[40px] md:p-[30px] xl:p-[0] xl:border-none"
							data-aos="fade-in"
							data-aos-delay="300"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<div className="grid items-center gap-[30px] lg:gap-[0] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
								<div>
									<Image src={process3} alt="process" />
								</div>

								<div className="text-[#E1F8E678] space-y-[15px] lg:pl-[30px] rtl:lg:pl-0 rtl:lg:pr-[30px] max-w-[496px]">
									<h3 className="text-[#E1F8E6] text-[22px] md:text-[25px] lg:text-[30px] leading-[1.1]">
										<span className="text-[#E1F8E678]">
											03.
										</span>{" "}
										<span className="text-[#FCA120]">
											We will contact you in order to get your product!
										</span>{" "}
										And you will get your product
									</h3>

									

								
								</div>
							</div>
						</div>
						

						{/* Shape Images */}
						<Image
							src={shape6}
							alt="shape6"
							className="absolute xl:top-[241px] xl:left-[56px] xl:max-w-[632px] 2xl:top-[274px] 2xl:left-[67px] 2xl:max-w-[696px] z-0 hidden xl:block rtl:hidden"
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						/>
						<Image
							src={shape7}
							alt="shape7"
							className="absolute xl:top-[735px] xl:right-[12px] xl:max-w-[660px] 2xl:top-[814px] 2xl:right-[12px] 2xl:max-w-[750px] hidden xl:block rtl:hidden"
							data-aos="fade-in"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						/>
					</div>
				</div>
		</>
	);
};

export default WorkingProcess;
