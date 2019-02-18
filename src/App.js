/*Задание

Создайте новый проект React - приложения.
Выведите на странице приложения компонент App, код которого должен находиться
в отдельном файле.
Компонент App должен выводить 5 компонентов Joke, содержащих анекдоты.Выведите 
эти компоненты так, как вам хочется.
Каждый компонент Joke должен принимать и обрабатывать свойство question, для 
основной части анекдота, и свойство punchLine — для его ключевой фразы.
*/

// Решение

import React from "react";
import "./App.css";
import Joke from "./Joke";
import jokesData from "./Jokes";

function App() {
  const jokes = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));
  return <div className="app">{jokes}</div>;
}

export default App;
