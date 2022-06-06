import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {} from "./context/serviceContext/serviceContext";
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
        <FilterModalProvider>
          <LabelProvider>
            <PriorityProvider>
              <NoteThemeProvider>
                <ServiceProvider>
                  <ToastContainer />
                  <App />
                </ServiceProvider>
              </NoteThemeProvider>
            </PriorityProvider>
          </LabelProvider>
        </FilterModalProvider>
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
