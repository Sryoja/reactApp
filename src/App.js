import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford Focus", year: 2018 },
      { name: "Audi 8", year: 2015 },
      { name: "Mazda 3", year: 2010 }
    ],
    pageTitle: "React components",
    showCars: false
  };

  // changeTitleHandler = newTitle => {
  //   this.setState({ pageTitle: newTitle });
  // };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  deleteHandler(index) {
    const tempCars = this.state.cars.concat(); // старый способ клонирования массива
    tempCars.splice(index, 1); // удаляем из клона елемент под индексом index
    this.setState({ cars: tempCars }); // переписываем массив в стейт
  }

  changeNameHandler = (name, index) => {
    const newCar = this.state.cars[index]; //получаем в переменную текущую машину
    newCar.name = name; // переопределяем новое значение из импута
    const tempCars = [...this.state.cars]; // современный способ клонирования массива
    tempCars[index] = newCar; // заноисм в клон новое значение
    this.setState({ cars: tempCars }); // переписываем массив в стейт
  };

  render() {
    // const cars = this.state.cars;

    let cars = null;

    if (this.state.showCars) {
      // проверяем значение в showCars, если там true рендерим компонент Car
      cars = this.state.cars.map((car, index) => {
        // проходим по каждому елементу
        return (
          <Car
            key={index} //уникальное значение, требование реакта
            name={car.name} // заполняем пропсы значениями из стейта
            year={car.year} // заполняем пропсы значениями из стейта
            onDelete={this.deleteHandler.bind(this, index)} // index получаем на итерации map
            onChangeName={(
              event // event получем из пропса, при событии
            ) => this.changeNameHandler(event.target.value, index)}
          />
        );
      });
    }

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toogle Cars</button>
        {cars}
        {/*переменная из рендера, можно без переменной перенести весь рендер сюда */}
      </div>
    );
  }
}

export default App;
