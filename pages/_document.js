// import React from 'react';
import 'isomorphic-fetch';
import Document, { Main, NextScript } from 'next/document';
import DocumentTitle from 'react-document-title';
import Head from 'components/Head';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Jumbotron from 'components/Jumbotron';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    DocumentTitle.rewind();
    return { html, head, customValue: null }; // customValue = for example
  }

  render () {
    return (
      <html lang='en'>
        <Head />
        <body>
          <NavBar />

          {/*<!-- Main jumbotron -->*/}
          <Jumbotron />

          {/*<!-- Begin page content -->*/}
          <div className="container">
            {this.props.customValue}
            <Main />
          </div>

          <Footer />

          <NextScript />

          {/*<!-- Bootstrap core JavaScript
          ================================================== -->
          <!-- Placed at the end of the document so the pages load faster -->*/}
          <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
          <script defer src="https://cdn.emailjs.com/dist/email.min.js"></script>
          <script src='https://www.google.com/recaptcha/api.js'></script>
          <script src='/static/holder.min.js'></script>
          {/*<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->*/}
          <script src='/static/ie10.js'></script>

          <script dangerouslySetInnerHTML={{__html: `
            (function(){
                //emailjs.init("user_D5kbXTXLkTOb9bE7CYoFW");
            })();` }}
          />
        </body>
      </html>
    );
  }
}
