import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import electronLogo from "./assets/electron.png";
import "./App.css";

function App() {

  // useEffect(() => {
  //   const unsub = window.electron.subscribeStatistics((stats) => {
  //     // logging the data came from electron backend
  //     console.log(stats)
  //   });
  //   return unsub;
  // }, []);

  return (
   <>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between  gap-20">
        <img className="w-96" src={reactLogo} alt="reactLogo" />
        <img className="w-80" src={electronLogo} alt="electornLogo"/>
        </div>
        <div className="flex justify-center gap-80 text-white mt-20 text-5xl bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">
          <p>Vite+React+Ts</p>
          <p>Electron</p>
        </div>

        <div className="flex pb-20 justify-center gap-80 text-white mt-20 text-4xl bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto">
          Created By Shiv
        </div>
    </div>
   </>
  );
}

export default App;
