import React from "react";
import "./Car.css"; //подключаем стили

export default props => {
  const inputClasses = ["input"]; // массив где храним классы

  if (props.name !== "") {
    //если в инпуте есть что-то
    inputClasses.push("green"); //добавляем ему класс green
  } else {
    inputClasses.push("red"); //иначе добавляем класс red
  }

  if (props.name.length > 4) {
    inputClasses.push("bold");
  }

  return (
    <div className="Car">
      <h2>Car name: {props.name}</h2>
      <p>
        year: <i>{props.year}</i>
      </p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(" ")} //className принимает только строки, преобразуем маасив в строку
      ></input>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
