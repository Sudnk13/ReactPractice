import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import OnlineTendor from "./OnlineTendor/OnlineTendor";
import OnlineTendor1 from "./OnlineTendor/OnlineTendor1";
import OnlineTendor3 from "./OnlineTendor/OnlineTendor3";
import OnlineTendor2 from "./OnlineTendor/OnlineTendor2";
import OnlineTendor4 from "./OnlineTendor/OnlineTendor4";
import AskQuestions from "./OnlineTendor/AskQuestions";
import ShareQuote from "./OnlineTendor/ShareQuote";

function App() {
  return (
    <div className="container">
      <OnlineTendor />
      <OnlineTendor1 />
      <OnlineTendor2 />
      <OnlineTendor3 />
      <OnlineTendor4 />
      <AskQuestions/>
      <ShareQuote/>
    </div>
  );
}

export default App;
