// import css from "styled-components";

// export const media = {
//   phone: (...args) => css`
//     @media screen and (max-width: 600px) {
//       ${css(...args)};
//     }
//   `,

//   tablet: (...args) => css`
//     @media screen and (min-width: 601px) and (max-width: 1200px) {
//       ${css(...args)};
//     }
//   `,

//   desktop: (...args) => css`
//     @media screen and (min-width: 1201px) {
//       ${css(...args)};
//     }
//   `,
// };
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
