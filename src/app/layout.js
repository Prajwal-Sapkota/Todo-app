
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TodoProvider } from "./context/TodoContext";
import Notification from "./components/Notification";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TodoProvider>
          <Notification/>
          <ToastContainer position="top-right" autoClose={false} closeButton={true} className={"bg-red-600 text-white font-semibold rounded-lg shadow-lg p-4 my-2"} />
          
          {children}
        </TodoProvider>
        
      </body>
    </html>
  );
}
