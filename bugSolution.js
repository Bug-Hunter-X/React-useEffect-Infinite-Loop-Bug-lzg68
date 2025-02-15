```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect now runs only once after the initial render.
    // Add any dependencies you need here.
    console.log('This runs only once!'); 
  }, []);

  return <div>Count: {count}</div>;
}
```