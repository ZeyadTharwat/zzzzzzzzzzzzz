import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/system";
import { theme } from "./theme/Theme";
import { Provider } from "react-redux";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const stripePromise = loadStripe(
  `pk_test_51LoqmDCVf8k7plZ84cyeIFWVq07soO2k17GmMBbQwcYeHz7y3nvyr9G5IzzCQ8oYsspnwDkD2MQmpbDiV2t4rHQo00x5gcz5uO`
);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <App />
              <ToastContainer />
            </QueryClientProvider>
          </ThemeProvider>
        </PersistGate>
      </Elements>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
