import CookiepolitikInfo from "./CookiepolitikInfo";

function Cookiepolitik() {
  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-3xl">{CookiepolitikInfo.overskrift}</h1>
      <div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {CookiepolitikInfo.indsamlingOverskrift}
          </div>
          <div>
            <p>{CookiepolitikInfo.indsamlingTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {CookiepolitikInfo.formaalOverskrift}
          </div>
          <div>
            <p>{CookiepolitikInfo.formaalTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {CookiepolitikInfo.tredjepartOverskrift}
          </div>
          <div>
            <p>{CookiepolitikInfo.tredjepartTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {CookiepolitikInfo.acceptOverskrift}
          </div>
          <div>
            <p>{CookiepolitikInfo.acceptTekst}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="text-xl font-medium">
            {CookiepolitikInfo.kontaktOverskrift}
          </div>
          <div>
            <p>{CookiepolitikInfo.kontaktTekst}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookiepolitik;
