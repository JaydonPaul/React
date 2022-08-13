import React from "react";
import ContactCard from "./ContactCard";

function App(){
    return (
        <div>
           <ContactCard 
                imgURL="https://tenor.com/view/black-guy-blue-eyes-rubbing-head-gif-24402199"
                name="Do do do do"
                phone="458-7351"
                email="jaytme02@gmail.com"
           />
           
           <ContactCard 
                imgURL="https://www.nytimes.com/2020/05/26/us/minneapolis-police-man-died.html"
                name="Quandale Dingle"
                phone="456-1681"
                email="jaydonpaul2002@gmail.com"
           />

            <ContactCard 
                imgURL="https://knowyourmeme.com/memes/beast-boy-guy-holding-up-four-fingers"
                name="Four"
                phone="403-8371"
                email="jaydonp002@gmail.com"
           />

            <ContactCard 
                imgURL="https://pitchfork.com/reviews/albums/dababy-baby-on-baby/"
                name="Dababy"
                phone="456-6977"
                email="fudgeoflife@gmail.com"
           />

        </div>
    )
}

export default App