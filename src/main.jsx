import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { dark, minimal } from '@clerk/themes'; // Import the minimal theme

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      appearance={{
        baseTheme: dark, // Use the imported minimal theme
      }}
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);