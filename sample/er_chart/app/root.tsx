import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
//
import Head from './components/Head';
//
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/index.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <Meta />
        <Links />
      </head>
      <body>
        <Head />
        {children}
        <ScrollRestoration />
        <Scripts />


      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
