import "./Campaign_first.css";
import React, { useState } from "react";

import PageOne from "../components/PagePro/PageOne";
import PageTwo from "../components/PagePro/PageTwo";
import PageThree from "../components/PagePro/PageThree";
import PageFour from "../components/PagePro/PageFour";
import Progress from "../components/Progress";

function App() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="App">
      <div className="c-all">
        <div className="ca-top">
          <div className="ca-left">
            <span>Your Ad Campaign</span>
            <span>Launch your Ad in just 4 easy steps</span>
          </div>
        </div>
      </div>
      <div className="progress">
        <Progress page={page} onPageNumberClick={nextPageNumber} />
        {
          {
            pageone: <PageOne onButtonClick={nextPage} />,
            pagetwo: <PageTwo onButtonClick={nextPage} />,
            pagethree: <PageThree onButtonClick={nextPage} />,
            pagefour: <PageFour />,
          }[page]
        }
      </div>
    </div>
  );
}

export default App;
