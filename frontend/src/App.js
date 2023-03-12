import React, { useEffect, useState } from 'react';
import { ringCard } from "./components/ringCard";

const App = () =>{
    const [rings, setRings] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:3000/test', {mode:'no-cors'})
        .then((res) => res.json())
        .then((data) => {
          setRings(data);
        })

        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
        // <React.Fragment>
        //     <h1>React</h1>
        //     {rings.map((halo) => (
        //         <h1>{halo.installation}</h1>
        //     ))}
        // </React.Fragment>

        <React.Fragment>
            <h1>The Best Person is: {rings}</h1>
        </React.Fragment>
    )
}

export default App