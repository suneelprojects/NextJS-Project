import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
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


// export const metadata = {
//   metadataBase: new URL('https://socialprachar.com'),
//   // You can add other global metadata here if needed
// };


export const metadata = {
  metadataBase: new URL('https://nextjs-social-prachar.vercel.app'),
};

// Helper function for OG image path by route
export function getOgImageByPath(pathname) {
  const courseRoutes = [
    "/courses",
    "/data-science",
    "/full-stack-developer-course",
    "/artificial-intelligence-course-training-institute-in-hyderabad",
    "/digital-marketing-course-training-institute-hyderabad",
    "/generative-ai-course-training-institute-hyderabad",
    "/data-analytics-course-training-hyderabad",
    "/snowflake-training-in-hyderabad",
    "/salesforce-course",
    "/python-full-stack-development-course",
    "/java-full-stack-development-course",
    "/awsdevopscourse"
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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D4RKFHGR75"
        ></Script>
        <Script
          id="google-analytics-inline"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D4RKFHGR75');
      `,
          }}
        />
        {/* <!-- Google Tag Manager -->  */}
        <Script
          id="gtm-inline-script"
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
        {/* End Google Tag Manager */}

        <Script
          id="collect-widget-loader"
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

        <Script
          id="facebook-pixel-inline"
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

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none" 
              src="https://www.facebook.com/tr?id=646396918132365&ev=PageView&noscript=1" />
            `,
          }}
        />

        <Script
          nowprocket="true"
          nitro-exclude="true"
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="b917f7d8-8abb-4a14-804e-7618135930f4"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gImI5MTdmN2Q4LThhYmItNGExNC04MDRlLTc2MTgxMzU5MzBmNCI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicHeaderManager/>
        <DateProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </DateProvider>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K26FXFKB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1L179HP7XX"
        ></Script>
        <Script
          id="gtag-1l179hp7xx"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-1L179HP7XX");
    `,
          }}
        />

      </body>
    </html>
  );
}
