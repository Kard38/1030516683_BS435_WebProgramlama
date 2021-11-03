import React from "react";
import  ReactDOM from "react-dom";

import {Game} from "./Game";

export const App = () => {
    return(
        <div>
            <Game/>
        </div>
    );
}
//Sizin attığınız odev03 üzerinden devam ettim
ReactDOM.render(<App />, document.getElementById("root"));

