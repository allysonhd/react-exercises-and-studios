import styles from "./Description.module.css";
import React from "react";

export function RecipeAuthor() {
  const authorPhoto =
    "https://i.kym-cdn.com/entries/icons/original/000/020/115/idiot_sandwich.jpg";
  const authorName = "Smart Sandwich";
  const authorLink = "https://www.saltandlavender.com/";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="author picture"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Salt and Lavender</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
