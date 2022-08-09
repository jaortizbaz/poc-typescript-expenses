import React from 'react';
import './App.css';
import {Expenses} from "./pages/expenses";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <div className="App">
              <header className="App-header">
                  <h1>Expenses App</h1>
                  <Expenses />
              </header>
          </div>
      </QueryClientProvider>
  );
}

export default App;
