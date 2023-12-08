import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "../app/styles/globals.css";
import ModalCtxProvider from "@/app/context/ModalCtxProvider";
import Navigation from "@/app/components/Navigation";
import Modal from "@/app/components/Modal";
import MobileContactButton from "@/app/components/MobileContact";
import Footer from "@/app/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Jason Vallery's Portfolio",
  title: "Jason Vallery's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.className} body`}>
        <ModalCtxProvider>
          <Navigation />
          {children}
          <Modal />
          <MobileContactButton />
          <Footer />
        </ModalCtxProvider>
      </body>
    </html>
  );
}
