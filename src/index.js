import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import './global.css';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_de from "./translations/de/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    de: {
      global: global_de
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();