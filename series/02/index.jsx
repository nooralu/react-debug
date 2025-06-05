const { useState } = React;

function Link() {
  return <a href="https://jser.dev">jser.dev</a>;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        <Link />
        <br />
        <button onClick={() => setCount(count => count + 1)}>click me - {count}</button>
      </p>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("container")).render(<App />);
