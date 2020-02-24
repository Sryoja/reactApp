import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// ограниченя JSX :
// 1) class задаем как className, т.к.
//    слово class зарезрвировано JS
// 2) все выводится в 1 корневом элементе
// 3) инлайн стили через const или внутри {{textAlign: center}}.
//    стили пишем через Кемел кейс
