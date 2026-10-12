import ventra from "../assets/logos/ventra.png";
import lamoda from "../assets/logos/lamoda-tech.png";
import rtkit from "../assets/logos/rtkit.png";
import cmirit from "../assets/logos/cmirit.svg";
import placestart from "../assets/logos/placestart.svg";

export const logos = {
  ventra,
  "lamoda-tech": lamoda,
  rtkit,
  cmirit,
  placestart,
} as const;
export type LogoKey = keyof typeof logos;
