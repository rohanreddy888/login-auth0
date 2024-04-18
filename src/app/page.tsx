"use client";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";

export default function Home() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4">
      {isAuthenticated ? (
        <>
          <h1 className="text-2xl">
            Hello, <b>{user?.name}</b>
          </h1>
          <button
            className="bg-sky-600 px-6 py-2 rounded shadow"
            onClick={() => logout()}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="bg-sky-600 px-6 py-2 rounded shadow"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
    </section>
  );
}
