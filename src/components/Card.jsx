import React, { useState, useEffect } from "react";
import { useGetPostQuery } from "../services/api";

const Modal = ({ onClose, isLoading, error, data }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : (
          <div className="modal-content_text">
            <h4>{data?.title.toUpperCase()}</h4>
            <p>{data?.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ title, img, id }) => {
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading } = useGetPostQuery(id, { skip: !showModal });

  useEffect(() => {
    const className = "no-scroll";
    if (showModal) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    return () => document.body.classList.remove(className);
  }, [showModal]);

  return (
    <div className="card">
      <div className="card-content">
        <img className="card-logo" src={img} alt={`${title} logo`} />
        <span className="card-title">{title}</span>
        <button onClick={() => setShowModal(true)} className="link-btn">
          ПОДРОБНЕЕ →
        </button>
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            isLoading={isLoading}
            error={error}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
