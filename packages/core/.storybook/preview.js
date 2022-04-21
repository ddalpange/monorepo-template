import '@monorepo/token/lib/index.css';
import {css, Global} from '@emotion/react';
import React from 'react';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme Switch',
    defaultValue: 'light',
    toolbar: {
      icon: 'transfer',
      items: ['dark', 'light'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    React.useEffect(() => {
      if (context.globals.theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    }, [context.globals.theme]);

    return (
      <>
        <CssBaseline />
        <FontFamily />
        <Story />
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

function CssBaseline() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          outline: none;
        }
        body {
          margin: 0;
          padding: 0;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
};

function FontFamily() {
  return <Global
    styles={css`
      @font-face {
        font-family: Averta Standard;
        src: url('/fonts/eot/Averta-Standard-Black.eot');
        src: url('/fonts/eot/Averta-Standard-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/woff2/Averta-Standard-Black.woff2') format('woff2'),
          url('/fonts/woff/Averta-Standard-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Averta Standard;
        src: url('/fonts/eot/Averta-Standard-Bold.eot');
        src: url('/fonts/eot/Averta-Standard-Bold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/woff2/Averta-Standard-Bold.woff2') format('woff2'),
          url('/fonts/woff/Averta-Standard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: Averta Standard;
        src: url('/fonts/eot/Averta-Standard-Semibold.eot');
        src: url('/fonts/eot/Averta-Standard-Semibold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/woff2/Averta-Standard-Semibold.woff2') format('woff2'),
          url('/fonts/woff/Averta-Standard-Semibold.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: Averta Standard;
        src: url('/fonts/eot/hinted-AvertaStd-Regular.eot');
        src: url('/fonts/eot/hinted-AvertaStd-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/woff2/Averta-Standard-Regular.woff2') format('woff2'),
          url('/fonts/woff/hinted-AvertaStd-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: Averta Standard;
        src: url('/fonts/eot/Averta-Standard-Light.eot');
        src: url('/fonts/eot/Averta-Standard-Light.eot?#iefix') format('embedded-opentype'),
          url('/fonts/woff2/Averta-Standard-Light.woff2') format('woff2'),
          url('/fonts/woff/Averta-Standard-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      * {
        font-family: Averta Standard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Open Sans', 'Helvetica Neue', sans-serif;
      }
    `}
  />
};