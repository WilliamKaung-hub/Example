// app/layout.jsx

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StyleRoot from "./StyleRoot"; // Optional custom wrapper

export const metadata = {
  title: "My MUI Next.js App",
  description: "A beautiful app using MUI + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          
            
            <StyleRoot>{children}</StyleRoot>
      
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
