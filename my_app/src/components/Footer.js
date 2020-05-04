import React, { Component } from "react";


class Footer extends Component{
    render(){
        return(
            <div>
            <div className="propose_form">
                    <h1>YOU THINK WE DON`T KNOW THAT ONE UNIQUE, <br/>
                    ARTISTIC, EXTRAORDINARY MOVIE? <br/> RECOMMEND IT TO US!<br/> <br/> </h1>
                    <form>
                    <input type="text" placeholder="Movie We Have To Check Out!"/>
                    <input type="text" placeholder="How Much We Will Like It/10?"/>
                    <input type="Link" placeholder="Imdb Link"/>
                    <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Footer;
