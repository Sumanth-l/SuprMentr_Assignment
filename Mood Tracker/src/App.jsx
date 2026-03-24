import React, { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => setMood("😊 Happy")}>Happy</button>
      <button onClick={() => setMood("😢 Sad")}>Sad</button>
      <button onClick={() => setMood("😎 Excited")}>Excited</button>
      <button onClick={() => setMood("😌 Calm")}>Calm</button>

      {mood && <p>You are feeling {mood} today!</p>}
    </div>
  );
}

export default App;