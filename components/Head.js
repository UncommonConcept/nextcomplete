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
      {/* Due to how SSR works, this needs to be here in the header. It gets removed by the time bootstrap loads, otherwise. */}
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
    </Head>
  );
};
