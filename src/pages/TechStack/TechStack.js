import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStachList";
import RubberBand from "react-reveal/RubberBand";
import Tada from "react-reveal/Tada";

const TechStack = () => {
  return (
    <>
      <div className="container techstack" id="tech">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technology Stack{" "}
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databases ,
            front-end-and back-end tools, and APIs{" "}
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => {
            return (
               <>
                <Tada>
             <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Tada>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
