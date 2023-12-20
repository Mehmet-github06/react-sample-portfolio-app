import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../helper/imageData";
import "./ProjectDetails.scss";
import NotFound from "../NotFound/NotFound";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(true);

  const filteredImage = data.filter((item) => item.id === Number(id));

  // Eğer filteredImage dizisi boşsa veya gerekli özelliklere sahip değilse NotFound göster
  if (filteredImage.length === 0 || !filteredImage[0].image || !filteredImage[0].desc) {
    return <NotFound />;
  }

  return (
    <>
      <div className="projectDetails">
        <h1 className="projectDetails__title">Project Details</h1>
        <img
          src={`.${filteredImage[0].image}`}
          alt="image"
          className="projectDetails__image"
        />
        <p>{filteredImage[0].desc}</p>
      </div>
      <div className="buttons">
        <button
          className="buttons__back"
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="buttons__home"
          type="button"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default ProjectDetails;
