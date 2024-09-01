import React from "react";
import classes from "./HobbyLinks.module.css";

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.gardendesign.com/how-to/",
    "https://sallysbakingaddiction.com/",
    "https://apamo.org/?gad_source=1&gclid=EAIaIQobChMIjvfAp92TiAMVIUT_AR0XUQ5eEAAYASAAEgLeDvD_BwE",
  ];
  return (
    <div>
      <h3 className={classes.hobbiesHeading}>My Hobbies</h3>
      <ul>
        <li className={classes.hobbiesText}>
          <a href={hobbyLinks[0]}>Garden Design</a>
        </li>
        <li className={classes.hobbiesText}>
          <a href={hobbyLinks[1]}>Baking</a>
        </li>
        <li className={classes.hobbiesText}>
          <a href={hobbyLinks[2]}>Fostering Dogs</a>
        </li>
      </ul>
    </div>
  );
}
