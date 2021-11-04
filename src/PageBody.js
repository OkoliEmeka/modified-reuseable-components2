import React from "react";
import AnchhorComponent from "./components/AnchhorComponent";
import ButtonComponent from "./components/ButtonComponent";
import "./PageBody.css";
function PageBody() {
  return (
    <div className="main-body">
      <div className="left-sidebar">
        <AnchhorComponent />
      </div>
      <div className="body">
        <h1>HTML References</h1>
        <p>
          At W3Schoolsyou will find complete references about HTML elements,
          attributes, events, color names, entities, character-sets, URL
          encoding, language codes, HTTP messages, browser support, and more:{" "}
        </p>

        <ButtonComponent />
      </div>
      <div className="right=sidebar"></div>
    </div>
  );
}

export default PageBody;
