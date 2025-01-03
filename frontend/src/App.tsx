import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TopNav } from './components/navigation/TopNav';
import { routes } from './config/routes';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app-container">
          <TopNav />
          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}; 