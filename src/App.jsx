import "./app.css";
function App() {
  return (
    <div className="mainContainer">
      <div className="text">
        <h1>
          HTML <span className="symbol">& </span>CSS
        </h1>
        <div className="subHeading">design and build Websites</div>
      </div>
      <div className="conatiner">
        <div className="subContainer">
          <div className="intersection" id="first"></div>
          <div className="intersection" id="second"></div>
          <div className="intersection" id="third"></div>
          <div className="intersection" id="fourth"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
