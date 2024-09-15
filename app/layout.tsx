import ThemeContextProvider from "@/contexts/theme-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/contexts/active-session-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Person } from "schema-dts";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habibur Rahman - Fullstack Engineer | JavaScript, React, Next.js",

  description:
    "Habibur Rahman is a professional fullstack engineer from Bangladesh, specializing in building high-performance web applications with JavaScript, TypeScript, React, and Next.js. Expertise in responsive design and scalable architecture.",

  // TODO
  icons: {
    icon: [
      { url: "./favicon.ico", sizes: "any" },
      { url: "./icon.svg", type: "image/svg+xml" },
      { url: "./apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  authors: [{ name: "Habibur Rahman", url: "https://habibium.com" }],
  creator: "Habibur Rahman",

  alternates: {
    canonical: "https://habibium.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://habibium.com",
    siteName: "Habibur Rahman",
    title: "Habibur Rahman - Fullstack Engineer & Web Developer",
    description:
      "Professional fullstack engineer specializing in modern web technologies. Building performant and scalable applications with JavaScript, React, and Next.js.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/115046415?v=4",
        width: 460,
        height: 460,
        alt: "Habibur Rahman - Fullstack Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@habibiumX",
    creator: "@habibiumX",
    title: "Habibur Rahman - Fullstack Engineer",
    description:
      "Professional fullstack engineer from Bangladesh. Expertise in JavaScript, TypeScript, React, and Next.js for high-performance web applications.",
    images: [
      "https://pbs.twimg.com/profile_images/1833464415854989316/NkCFUhzL_400x400.jpg",
    ],
  },

  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Habibur Rahman",
  url: "https://habibium.com",
  sameAs: [
    "https://twitter.com/habibiumX",
    "https://github.com/habibium",
    "https://linkedin.com/in/habibium",
  ],
  jobTitle: "Fullstack Engineer",
  description:
    "Professional fullstack engineer specializing in JavaScript, TypeScript, React, and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              toastOptions={{
                duration: 5000,
                position: "bottom-center",
                style: {
                  border: "1px solid #15803d",
                  padding: "4px 8px",
                  margin: "0px 0px 64px 0px",
                  color: "#fff",
                  background: "#15803d",
                  fontWeight: 500,
                },
              }}
            />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
