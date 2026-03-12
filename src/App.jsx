import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "./features/snackBar";
import AppRouter from "./router";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.scss";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <SnackbarProvider>
            <AppRouter />
          </SnackbarProvider>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
