import Australia from "./Markets/Australia";
import Austria from "./Markets/Austria";
import Canada from "./Markets/Canada";
import CanadaFrench from "./Markets/CanadaFrench";
import Germany from "./Markets/Germany";
import Ireland from "./Markets/Ireland";
import Italy from "./Markets/Italy";
import Netherlands from "./Markets/Netherlands";
import NewZealand from "./Markets/New Zealand";
import Norway from "./Markets/Norway";
import SouthAfrica from "./Markets/SouthAfrica";
import Sweden from "./Markets/Sweden";
import USA from "./Markets/USA";
import UnitedKingdom from "./Markets/UnitedKingdom";

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
