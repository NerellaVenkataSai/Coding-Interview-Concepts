// debounce
// function cannot be called until a certain amount of time has passed
// if you consider only final state like caaling api only after user stopped typing
// Examples -- search/filter on type

// Throttle
// gives us max no of times a function can be called with in certain amount of time
// if you consider intermeddiate state like scrolling page something should happen at certain intervals.
// Examples -- scroll/resize on certain intervals

//Debounce Example plain JS


const loggerFunction = (a, b) => {
  console.log(a, b)
}

// will be called only once after certain pause of action
const debounce = (fn, delay) => {
    let id;
    return (...args) => {
        if(id) clearTimeout(id)
        id = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const debouncedFunction = debounce(loggerFunction, 500)

window.addEventListener('resize', () => debouncedFunction('hello', 'world'))

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
// Functions will be called in certain intervals of time
// In below example throttle will call function on resize only after passing delay in intervals
// execute in browser console

const throttle = (fn, limit) => {
  let flag = true;
  return function(...args) {
      if(flag) {
          fn(...args);
          flag=false;
          setTimeout(() => {
              flag = true
          }, limit)
      }
  }
}

const betterLoggerFunction = throttle(loggerFunction, 500)

window.addEventListener('resize', () => betterLoggerFunction('hello', 'world'))


