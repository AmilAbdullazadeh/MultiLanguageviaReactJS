import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      {/*<nav*/}
      {/*  style={{ width: "100%", padding: "2rem, 0", backgroundColor: "gray" }}*/}
      {/*>*/}
      {/*  <button onClick={() => handleClick("en")}> English </button>*/}
      {/*  <button onClick={() => handleClick("aze")}> Azerbaijan </button>*/}
      {/*  <button onClick={() => handleClick("ru")}> Russia </button>*/}
      {/*</nav>*/}

      {/*<header className="App-header">*/}
      {/*  <p> {t("Thanks.1")} </p>*/}
      {/*  <p> {t("Why.1")} </p>*/}
      {/*</header>*/}

      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-darkred rounded">
          <a className="navbar-brand" href="#">
            Multi Language App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" offset-md-8 offset-sm-0 collapse navbar-collapse"
            id="navbarsExample09"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* AZE */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => handleClick("aze")}
                >
                  <span className="flag-icon flag-icon-az"> </span>{" "}
                  {t("Language.1")}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown09">
                  {/* EN */}
                  <a
                    onClick={() => handleClick("en")}
                    className="dropdown-item"
                    href="#en"
                  >
                    <span className="flag-icon flag-icon-gb-eng"> </span>
                    {t("Language.2")}
                  </a>
                  {/* RU */}
                  <a
                    onClick={() => handleClick("ru")}
                    className="dropdown-item"
                    href="#ru"
                  >
                    <span className="flag-icon flag-icon-ru"> </span>{" "}
                    {t("Language.3")}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row mt-4">
          <div className="offset-md-3 col-md-6 col-6">
            <div className="card border-0 card-color text-light bg-light mb-3">
              {/*  <p> {t("Thanks.1")} </p>*/}
              <div className="card-color card-header"> {t("Header.1")} </div>
              <div className="card-color card-body">
                <h5 className="card-color card-title">{t("Title.1")}</h5>
                <p className="card-color card-text">{t("Content.1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
