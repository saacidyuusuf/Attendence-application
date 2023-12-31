import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/app/components/Nav";
import GlobalcontextProvider from "./context/context";

const lato = Space_Grotesk({
  weight: ["300", "700"],
  subsets: ["latin"],
});

/* Rubik look good Kanit to Space_Grotesk to*/

export const metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={lato.className}>
        <GlobalcontextProvider>
        <main className="container">{children}</main>
        </GlobalcontextProvider>
      </body>
    </html>
    </>
  );
}
