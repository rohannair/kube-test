import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resp, updateResp] = useState(" // Nothing here");
  useEffect(() => {
    fetch("/api/")
      .then((r) => r.json())
      .then(updateResp);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
      </header>
      <div className="body">
        <pre>
          <code>{JSON.stringify(resp, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
