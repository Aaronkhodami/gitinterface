// ── Personal credentials & app config ─────────────────────────────────────
// This file is YOUR personal data. It is intentionally excluded from
// automatic interface updates so your credentials are never overwritten.
// Edit username/password here to change your login.

window.PortableDB = {
  app: {
    name: "Portable Workspace",
    subtitle: "Local sign-in and dashboard"
  },
  users: [
    {
      username: "admin",
      password: "admin",
      displayName: "Administrator",
      role: "Owner"
    }
  ],
  dashboard: {
    welcomeTitle: "Workspace Dashboard",
    welcomeText: "A simple local-first interface with a clear structure for novice users.",
    menu: [
      {
        key: "overview",
        label: "Overview",
        intro: "High-level workspace summary.",
        cards: [
          {
            title: "Welcome",
            text: "This dashboard opens after successful sign-in and keeps the layout easy to understand."
          },
          {
            title: "How It Works",
            text: "Credentials are loaded from a portable local DB file, and the dashboard structure is loaded from the same source."
          }
        ]
      },
      {
        key: "access",
        label: "Access Model",
        intro: "Who you are and how access is organized.",
        cards: [
          {
            title: "Account Source",
            text: "The username and password come from db.js, so the whole folder remains portable."
          },
          {
            title: "Session",
            text: "Sign-in is kept only in sessionStorage for the current browser tab."
          }
        ]
      },
      {
        key: "structure",
        label: "Hierarchy",
        intro: "A simple hierarchy model instead of random buttons.",
        cards: [
          {
            title: "Level 1",
            text: "Sign-in page"
          },
          {
            title: "Level 2",
            text: "Dashboard landing"
          },
          {
            title: "Level 3",
            text: "Focused dashboard sections from the left menu"
          }
        ]
      },
      {
        key: "portable",
        label: "Portable Data",
        intro: "What to copy to another computer.",
        cards: [
          {
            title: "Carry This Folder",
            text: "Move index.html and the dashboard/ folder together."
          },
          {
            title: "No Setup",
            text: "There is no server, no dependency, and no localhost requirement."
          }
        ]
      }
    ]
  }
};
