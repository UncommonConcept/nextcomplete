import React from 'react';
import { Head } from 'next/document';
import stylesheet from 'assets/scss/main.scss';

// We can manage the meta tags too using
// https://github.com/nfl/react-helmet
export default () => {
  return (
    <Head>
      <title>Plano McKinney Complete Air and Heat</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {/* if we extract the stylesheet instead of inlining. But I don't think we will do that.
       <link rel='stylesheet' href='/static/css/bundle.css' />*/}
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
      {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
      <script defer src="https://cdn.emailjs.com/dist/email.min.js"></script>
      <script src='https://www.google.com/recaptcha/api.js'></script>
      <script src='/static/holder.min.js'></script>
      <script src='/static/ie10.js'></script>*/}
      {/*<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->*/}
    </Head>
  );
};
