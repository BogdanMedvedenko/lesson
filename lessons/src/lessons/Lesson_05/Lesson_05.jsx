import { useState } from "react";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson_05() {
  const [order, setOrder] = useState([]);

  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue, menuEl];
    });
  };

  // список заказа
  const finalOrder = order.map((orderEl, index) => {
    return (
      <li key={index} className="order_item">
        {orderEl}
      </li>
    );
  });

  const buttonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ice-Cream",
    "Ketchup",
  ];

 
  const menuButtons = buttonNames.map((name) => {
    return (
      <Button
        key={name}
        name={name}
        onClick={() => addMenuElement(name)}
      />
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>

        <div className="button_wrapper">
          <div className="button_control">
            {menuButtons}
          </div>
        </div>

        <div className="order_wrapper">
          <p className="order_title">Your Order:</p>
          <ol className="order_list">{finalOrder}</ol>
        </div>

      </div>
    </div>
  );
}

export default Lesson_05;
