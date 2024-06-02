import logo from "./assets/images/logo.png";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Action</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
