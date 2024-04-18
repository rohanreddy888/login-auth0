"use client";
import { Auth0Provider } from "@auth0/auth0-react";

export default function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Auth0Provider
      domain="dev-emy5488k5kw8za0s.us.auth0.com"
      clientId="gEM9GBpZ8U6IKFycRfvEQkRPDSgOOXp0"
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_API_URL,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
