import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";

const root = createRoot( document.getElementById('todo-app') );

root.render(
    <App/>
);