import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import DocumentTitle from 'react-document-title';
import NavBar from 'components/NavBar';
import Head from 'components/Head';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    DocumentTitle.rewind();
    return { html, head };
  }

  render () {
    return (
      <html>
        <Head />
        <body>
          <NavBar />
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
