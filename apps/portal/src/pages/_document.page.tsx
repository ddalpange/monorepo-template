import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="light-theme">
          <Main />
          <div id="__modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
