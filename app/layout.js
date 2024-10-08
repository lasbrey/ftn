import { DM_Sans, Poppins } from "next/font/google";
import "/public/app/dist/app.css";
import "/public/app/dist/swiper-bundle.min.css";
import { AuthContextProvider } from "../context/authContext";
import Script from 'next/script';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--poppins",
  display: "swap",
});
const dm = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--dm",
  display: "swap",
});

export const metadata = {
  title: "Financial Trade Network",
  description: "Your one stop crypto trading platform",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${dm.variable} body header-fixed`}
        >
          <Script src="/tidio.js" strategy="beforeInteractive" />

          {children}
        </body>
      </html>
    </AuthContextProvider>
  );
}
