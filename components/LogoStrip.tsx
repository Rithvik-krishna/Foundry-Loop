import { homeContent } from "../constants/content";

export function LogoStrip() {
  return <div className="logo-strip" aria-label="Areas of focus">{homeContent.areas.map((area) => <span key={area}>{area}</span>)}</div>;
}
