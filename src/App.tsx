import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Daniel Boll</h1>
      <span>Welcome to Daniel Boll's personal space</span>

      <div className="socials">
        <a href="https://github.com/Daniel-Boll">Github</a>
        <a href="https://linkedin.com/in/Daniel-Boll">LinkedIn</a>
        <a href="mailto:danielboll.academico@gmail.com">Email</a>
      </div>

      <div className="projects">
        {/* Button to go to games */}
        <a href="/games">Games</a>
      </div>
    </div>
  );
}

export default App;
