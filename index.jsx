const { useState, useEffect } = React;

function App() {

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);
  return <button>{count}</button>;
}

ReactDOM.createRoot(document.getElementById("container")).render(<App />);
