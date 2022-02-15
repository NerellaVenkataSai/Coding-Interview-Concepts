// debounce
// function cannot be called until a certain amount of time has passed
// if you consider only final state like caaling api only after user stopped typing
// Examples -- search/filter on type

// Throttle
// gives us max no of times a function can be called with in certain amount of time
// if you consider intermeddiate state like scrolling page something should happen at certain intervals.
// Examples -- scroll/resize on certain intervals

//Debounce Example plain JS

const debounce = (fn, delay) => {
    let id;
    return (...args) => {
        if(id) clearTimeout(id)
        id = setTimeout(() => {
            fn(args)
        }, delay)
    }
}

// Debounce Example 2 react
// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
/**
 * 
 * export default function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },[value] 
  );

  return debouncedValue;
} 
 */

// Trottle example
// In below example throttle will allow click but it won't call function until it passes delay

const throttle = (fn, delay) => {
    let lastTime = 0;
    let id = 0;
    return (...args) => {
        id++;
        let now = new Date().getTime()
        if(now - lastTime < delay) return;
        console.log(id)
        lastTime = now
        fn(...args)
    }
}

