import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider}  from './hooks/AuthContext';
import { SearchProvider } from './hooks/useContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
<SearchProvider>
<App/>
</SearchProvider>
</AuthContextProvider>   
);