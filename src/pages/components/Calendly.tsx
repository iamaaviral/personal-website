import React from "react";
import Script from "next/script";

import Head from "next/head";
import styles from "./Calendly.module.css";

const CalendlyComponent = () => {
  const handleOpenPopup = () => {
    //@ts-ignore
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/iamaaviral/book-1-on-1-with-aviral?hide_event_type_details=1&text_color=ffffff&background_color=02183b&primary_color=04b5ff&hide_gdpr_banner=1",
    });
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://assets.calendly.com/assets/external/widget.js"
      />

      <button onClick={handleOpenPopup} className={styles.calendlyButton}>
        Schedule time with me
      </button>
    </>
  );
};

export default CalendlyComponent;
