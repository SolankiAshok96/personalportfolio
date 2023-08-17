import React from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
const Contact = () => {
  return (
    <>
      <div className=" contact " id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact with
                        <a
                          href="https://www.linkedin.com/feed/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsLinkedin color="blue" className="ms-2" size={30} />
                        </a>
                        <a
                          href="https://github.com/SolankiAshok96"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsGithub color="black" className="ms-2" size={30} />
                        </a>
                        <a
                          href="https://www.facebook.com/ashok.solanki.543908"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsFacebook color="blue" className="ms-2" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Write your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Write your email"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your msg"
                        className="mb-3"
                      />
                    </div>

                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
