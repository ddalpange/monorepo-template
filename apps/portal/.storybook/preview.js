import '@monorepo/token/lib/index.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Providers } from 'join-react-context';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react';
import './next-image.mock';


export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme Switch",
    defaultValue: "light",
    toolbar: {
      icon: "transfer",
      items: ["dark", "light"],
      showName: true,
    },
  },
};

const customViewPorts = {
  small: {
    name: "Small 320",
    styles: {
      width: "320px",
      height: "678px",
    },
  },
  mobile: {
    name: "Mobile 360",
    styles: {
      width: "360px",
      height: "678px",
    },
  },
  medium: {
    name: "Medium 600",
    styles: {
      width: "600px",
      height: "1024px",
    },
  },
  large: {
    name: "Large 960",
    styles: {
      width: "960px",
      height: "1024px",
    },
  },
  xlarge: {
    name: "XLarge 1440",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  },
};

export const decorators = [
  (Story, context) => {
    React.useEffect(() => {
      if (context.globals.theme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
      }
    }, [context.globals.theme]);

    return (
      <Providers
        providers={
          <></>
        }
      >
        <Story />
        <div id="__modal-root" />
      </Providers>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  viewport: { viewports: { ...customViewPorts, ...INITIAL_VIEWPORTS } },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
