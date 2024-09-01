import React from "react";
import BookList from "./BookList.module.css";

export default function BookList() {
  let greatMysteries = "Great Mystery Books";
  let book1 =
    "https://m.media-amazon.com/images/I/81FiMxOzzaL._AC_UF1000,1000_QL80_.jpg";
  let book2 =
    "https://m.media-amazon.com/images/I/71ov8-gJKaL._AC_UF1000,1000_QL80_.jpg";
  let book3 = "https://pictures.abebooks.com/isbn/9780590463959-us.jpg";

  return (
    <div>
      <h3>{greatMysteries}</h3>
      <img
        src={book1}
        alt="Image of the Still Life book cover by author Louise Penny. Contains a vase with flowers sitting on a table in front of a glass window"
      />
      <img
        src={book2}
        alt="Image of the cover for the book The Sweetness at the Bottom of the Pie by Alan Bradley. Includes a dead crow with a postage stamp through its beak."
      />
      <img
        src={book3}
        alt="Image of cover of Nancy Drew the Secret of the Old Clock. Nancy is kneeling in a field holding a screwdriver and an old mantel clock."
      />
    </div>
  );
}
