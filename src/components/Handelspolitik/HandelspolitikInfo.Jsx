import Hovedinfo from "../../utils/Virksomhedsinfo/Hovedinfo";

const HandelspolitikInfo = {
  overskrift: `Handelspolitik hos ${Hovedinfo.virksomhedsnavn}`,
  bestillingOverskrift: "1. Bestillinger og Betaling",
  bestillingTekst:
    "Vi accepterer bestillinger online via vores hjemmeside. Betaling kan foretages sikkert gennem vores sikre betalingsgateway. Din ordre vil blive bekræftet via e-mail, og vi begynder behandlingen, når betalingen er modtaget.",
  leveringOverskrift: "2. Levering",
  leveringTekst:
    "Vi bestræber os på at behandle og sende ordrer hurtigst muligt. Leveringstiden vil variere afhængigt af din bopæl og den valgte forsendelsesmetode. Sporingsoplysninger vil blive sendt ved afsendelse.",
  returneringOverskrift: "3. Returnering og Refusion",
  returneringTekst:
    "Vi accepterer returneringer inden for [angiv antal dage] dage efter modtagelse af varen. Varer skal returneres i original emballage og være ubrugte. Kontakt vores kundeservice for at arrangere returnering, og vi vil behandle refusionen efter modtagelse af returnerede varer.",
  kundeserviceOverskrift: "4. Kundeservice",
  kundeserviceTekst: `Vi sætter pris på vores kunder, og vores kundeserviceteam er her for at hjælpe dig. Hvis du har spørgsmål, bekymringer eller brug for assistance, er du velkommen til at kontakte os på ${Hovedinfo.email} eller via vores kontaktformular på hjemmesiden.`,
};

export default HandelspolitikInfo;
