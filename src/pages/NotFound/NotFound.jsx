import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          src="https://www.limonhost.net/makaleler/wp-content/uploads/2020/10/404-not-found-sayfa-bulunamadi-hatasi-ve-cozumu.png"
          alt=""
        />
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

export default NotFound;
