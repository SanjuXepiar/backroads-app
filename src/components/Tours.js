import React from "react";
import { Tour } from "./Data";
export const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {Tour.map((tour) => {
          const { id, img, date, title, text, icon, place, time, cost } = tour;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date} </p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {place}
                  </p>
                  <p>{time} </p>
                  <p>{cost} </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
