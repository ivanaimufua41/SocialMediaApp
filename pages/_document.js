import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import getContext from '../lib/context';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#6EA0FF" />
          <link
            rel="stylesheet"
            href="https://storage.googleapis.com/builderbook/nprogress.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300,400:latin"
          />
          <link rel="stylesheet" href="/css/all.js" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />
          <style>
            {`
                a, a:focus {
                  font-weight: 400;
                  color: #FFF;
                  text-decoration: none;
                  outline: none;
                  text-transform: uppercase; 
                }
                a:hover, button:hover {
                  opacity: .70;
                  cursor: pointer;
                }
              
              `}
          </style>
        </Head>
        <body
          style={{
            font: '16px Muli',
            color: '#222',
            margin: '0px auto',
            fontWeight: '300',
            lineHeight: '1.5em',
            backgroundColor: '#FFF',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ({ renderPage }) => {
  const pageContext = getContext();
  const page = renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
      {...props}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <style
        id="jss-server-side"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{
          __html: pageContext.sheetsRegistry.toString(),
        }}
      />
    ),
  };
};

export default MyDocument;
