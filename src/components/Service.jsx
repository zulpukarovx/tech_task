import React from "react";
import { serviceList } from "../serviceList";
import Card from "./Card";

const Service = () => {
  return (
    <section className="service-section">
      <h1 className="title">Сервис</h1>
      <div className="service-desc">
        <h1 className="title2">Сервис</h1>
        <h2 className="subtitle">
          От идеи до незабываемого и измеримого результата.
        </h2>

        <span className="boxline"></span>

        <p className="description">
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>

      <div className="card-section">
        {serviceList.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            img={service.img}
            id={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
