// HAVE to import global css styles here if we want to use for components

import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

// if using TS...
// import { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
