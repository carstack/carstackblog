import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [{
    rel: "stylesheet", href: styles
  }]
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Carstack",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head >
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="bg-black p-1 flex flex-col justify-center items-center">
          <span className="p-8 font-mono font-semibold text-white text-6xl antialiased">
          CARSTACK
          </span>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
