import { useState } from "react";
import ConcertGrid from "./components/ConcertGrid"
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";

function App() {

  return (
<<<<<<< HEAD
    <div className="App grid align-middle gap-5">
      <div className="flex justify-center py-12">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-red-500">Hej Emilie og Tomine!</h1>
      <h2 className="text-4xl">Hej Frederik</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
=======
    
    <div className="">
    <ConcertGrid/>
>>>>>>> main
    </div>

  );
}

export default App;
