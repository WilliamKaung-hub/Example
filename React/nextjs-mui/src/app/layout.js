import { AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import StyleRoot from "./StyleRoot";
import DrawerNav from "@/components/DrawerNav";

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyleRoot>
            <DrawerNav/>
            {children}
          </StyleRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}