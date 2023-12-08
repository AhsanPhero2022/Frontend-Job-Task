import "./App.css";
import Completed from "./components/pages/Completed";
import Doing from "./components/pages/Doing";
import Incomplete from "./components/pages/Incomplete";
import Overd from "./components/pages/Overd";

import Todo from "./components/pages/Todo";
import UnderReview from "./components/pages/UnderReview";

function App() {
  return (
    <>
      <div className="flex">
        <Incomplete />
        <Todo></Todo>
        <Doing></Doing>
        <UnderReview></UnderReview>
        <Completed></Completed>
        <Overd></Overd>
      </div>
    </>
  );
}

export default App;
