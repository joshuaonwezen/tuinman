import React, { useEffect, useState } from 'react';
import { getPlantInformation } from '../services/plants';
import styles from '../styles/Home.module.scss'

export default function PlantInformation() {
  const [plantInformation, setPlantInformation] = useState({});

  useEffect(() => {
   getPlantInformation()
   .then(data =>
     setPlantInformation(data)
   );
  }, [])


  return(
    <div className={styles.white_container}>
      <h2>Recommended plant</h2>
      <ul>
        <li>Name: {plantInformation.name}</li>
        <li>Light: {plantInformation.light}</li>
        <li>Water: {plantInformation.water}</li>
      </ul>
    </div>
  )
}