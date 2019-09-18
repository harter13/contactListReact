import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {

    const List =[ 
    {
        name : "Petro",
        desc : "payalnik",
        gender : "men",
        foto : 55
    },
    {
        name : "Galia",
        desc : "takoe",
        gender : "women",
        foto : 48    
    },
    {
        name : "Valera",
        desc : "valerintoriy",
        gender : "men",
        foto : 33
    }]

    return(

        <section className="row-section">
            <div className="container">
             <Header/>
             <ContactList ContactList = {List}/>
            </div>
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
