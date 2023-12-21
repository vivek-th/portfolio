import { Center } from "@react-three/drei";
import "./components.css";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const data = ["Experience"];
const Workexp = () => {
  return (
    <div className="herosection2">
      <div className="worklist" style={{textAlign:"center"}}>
            {data.map((item) => (
              <li className="workli" key={item} test={item}>{item} </li>
            ))}
          </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#AA336A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #AA336A" }}
          date="(Dugri, Ludhiana) May 2023- July 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: "#130340" }}
          >
            Volaverse
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Unity Game Developer</i>
          </h4>
          <p>
            🚀Designed core gameplay mechanics for enhanced user engagement.
            <br />
            🚀Developed shaders for realism.
            <br />
            🚀Designed UI windows for player interactions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#AA336A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #AA336A" }}
          date="(Ferozepur Road, Ludhiana) June 2022 – Aug 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "#130340" }}
          >
            Braintrain Info Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Web Developer</i>
          </h4>
          <p>
            🚀 Worked on front-end of finance website. <br />
            🚀Developed interactive user interfaces using HTML, CSS and
            bootstrap.
            <br />
            🚀Utilized version control (Git) to manage and track changes.
            <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#AA336A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #AA336A" }}
          date="(GNDEC, Ludhiana) May 2020- Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "#130340" }}
          >
            Indian Society For Technical Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Convenor</i>
          </h4>
          <p>
            🚀Managed society’s database and events. <br />
            🚀Created Posters with Canva.
            <br />
            🚀Conducted and organised various workshops.
            <br />
          </p>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  #AA336A" }}
          contentStyle={{ background: "#AA336A", color: "#fff" }}
          date="(GNDEC, Ludhiana) June 2020- Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "#130340" }}
          >
            National Service Scheme
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <i>Student Convenor</i>
          </h4>
          <p>
            🚀Organised various camps and seminars. <br />
            🚀Personality development through community services..
            <br />
           
          </p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  );
};

export default Workexp;
