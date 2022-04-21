import '@emotion/react';

// eslint-disable-next-line @typescript-eslint/ban-types
type CustomTheme = {};

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}
