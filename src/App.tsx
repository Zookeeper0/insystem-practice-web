import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { Routes } from "./core/Routes";
import { theme } from "./styles/theme";
import { GlobalStyleProvider } from "./core/GlobalStyleProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyleProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </GlobalStyleProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
