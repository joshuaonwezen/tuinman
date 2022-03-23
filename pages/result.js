import React, { useEffect, useState } from "react";
import { getPlantInformation } from "../services/plants";

export default function PlantInformation() {
  const [plantInformation, setPlantInformation] = useState({});

  useEffect(() => {
    getPlantInformation().then((data) => setPlantInformation(data));
  }, []);


  return (
    <div>
      <div className={styles["white-container"]}>
        <h2>Recommended plant</h2>
        <ul>
          <li>Name: {plantInformation.name}</li>
          <li>Light: {plantInformation.light}</li>
          <li>Water: {plantInformation.water}</li>
        </ul>
      </div>
    </div>
  );
}
