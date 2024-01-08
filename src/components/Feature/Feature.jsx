import FeatureSettings from "./FeatureSettings";

function Feature() {
  return (
    <div className=" ">
     
      <div className=" flex flex-wrap gap-2 justify-center pt-8">
        {FeatureSettings.map((service, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-[30%]">
            <div className="mb-9 rounded-[20px] bg-secondary  p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  {service.svgPath}
                </svg>
              </div>
              <h4 className="text-primary mb-[14px] text-2xl font-semibold">
                {service.Card1title}
              </h4>
              <p className="text-body-color">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
