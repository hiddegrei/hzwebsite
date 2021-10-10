import React from "react";
import "../css/Faq.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import {Link} from "react-router-dom";

function Faq() {
  return (
    <div className="faq">
      <div className="faq__item">
        <div className="faq__h">
          How can you print a document from your laptop at HZ?
        </div>
        <div className="faq__p">
          <a
            target="_blank"
            href="https://hzuniversity.topdesk.net/tas/public/ssp/content/detail/service?unid=bd81be42f243450e95e510949a496145&from=cb85b1fc-30b7-4c40-9fdb-2f95a55db6ea"
          >
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>

      <div className="faq__item">
        <div className="faq__h">
          How can you scan a document a send it to your laptop at HZ?
        </div>
        <div className="faq__p">
          <a
            target="_blank"
            href="https://hzuniversity.topdesk.net/tas/public/ssp/content/detail/service?unid=bd81be42f243450e95e510949a496145&from=cb85b1fc-30b7-4c40-9fdb-2f95a55db6ea"
          >
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>

      <div className="faq__item">
        <div className="faq__h">
          What do you need to do when you are sick / show symptoms of
          coronavirus?
        </div>
        <div className="faq__p">
          <a
            target="_blank"
            href="https://hz.nl/uploads/documents/20201001-Schema-Wat-te-doen-bij-een-mogelijke-coronabesmetting.pdf"
          >
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>

      <div className="faq__item">
        <div class="faq__h">
          How can you book a project space in one of the wings?
        </div>
        <div className="faq__p">
          <a
            target="_blank"
            href="https://hzuniversity.topdesk.net/tas/public/ssp/content/page/locationreservationplanner?from=bbe9a4bc-42b9-4e92-9e56-da44fdcde8d2"
          >
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>

      <div className="faq__item">
        <div className="faq__h">
          What are the instructions if you want to park your car at the HZ
          parking lot?
        </div>
        <div className="faq__p">
          <a target="_blank" href="https://hz.nl/over-de-hz/contact/middelburg">
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Faq;
