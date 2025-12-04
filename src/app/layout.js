// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Script from "next/script";
import DynamicHeaderManager from "@/components/DynamicHeaderManager/DynamicHeaderManager";
import { DateProvider } from "@/components/Forms/DateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://socialprachar.com"),
};

export function getOgImageByPath(pathname) {
  const courseRoutes = [
    "/courses",
    "/data-science",
    "/full-stack-developer-course",
    "/artificial-intelligence-course-training-institute-in-hyderabad",
    "/digital-marketing-course-training-institute-in-hyderabad",
    "/generative-ai-course-training-institute-hyderabad",
    "/data-analytics-course-training-hyderabad",
    "/snowflake-training-in-hyderabad",
    "/salesforce-course",
    "/python-full-stack-development-course",
    "/java-full-stack-development-course",
    "/awsdevopscourse",
  ];
  if (courseRoutes.includes(pathname)) return "/og/Courses-img.png";
  if (pathname === "/aboutUs") return "/og/About-img.png";
  if (pathname === "/success-stories") return "/og/success-stories-img.png";
  if (pathname === "/upcoming-batches") return "/og/upcoming-img.webp";
  return "/og/Home-image.png";
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="RS7Kklvic-EwKl4Zl03SKi0tdApuHkUJ86MQV9KeWTI"
        />
        {/* NOTE: avoid raw <script> tags in App Router files */}
        {/* jQuery as non-blocking */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive"
          id="jquery"
        />

        {/* Google Analytics - external loader */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D4RKFHGR75"
          strategy="afterInteractive"
        />

        {/* Google Analytics - inline config */}
        <Script
          id="google-analytics-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D4RKFHGR75');
            `,
          }}
        />

        {/* Google Tag Manager - loader (non-blocking) */}
        <Script
          id="gtm-inline-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K26FXFKB');
            `,
          }}
        />

        {/* Collect widget loader (non-blocking) */}
        <Script
          id="collect-widget-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d) {
                w.CollectId = "5f073677d9795b4938c3b158";
                var h = d.head || d.getElementsByTagName("head")[0];
                var s = d.createElement("script");
                s.setAttribute("type", "text/javascript");
                s.async = true;
                s.setAttribute("src", "https://collectcdn.com/launcher.js");
                h.appendChild(s);
              })(window, document);
            `,
          }}
        />

        {/* Facebook Pixel (non-blocking) */}
        <Script
          id="facebook-pixel-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function(f,b,e,v,n,t,s){
                if(f.fbq) return;
                n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
                if(!f._fbq) f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e); t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '646396918132365');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* For the SearchAtlas / Dynamic Optimization loader use next/script
            convert custom attributes to data-* to avoid invalid JSX */}
        <Script
          id="sa-dynamic-optimization"
          strategy="afterInteractive"
          data-uuid="a356ea23-0422-4666-b2b7-f8b22e5c70b3"
          data-nowprocket=""
          data-nitro-exclude=""
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gImEzNTZlYTIzLTA0MjItNDY2Ni1iMmI3LWY4YjIyZTVjNzBiMyI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        />

        {/* end head scripts */}



        {/* Scalenut verification — keep id unique and run before interactive */}
      <Script
  id="scalenut-verification"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,k){
        try {
          w.scalenut_verification_id = k;
          const script = d.createElement("script");
          script.src = "https://prod-cdn.webtune.ai/prod/ScalenutProdVerificationScript.js";
          script.async = true;
          d.head.appendChild(script);
        } catch(e) {
          console.error("Scalenut script failed", e);
        }
      })(window, document, "d33932de67280d162be2d2f0f4c514e8");
    `,
  }}
/>


          
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DynamicHeaderManager />
        <DateProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </DateProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K26FXFKB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {/* Load AOS and Bootstrap non-blocking */}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* If you have a second GA ID, keep it as non-blocking as well */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1L179HP7XX"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-1l179hp7xx"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-1L179HP7XX');
            `,
          }}
        />
      </body>
    </html>
  );
}
