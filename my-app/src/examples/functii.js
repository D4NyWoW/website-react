function App() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]);
  
    return (
      <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>calculation: {calculation}</p>
      </>
    );
  }

  // Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

  // We do this by including a return function at the end of the useEffect Hook.
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  
    return <h1>I've rendered {count} times!</h1>;
  }