import React, { useEffect, useState } from 'react';
import { ringCard } from "./components/ringCard";

const App = () =>{
    const [rings, setRings] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:3000/ring')
        .then((res) => res.json())
        .then((data) => {
          setRings(data);
        })

        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
        <React.Fragment>
            <h1>React</h1>
            {rings.map((halo) => (
                <div key={halo.id}>
                  <h1>---</h1>
                  <h1>Installation: {halo.installation}</h1>
                  <h1>Rang{halo.rang}</h1>
                  <h1>Array{halo.array}</h1>
                  <h1>Anchor{halo.anchor}</h1>
                  <h1>Operational{halo.operational}</h1>
                </div>
            ))}
        </React.Fragment>

        // <React.Fragment>
        //     <h1>The Best Person is: {rings.fiber}</h1>
        // </React.Fragment>
    )
}

export default App

