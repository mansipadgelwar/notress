import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  FilterModalProvider,
  ServiceProvider,
  NoteThemeProvider,
  AuthProvider,
  LabelProvider,
  PriorityProvider,
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NoteThemeProvider>
          <LabelProvider>
            <PriorityProvider>
              <ServiceProvider>
                <FilterModalProvider>
                  <ToastContainer />
                  <App />
                </FilterModalProvider>
              </ServiceProvider>
            </PriorityProvider>
          </LabelProvider>
        </NoteThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.createPortal(
  <ToastContainer
    position="bottom-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />,
  document.getElementById("notifications")
);
