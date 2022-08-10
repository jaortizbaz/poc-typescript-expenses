import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AppRouter} from "./pages/app-router/app-router";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <div>
              <h1>Expenses App</h1>
              <AppRouter />
          </div>
      </QueryClientProvider>
  );
}

export default App;
