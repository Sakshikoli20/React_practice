import { useState } from "react";
import Button from "./Button";

const Card = ({ book }) => {
  const [quantity, setQuantity] = useState(book.quantity);

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={book.url} alt={book.title} />
      </div>
      <div>{book.name}</div>
      <div>{quantity > 0 ? book.price * quantity : book.price } </div>
      <div className="card-footer">
        <Button
          style={{ background: "red" }}
          onClick={() => setQuantity((book) => book - 1)}
          // incre={() => setPrice((price,setQuantity) => book.setQuantity * book.price)}
        >
          -
        </Button>
        {quantity}
        <Button
          style={{ background: "green" }}
          onClick={() => setQuantity((book) => book + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Card;
