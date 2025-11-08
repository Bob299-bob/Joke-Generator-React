import { useEffect, useState } from "react";
import "./jokes.css"
function Jokes(){
    //Make A UseState:-
    const [joke,setJoke]=useState("");
    const [show,setShow]=useState(false);
    async function getData() {
    const Api= await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    const Get=await Api.json();
    setJoke(Get);
   }
const Handle=()=>{
    alert("Clicked");
    getData();
    //console.log(joke.joke);
    setShow(true);
}
return <div>
    <div>
        <button onClick={Handle}>Crack A Joke</button>  
                {show &&
                <h1>{joke.joke}</h1>
                }
    
    </div>
</div>
}
export default Jokes;