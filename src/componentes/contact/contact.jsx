import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div>
      <section className="contact container" id="contact">
        <div className="contact-data">
          <h2 className="heading">
            {" "}
            Get started with &nbsp;{" "}
            <span className="gradient-text">LeChair</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Natus facilis rerum ea ab inventore nesciunt officia porro sapiente? Suscipit, perferendis?
          </p>
          <a href="#" className="btn">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
};

export default contact;
