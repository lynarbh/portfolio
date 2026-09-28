import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import * as React from "react";

import appCss from "../styles.css?url";
import { Cursor } from "@/components/Cursor";

// Le compte à rebours d'ouverture ne joue qu'une fois par session : ce script (avant le premier
// rendu) masque l'amorce et annule le délai des animations du hero si elle a déjà été vue.
const LEADER_SCRIPT =
  'try{if(sessionStorage.getItem("leader")){document.head.appendChild(Object.assign(document.createElement("style"),{textContent:".leader{display:none}:root{--leader-delay:0s}"}))}else{sessionStorage.setItem("leader","1")}}catch(e){}';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lyna Rebahi - Portfolio" },
      {
        name: "description",
        content:
          "Portfolio créatif d'une étudiante MMI : design graphique, vidéo, photo et branding. À la recherche d'une alternance.",
      },
      { name: "author", content: "Lyna Rebahi" },
      { name: "theme-color", content: "#fbf7f2" },
      { property: "og:title", content: "Lyna Rebahi - Portfolio" },
      {
        property: "og:description",
        content: "Portfolio créatif d'une étudiante MMI à la recherche d'une alternance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "shortcut icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [{ children: LEADER_SCRIPT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function Leader() {
  return (
    <div className="leader" aria-hidden="true">
      <span className="leader-cross" />
      <span className="leader-circle" />
      <span className="leader-hand" />
      <span className="leader-num leader-num--3">3</span>
      <span className="leader-num leader-num--2">2</span>
      <span className="leader-num leader-num--1">1</span>
      <span className="leader-tag">Lyna Rebahi · Portfolio · 2026</span>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <Leader />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/favicon.ico?" + Date.now();
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Cursor />
      <Outlet />
    </>
  );
}
