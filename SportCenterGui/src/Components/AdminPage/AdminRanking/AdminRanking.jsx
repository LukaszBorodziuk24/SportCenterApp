import React, { useState, useEffect } from "react";
import "./AdminRanking.css";
import AdminPageBanner from "../AdminPanel/AdminPageBanner/AdminPageBanner.jsx";
import { rankingAPI } from "../../../services/api.js";
import {FaUser} from "react-icons/fa";

const AdminRanking = () => {
  const [rankingData, setRankingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      setLoading(true);
      const data = await rankingAPI.getRankings();
      setRankingData(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch rankings");
      console.error("Error fetching rankings:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCalculateRankings = async () => {
    try {
      await rankingAPI.calculateRankings();
      // Refresh the rankings after calculation
      await fetchRankings();
    } catch (err) {
      setError("Failed to calculate rankings");
      console.error("Error calculating rankings:", err);
    }
  };

  const handleViewProfile = (userId) => {
    window.location.href = `/trainer/profile/${userId}`;
  };

  if (loading) {
    return (
      <div className="rankingPanelContainer mt-3">
        <AdminPageBanner title="Ranking"/>
        <div className={"blurBg rounded-5 h-100 p-4"}>
          <div className={"rankingWhiteBg rounded-5 p-4"}>Loading rankings...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="rankingPanelContainer mt-3">
      <AdminPageBanner title="Ranking"/>
      <div className={"rankingBlurBg rounded-5 p-4"}>
        <div className={"rankingWhiteBg rounded-5 p-4 w-100"} style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Trainer Rankings</h4>
            <button 
              className="btn btn-info"
              onClick={handleCalculateRankings}
            >
              Calculate New Rankings
            </button>
          </div>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          <div className="mt-2">
            {/* Gym Trainers */}
            <h5>Gym Trainers</h5>
            {rankingData?.gym && rankingData.gym.length > 0 ? (
              <div className="mb-3">
                {rankingData.gym.map((trainer, index) => (
                  <div key={trainer.userId || index} className="justify-content-evenly align-items-center row text-black rankingPanelRecordBg m-2 rounded-3">
                    <p className="col-3 m-0">{trainer.name}</p>
                    <p className="col-3 m-0">{trainer.lastName}</p>
                    <p className="col-3 m-0">Rating: {trainer.rating}</p>
                    <div className="col-3 d-flex justify-content-evenly m-0">
                      <div className="rankingUpdateUserBtn p-2 rounded-3 d-flex align-items-center justify-content-center" onClick={() => handleViewProfile(trainer.userId)}>
                        <FaUser color="white"/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="ml-3">No gym trainers available</p>
            )}

            {/* Kickboxing Trainers */}
            <h5>Kickboxing Trainers</h5>
            {rankingData?.kickboxing && rankingData.kickboxing.length > 0 ? (
              <div className="mb-3">
                {rankingData.kickboxing.map((trainer, index) => (
                  <div key={trainer.userId || index} className="justify-content-evenly align-items-center row text-black rankingPanelRecordBg m-2 rounded-3">
                    <p className="col-3 m-0">{trainer.name}</p>
                    <p className="col-3 m-0">{trainer.lastName}</p>
                    <p className="col-3 m-0">Rating: {trainer.rating}</p>
                    <div className="col-3 d-flex justify-content-evenly m-0">
                      <div className="rankingUpdateUserBtn p-2 rounded-3 d-flex align-items-center justify-content-center" onClick={() => handleViewProfile(trainer.userId)}>
                        <FaUser color="white"/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="ml-3">No kickboxing trainers available</p>
            )}

            {/* Crossfit Trainers */}
            <h5>Crossfit Trainers</h5>
            {rankingData?.crossfit && rankingData.crossfit.length > 0 ? (
              <div className="mb-3">
                {rankingData.crossfit.map((trainer, index) => (
                  <div key={trainer.userId || index} className="justify-content-evenly align-items-center row text-black rankingPanelRecordBg m-2 rounded-3">
                    <p className="col-3 m-0">{trainer.name}</p>
                    <p className="col-3 m-0">{trainer.lastName}</p>
                    <p className="col-3 m-0">Rating: {trainer.rating}</p>
                    <div className="col-3 d-flex justify-content-evenly m-0">
                      <div className="rankingUpdateUserBtn p-2 rounded-3 d-flex align-items-center justify-content-center" onClick={() => handleViewProfile(trainer.userId)}>
                        <FaUser color="white"/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="ml-3">No crossfit trainers available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRanking;