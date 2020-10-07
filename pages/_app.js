// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");
          :root {
            --purple-dark: #282a36;
            --purple-light: #bd93f9;
            --green: #50fa7b;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
    
          html, body{
            background: var(--purple-dark);
            color: #FFF;
            font-family: 'Source Sans Pro', sans-serif;
          }
    
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
