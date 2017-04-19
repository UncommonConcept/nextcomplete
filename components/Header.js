import Link from 'next/link';
import Head from 'next/head';


const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Head>
          <title>Plano McKinney Complete Air and Heat</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
          <script type="text/javascript" defer src="https://cdn.emailjs.com/dist/email.min.js"></script>
          <script src='https://www.google.com/recaptcha/api.js'></script>
          {/*<script type="text/javascript">
            (function(){
                emailjs.init("user_D5kbXTXLkTOb9bE7CYoFW")
            })();
          </script>*/}
        </Head>
    </div>
)

export default Header
