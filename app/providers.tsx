"use client";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReCaptchaProvider } from "@rusted/react-recaptcha-v3";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      {children}
    </ReCaptchaProvider>
  );
}
