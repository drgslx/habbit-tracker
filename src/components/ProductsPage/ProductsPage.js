
import React from "react";


const ProductsPage = () => {
  return (
    <>
      <div className=" py-[42px] bg-[#161616] lg:py-[62px]">
        <div className=" container mx-auto">
          <h1 className="text-white text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px] lg:max-w-[800px] mx-auto">
            Our Products
          </h1>

      

            <div
              className="relative z-10 border border-[#999] mb-[42px] sm:p-[40px] md:p-[30px] xl:p-[0] xl:border-none"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
             
            </div>

            <div
              className="relative z-10 border p-[25px] sm:p-[40px] md:p-[30px] xl:p-[0] xl:border-none"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <h1 className="text-white text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[15px] md:mb-[15px] lg:max-w-[700px] mx-auto">
              </h1>
              
            </div>
          </div>
        </div>
    </>
  );
};

export default ProductsPage;
