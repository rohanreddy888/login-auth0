"use client";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";

export default function Home() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6">
      {isAuthenticated ? (
        <>
          <h1 className="text-4xl">
            Hello, <b>{user?.name}</b>
          </h1>
          <button
            className="bg-red-200 text-red-600 px-6 py-2 rounded shadow font-bold"
            onClick={() => logout()}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1 className="text-4xl">
            <b>Auth0 Login Demo</b>
          </h1>
          <button
            className="bg-sky-200 text-sky-600 px-6 py-2 rounded shadow font-bold"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </>
      )}
    </section>
  );
}
