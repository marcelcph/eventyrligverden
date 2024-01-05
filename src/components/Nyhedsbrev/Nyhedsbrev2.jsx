import NyhedsbrevSettings from "./NyhedsbrevSettings";
function Nyhedsbrev2() {
  return (
    <>
      <div className=" py-12 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
          <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
            <div>
              <h2 className="">
                {NyhedsbrevSettings.titel}
              </h2>
            </div>
            <div className="xl:mt-4 mt-2">
              <p className="">
                {NyhedsbrevSettings.undertitel}
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="">
                {NyhedsbrevSettings.tekst}
              </p>
            </div>
            <div className="xl:mt-12 mt-6 w-full">
              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 placeholder-gray-600"
                placeholder="Email adresse"
                type="email"
                name="input"
              />
            </div>
            <div className="xl:mt-4 mt-2 w-full">
              <button className="hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 h-12 w-full sm:w-96 md:w-full lg:w-72 bg-gray-800 text-base font-medium leading-4 text-white">
                {NyhedsbrevSettings.knaptekst}
              </button>
            </div>
          </div>
          <div>
            <img src={NyhedsbrevSettings.billede} alt="Nyhedsbrev" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nyhedsbrev2;
