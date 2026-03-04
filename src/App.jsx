import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "./features/snackBar";
import AppRouter from "./router";
import ScrollToTop from "./components/ScrollToTop";
import { store } from "./store/store";
import "./styles/global.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <SnackbarProvider>
          <AppRouter />
        </SnackbarProvider>
      </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
