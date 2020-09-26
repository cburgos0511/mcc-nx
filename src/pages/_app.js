import "../styles/style.scss";
import "react-h5-audio-player/lib/styles.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import fetcher from "../utils/fetcher";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
