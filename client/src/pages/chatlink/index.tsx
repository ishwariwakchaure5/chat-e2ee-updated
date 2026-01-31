import React, { useState, useContext } from "react";
import Button from "../../components/Button";
import LinkDisplay from "../../components/LinkDisplay/index";
import { ThemeContext } from "../../ThemeContext";
import styles from "./Style.module.css";
// Theme toggle removed per requirement

import { createChatInstance, LinkObjType } from "@chat-e2ee/service";


const App = () => {
  const [chatLink, setChatLink] = useState<LinkObjType>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode] = useContext(ThemeContext);

  const generateLink = async () => {
    if (loading) {
      return;
    }
    
    setLoading(true);
    try {
      const chate2ee = createChatInstance();
      const linkResp = await chate2ee.getLink();
      setChatLink(linkResp);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.linkGenerationPage}>
        <div
          className={`${styles.header}
          ${darkMode === true ? styles.darkModeHeader : styles.lightModeHeader}`}
        >
          Disposable e2ee-chat
        </div>
        <div className={`${styles.sectionDefault} ${!darkMode && styles.sectionDefaultLight}`}>
          <div className={styles.title}>
            end to to encrypted chat course project
          </div>
          {!chatLink && (
            <div className={styles.linkGenerationBtnContainer}>
              <br />
              <Button
                label={loading?"Creating...":"Create chat link"}
                type="primary"
                onClick={generateLink}
                disabled={loading}
              />
            </div>
          )}
          {chatLink && (
            <div className={styles.captchaHeightSetter}>
              <LinkDisplay content={chatLink} />
            </div>
          )}
        </div>
        {/* Contribution section removed per requirement */}
      </div>
    </>
  );
};

export default App;
