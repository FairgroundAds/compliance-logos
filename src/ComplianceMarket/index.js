import Australia from "../ComplianceMarket/Markets/Australia";
import Austria from "../ComplianceMarket/Markets/Austria";
import Canada from "../ComplianceMarket/Markets/Canada";
import CanadaFrench from "../ComplianceMarket/Markets/CanadaFrench";
import Germany from "../ComplianceMarket/Markets/Germany";
import Ireland from "../ComplianceMarket/Markets/Ireland";
import Italy from "../ComplianceMarket/Markets/Italy";
import Netherlands from "../ComplianceMarket/Markets/Netherlands";
import NewZealand from "../ComplianceMarket/Markets/New Zealand";
import Norway from "../ComplianceMarket/Markets/Norway";
import SouthAfrica from "../ComplianceMarket/Markets/SouthAfrica";
import Sweden from "../ComplianceMarket/Markets/Sweden";
import USA from "../ComplianceMarket/Markets/USA";
import UnitedKingdom from "../ComplianceMarket/Markets/UnitedKingdom";

export default function ComplianceMarket({ name }) {
  let Market;

  switch (name) {
    case "United Kingdom":
      Market = UnitedKingdom;
      break;
    case "Australia":
      Market = Australia;
      break;
    case "Austria":
      Market = Austria;
      break;
    case "Canada":
      Market = Canada;
      break;
    case "Canada (French)":
      Market = CanadaFrench;
      break;
    case "Germany":
      Market = Germany;
      break;
    case "Ireland":
      Market = Ireland;
      break;
    case "Italy":
      Market = Italy;
      break;
    case "Netherlands":
      Market = Netherlands;
      break;
    case "New Zealand":
      Market = NewZealand;
      break;
    case "Norway":
      Market = Norway;
      break;
    case "South Africa":
      Market = SouthAfrica;
      break;
    case "Sweden":
      Market = Sweden;
      break;
    case "USA":
      Market = USA;
      break;
  }

  // Use GlobalBefore and GlobalAfter if one day we need to add global compliance
  return Market;
}
