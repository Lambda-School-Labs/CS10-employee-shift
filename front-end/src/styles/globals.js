export const media = {
  small: (...args) => css`
    @media screen and (max-width: 600px) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media screen and (min-width: 601px) and (max-width: 1200px) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media screen and (min-width: 1201px) {
      ${css(...args)};
    }
  `,
};
