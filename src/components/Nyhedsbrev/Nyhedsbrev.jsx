import NyhedsbrevSettings from "./NyhedsbrevSettings";

function Nyhedsbrev() {
  return (
    <>
      <div className="bg-accent text-center">
        <div className="py-12">
          <h2 className="text-3xl text-bold pb-5">
            {NyhedsbrevSettings.titel}
          </h2>
          <p className="pb-5">{NyhedsbrevSettings.undertitel}</p>
          <input
            type="text"
            placeholder="E-mail adresse"
            className="input input-bordered input-secondary w-full max-w-sm text-center"
          />
          <div className="justify-end pt-5">
            <button className="btn btn-primary">
              {NyhedsbrevSettings.knaptekst}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nyhedsbrev;
