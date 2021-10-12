import * as React from "react";
import browser from "webextension-polyfill";
import Iframe from "react-iframe";

import "./styles.scss";

function openWebPage(url) {
  return browser.tabs.create({ url });
}

const Popup = () => {
  return (
    <section id="popup">
      <Iframe
        url="http://localhost:3000/browser-extension"
        width="400"
        height="400"
      />
    </section>
  );
};

export default Popup;
