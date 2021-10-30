import React from "react";
import ReactDOM from "react-dom";

import {shuffleCards, imgClick} from "./game";


class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        shuffleCards();
    }

//functions
    render()
    {
        return (
            <div>

                <img id={"img0"} className={"kart"} onClick={ () => imgClick("img0") } />
                <img id={"img1"} className={"kart"} onClick={ () => imgClick("img1") } />
                <img id={"img2"} className={"kart"} onClick={ () => imgClick("img2") } />

                <div className={"mesaj"}>
                    <p id={"alanId"}>Kedi kartını bulmak için kartın üzerine tıklamalısın. 2 Hakkın var.</p>
                    <p id={"kazandiId"}>Kazandın
                        <a href={""} onClick={ () => shuffleCards()}>Yeniden Oyna</a>
                    </p>
                    <p id={"yenildiId"}>Kaybettin
                        <a href={""} onClick={ () => shuffleCards()}>Yeniden Oyna</a>
                    </p>
                </div>


            </div>)
            ;
    }
}
ReactDOM.render(<App />, document.getElementById('root'));