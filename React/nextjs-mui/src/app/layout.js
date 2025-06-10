import { AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import StyleRoot from "./StyleRoot";

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <appRouterCacheProvider>
          <StyleRoot>
            {children}
          </StyleRoot>
        </appRouterCacheProvider>
      </body>
    </html>
  );
}