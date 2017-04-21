import React from 'react';
import { Head } from 'next/document';
import stylesheet from 'assets/scss/pages/index.scss';

// We can manage the meta tags too using
// https://github.com/nfl/react-helmet
export default () => {
  return (
    <Head>
      <title>Plano McKinney Complete Air and Heat</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      {/*<link rel='stylesheet' href='/static/css/bundle.css' />*/}
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <script type="text/javascript" defer src="https://cdn.emailjs.com/dist/email.min.js"></script>
      <script src='https://www.google.com/recaptcha/api.js'></script>
      {/*<script type="text/javascript">
        (function(){
            emailjs.init("user_D5kbXTXLkTOb9bE7CYoFW")
        })();
      </script>*/}
    </Head>
  );
};
