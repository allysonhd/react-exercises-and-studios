import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  const chores = [
    "Clean floors",
    "Feed dog",
    "Mow yard",
    "Water plants",
    "Take out trash",
  ];
  return (
    <div>
      <h3 className={classes.choresHeading}>List of Chores to Accomplish</h3>
      <ol>
        <li className={classes.choresText}>{chores[0]}</li>
        <li className={classes.choresText}>{chores[1]}</li>
        <li className={classes.choresText}>{chores[2]}</li>
        <li className={classes.choresText}>{chores[3]}</li>
        <li className={classes.choresText}>{chores[4]}</li>
      </ol>
    </div>
  );
}
