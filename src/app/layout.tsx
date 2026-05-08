import "./globals.css";
import {
  Uncial_Antiqua,
  Cinzel_Decorative,
  Quicksand,
  Forum,
} from "next/font/google";
import EnteringScreen from "@/components/EnteringScreen";

const uncial = Uncial_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-uncial",
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
});

export const metadata = {
  title: "Luna Realm",
  description: "Children of the Moon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${uncial.variable} ${cinzel.variable} ${quicksand.variable} ${forum.variable}`}
    >
      <body>
        <EnteringScreen />
        {children}
      </body>
    </html>
  );
}