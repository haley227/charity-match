import { css } from 'styled-components';

// Based on https://gist.github.com/azamatsmith/a56fb3f8cd3657db7a6af6ce1f8ea591
export const breakpoints = {
  tiny: 375,
  mobile: 450,
  tablet: 768,
  large: 920,
  desktop: 1024,
  massive: 1440,
} as const;

export const containerWidth = 1200;

export const media = {
  // ns = not small
  tiny: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.tiny}px) {
        ${css(...args)}
      }
    `,
  mobile: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.mobile}px) {
        ${css(...args)}
      }
    `,
  tablet: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.tablet}px) {
        ${css(...args)}
      }
    `,
  large: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.large}px) {
        ${css(...args)}
      }
    `,
  desktop: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.desktop}px) {
        ${css(...args)}
      }
    `,
  massive: (...args: Parameters<typeof css>) => css`
      @media screen and (min-width: ${breakpoints.massive}px) {
        ${css(...args)}
      }
    `,
};
