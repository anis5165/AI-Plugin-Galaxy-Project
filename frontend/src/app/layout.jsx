
import "./globals.css";
// import Navbar from "./navbar";
import { AppProvider } from "@/context/appContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <AppProvider>
        {/* <Navbar/> */}
        <Toaster position="top-center"/>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
