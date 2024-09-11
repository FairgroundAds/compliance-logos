import ImageOrLink from "./ImageOrLink";

export default function ComplianceLogos(market) {
  switch (market) {
    case "United Kingdom":
      return (
        <>
          <ImageOrLink
            href="https://www.gamstop.co.uk/"
            src="/img/compliance/uk/GAM%20STOP.svg"
          />
          <ImageOrLink
            href="https://www.gamcare.org.uk/"
            src="/img/compliance/uk/GAM%20CARE.svg"
          />
          <ImageOrLink
            href="https://www.gambleaware.org/"
            src="/img/compliance/GambleAware.png"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "Australia":
      return (
        <>
          <ImageOrLink
            href="https://www.gamblinghelponline.org.au/"
            src="/img/compliance/au/Gambling%20Help%20Online.svg"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
          <p className="order-last mb-4 ml-4 mr-4 grow basis-full columns-1 text-center text-sm">
            For free and confidential support call 1800 858 858 or visit{" "}
            <a href="https://www.gamblinghelponline.org.au/">
              gamblinghelponline.org.au
            </a>
            .
          </p>
        </>
      );
    case "Austria":
      return <ImageOrLink src="/img/compliance/age/18+.svg" />;
    case "Canada":
      return (
        <>
          <ImageOrLink
            href="https://www.connexontario.ca/en-ca/"
            src="/img/compliance/ca/ConnexOntario.svg"
          />
          <ImageOrLink
            href="https://www.gambleaware.org/"
            src="/img/compliance/GambleAware.png"
          />
          <ImageOrLink src="/img/compliance/age/19+.svg" />
        </>
      );
    case "Canada (French)":
      return (
        <>
          <ImageOrLink
            src="/img/compliance/gambling-therapy-black.png"
            href="https://www.gamblingtherapy.org/fr/"
          />
          <ImageOrLink src="/img/compliance/age/19+.svg" />
        </>
      );
    case "Germany":
      return (
        <>
          <ImageOrLink
            href="https://www.spielen-mit-verantwortung.de/"
            src="/img/compliance/de/SPIEL NICHT BIS ZUR GLUCKENSPIEL SUCHT.svg"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "Ireland":
      return (
        <>
          <ImageOrLink
            href="https://www.gamcare.org.uk/"
            src="/img/compliance/uk/GAM%20CARE.svg"
          />
          <ImageOrLink
            href="https://www.gambleaware.ie/"
            src="/img/compliance/GambleAware.png"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "Italy":
      return (
        <>
          <ImageOrLink
            href="https://www.agenziadoganemonopoli.gov.it/portale/"
            src="/img/compliance/it/Agenzia Dogane Monopoli.svg"
          />
          <ImageOrLink src="/img/compliance/it/ADM.svg" />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "Netherlands":
      return (
        <>
          <ImageOrLink
            href="https://www.speelbewust.nl/"
            src="/img/compliance/nl/SB.svg"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "New Zealand":
      return (
        <>
          <ImageOrLink
            src="/img/compliance/nz/gambling-helpline-nz.png"
            href="https://www.gamblinghelpline.co.nz/"
          />
          <ImageOrLink
            src="/img/compliance/nz/PGF-logo-transparent-back.png"
            href="https://www.pgf.nz/"
          />
          <ImageOrLink
            src="/img/compliance/nz/HealthNZ-logo.svg"
            href="https://www.health.govt.nz/our-work/mental-health-and-addiction/addiction/gambling-harm"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "Norway":
      return (
        <>
          <ImageOrLink
            href="https://hjelpelinjen.no/"
            src="/img/compliance/no/Hjelpelinjen.svg"
          />
          <ImageOrLink src="/img/compliance/age/18+.svg" />
        </>
      );
    case "South Africa":
      return (
        <>
          <ImageOrLink src="/img/compliance/age/21+.svg" />
        </>
      );
    case "Sweden":
      return (
        <>
          <ImageOrLink
            href="https://stodlinjen.se/"
            src="/img/compliance/se/Stodlinjen.svg"
          />
          <ImageOrLink
            href="https://www.spelpaus.se/"
            src="/img/compliance/se/Spelpaus.svg"
          />
          <ImageOrLink src="/img/compliance/age/se/18+.svg" />
        </>
      );
    case "USA":
      return (
        <>
          <ImageOrLink
            href="https://www.ncpgambling.org/"
            src="/img/compliance/us/NCPG.svg"
          />
          <ImageOrLink src="/img/compliance/age/21+.svg" />
        </>
      );
    default:
      return <></>;
  }
}
