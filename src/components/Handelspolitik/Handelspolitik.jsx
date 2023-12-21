import HandelspolitikInfo from "./HandelspolitikInfo.Jsx";

function Handelspolitik() {
  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-3xl">{HandelspolitikInfo.overskrift}</h1>
      <div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {HandelspolitikInfo.bestillingOverskrift}
          </div>
          <div>
            <p>{HandelspolitikInfo.bestillingTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {HandelspolitikInfo.leveringOverskrift}
          </div>
          <div>
            <p>{HandelspolitikInfo.leveringTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {HandelspolitikInfo.returneringOverskrift}
          </div>
          <div>
            <p>{HandelspolitikInfo.returneringTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {HandelspolitikInfo.kundeserviceOverskrift}
          </div>
          <div>
            <p>{HandelspolitikInfo.kundeserviceTekst}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Handelspolitik;
