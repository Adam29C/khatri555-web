import React, { useEffect, useState } from "react";
import "../../assets/css/Section4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GET_ALL_GAMES } from "../../service/admin.service";
import ReusableCard from "../ReusableCard";
const AvailableGames = () => {

  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMES();
    if (res.status) {
      setgetData(res.data);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div>
      <div className="heding-sec heading-sec-custom m-4 d-flex flex-column text-center justify-content-center align-items-center">
        <div className="main-title-text mt-2">
          <span className="title-text">Available Games</span>
        </div>
        <h1 className="fw-bold">
          We Have Multiple Types of Game Rates <br /> For You
        </h1>
      </div>

      <ReusableCard
        GameData={getData}
        title="AVAILABLE GAMES"
        showPana={true}
      />
    </div>
  );
};

export default AvailableGames;
