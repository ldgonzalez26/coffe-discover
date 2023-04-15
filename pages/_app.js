import "@/styles/globals.css";
import { Advent_Pro } from "next/font/google";

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={adventPro.className}>
      <Component {...pageProps} />
    </div>
  );
}
