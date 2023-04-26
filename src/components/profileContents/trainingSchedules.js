import "./css/trainingSchedules.css";
import React from "react";
import ShoulderWorkout from "../workoutComponents/ShoulderWorkout";
import ChestWorkout from "../workoutComponents/ChestWorkout";
import LegWorkout from "../workoutComponents/LegWorkout";
import BackWorkout from "../workoutComponents/BackWorkout";
import FirstRestDay from "../workoutComponents/FirstRestDay";
import BicepsWorkout from "../workoutComponents/BicepsWorkout";
import SecondRestDay from "../workoutComponents/SecondRestDay";
const TrainingSchedules = () => {
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // const day = weekDay[d.getDay()];
  // const day = "Monday";
  // const day = "Tuesday";
  // const day = "Wednesday";
  // const day = "Thursday";
  // const day = "Friday";
  // const day = "Saturday";
  const day = "Sunday";

  let program = day;
  let result;
  if (program === "Monday") {
    result = "Chest Workout";
  } else if (program === "Tuesday") {
    result = "Leg Workout";
  } else if (program === "Wednesday") {
    result = "Back Workout";
  } else if (program === "Thursday") {
    result = "Shoulder Workout";
  } else if (program === "Friday") {
    result = "First rest day";
  } else if (program === "Saturday") {
    result = "Bicep Workout";
  } else {
    result = "Second rest day";
  }
  console.log(result);

  let a = result;
  let b = day;
  let training;
  if (a && b === "Monday") {
    training = <ChestWorkout />;
  } else if (a && b === "Tuesday") {
    training = <LegWorkout />;
  } else if (a && b === "Wednesday") {
    training = <BackWorkout />;
  } else if (a && b === "Thursday") {
    training = <ShoulderWorkout />;
  } else if (a && b === "Friday") {
    training = <FirstRestDay />;
  } else if (a && b === "Saturday") {
    training = <BicepsWorkout />;
  } else {
    training = <SecondRestDay />;
  }
  console.log(training);

  return (
    <div>
      <div className="training_schedule_header">
        <h2>
          <i>
            Train like a <span className="king_baby">king</span>, sleep like a{" "}
            <span className="king_baby">baby!</span>
          </i>
        </h2>
      </div>
      <div className="training_of_the_day">
        <div className="training_day">
          <h1 className="training_day_header">Your training day: </h1>
          <p id="dayOfTheWeek">
            <span>{day}</span> ({result})
          </p>
        </div>
        {training}
      </div>
    </div>
  );
};

export default TrainingSchedules;
