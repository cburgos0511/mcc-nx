import "../styles/style.scss";
import "react-h5-audio-player/lib/styles.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import fetcher from "../utils/fetcher";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
