import { useState } from "react";
function App() {
  const [names, setNames] = useState<string[]>([]);

  const onLoad = () => {
    import("./users").then((module) => {
      if (!module) return;
      setNames(module.default);
    });
  };
  return (
    <div className="App">
      <div className="container wide">
        <h1 className="">{JSON.stringify(names)}</h1>
        <button onClick={onLoad}>Load</button>
      </div>
    </div>
  );
}

export default App;
