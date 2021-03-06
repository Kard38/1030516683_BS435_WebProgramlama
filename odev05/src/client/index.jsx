import React from "react";
import  ReactDOM from "react-dom";

import {Game} from "./Game";

import {Home} from "./home";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Switch, Route} from "react-router";

const notFound = () =>{
    return(
        <div>
            <h2>Sayfa bulunamadı: 404</h2>
            <p>Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}

export const App = () => {
    return(
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/Game' component={Game}/>
                    <Route exact path='/' component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </HashRouter>
    );
}
//Sizin attığınız odev03 üzerinden devam ettim
ReactDOM.render(<App />, document.getElementById("root"));

