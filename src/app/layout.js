import SideBar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
      </head>
      <body style={{ backgroundColor: '#F4F6F9' }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", padding: "20px" }}>
         <SideBar />
          <main className="p-2" style={{ flex: 1, overflowX: "auto" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
