
import React, { useEffect } from 'react';

export default function Timers(prop) {
  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const intervalId = setInterval(() => {
      const a = new Date();
      const date = a.toLocaleDateString(undefined, options);
      const time = `${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;
      document.getElementById('time').innerHTML = time + " <br>on " + date;
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{prop.heading}</h1>
      <div className="container my-4">
        <div className="jumbotron">
          <h1 className="display-4">Check your time here:  <b><span id="time"></span></b></h1>
          <hr className="my-4" />
          <h3>This is the time in NEPAL.</h3>
        </div>
      </div>
    </div>
  );
}

