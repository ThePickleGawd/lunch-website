import Metadata from "@/components/layout/Metadata";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Metadata />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
