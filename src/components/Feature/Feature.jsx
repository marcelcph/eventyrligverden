import React from 'react'
import FeatureSettings from "./FeatureSettings"
function Feature() {
  return (
      
          <div className=" ">
            <div className=" flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="text-primary mb-2 block text-lg font-semibold">
                    Our Services
                  </span>
                  <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                    What We Offer
                  </h2>
                  <p className="text-body-color text-base dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap">
              {FeatureSettings.map((service, index) => (
                <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                    <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {service.svgPath}
                      </svg>
                    </div>
                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                      {service.title}
                    </h4>
                    <p className="text-body-color dark:text-dark-6">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
      )
}

export default Feature