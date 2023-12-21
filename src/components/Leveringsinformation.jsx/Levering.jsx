import Leveringsinfo from "./LeveringsInfo";

function Levering() {
  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-3xl">{Leveringsinfo.overskrift}</h1>
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 my-3"
        >
          <div className="collapse-title text-xl font-medium">
            {Leveringsinfo.forsendelseOverskrift}
          </div>
          <div className="collapse-content">
            <p>{Leveringsinfo.forsendelseTekst}</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 my-3"
        >
          <div className="collapse-title text-xl font-medium">
            {Leveringsinfo.sporingOverskrift}
          </div>
          <div className="collapse-content">
            <p>{Leveringsinfo.sporingTekst}</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 my-3"
        >
          <div className="collapse-title text-xl font-medium">
            {Leveringsinfo.leveringsområdeOverskrift}
          </div>
          <div className="collapse-content">
            <p>{Leveringsinfo.leveringsområdeTekst}</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 my-3"
        >
          <div className="collapse-title text-xl font-medium">
            {Leveringsinfo.returneringOverskrift}
          </div>
          <div className="collapse-content">
            <p>{Leveringsinfo.returneringTekst}</p>
          </div>
        </div>
        <p className="mt-12 text-lg">{Leveringsinfo.slutTekst}</p>
      </div>
    </div>
  );
}

export default Levering;
