import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LearnHOC from "./pages/LearnHOC";
import Home from "./pages/Home";

function App() {
  const Button = (props) => <button style={props.style}>Click Me</button>;
  const Text = (props) => <button style={props.text}>Testing</button>;

  const StyleButton = LearnHOC(Button);
  const StyleText = LearnHOC(Text);

  return (
    <div>
      {/* <StyleButton />
      <Button />
      <StyleText /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
