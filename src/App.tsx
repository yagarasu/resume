import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from "./AppRouter"
import Layout from "./components/Layout"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
