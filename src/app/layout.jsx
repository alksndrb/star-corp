import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { cx } from "../utils";
import Footer from "../components/Footer";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const orb = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orb",
});

export const metadata = {
  title: "StarCorp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, orb.variable, " bg-light text-justify")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
