import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "박경선 | 프론트엔드 개발자",
  description: "사용자 중심의 웹 경험을 만들어가는 프론트엔드 개발자 박경선의 포트폴리오입니다.",
  canonical: "https://profile-park.vercel.app/",
  openGraph: {
    title: "박경선 | 프론트엔드 개발자",
    description: "사용자 중심의 웹 경험을 만들어가는 프론트엔드 개발자 박경선의 포트폴리오입니다.",
    url: "https://profile-park.vercel.app/",
    images: [
      {
        url: "https://profile-park.vercel.app/image/profile-thumbnail.png",
        width: 800,
        height: 600,
        alt: "박경선 포트폴리오",
      },
    ],
    siteName: "박경선 포트폴리오",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
