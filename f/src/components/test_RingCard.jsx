import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
const dimage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADZ' +
'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'

const stuff = [[{"installation":"07","range":25,"array":2,"anchor":"Threshold","operational":1,"img":"https://c4.wallpaperflare.com/wallpaper/454/418/529/halo-infinite-4k-wallpaper-preview.jpg","id":1},{"installation":"05","range":25,"array":2,"anchor":"Substance","operational":1,"id":2},{"installation":"10","range":1,"array":3,"anchor":"Earth","operational":0,"id":3},{"installation":"test","range":2,"array":2,"anchor":"test","operational":2,"id":4}]]

function RingCard() {
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
      {rings.map((halo) => (
        <>
          <p>Rang: {halo.rang}</p>
          <p>five </p>
        </>
        ))}
    </React.Fragment>
  )
}

export { RingCard };
