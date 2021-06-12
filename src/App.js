import React from "react";
import SortingWeigets from "./sortingWeigets/SortingWeigrts.jsx";
import './App.css';

function App() {

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("All ok....")
    //     }, 9000);
    //     return () => clearTimeout(timer)

    //     // setTimeout(() => {
    //     //     console.log("this is")
    //     // }, 3000);
    // }, [])

  return (
    <div className="App">
        <SortingWeigets/>
    </div>
  );
}

export default App;
