function useState(intialVal) {
    let _val = intialVal

    const val = () => {
        return _val
    }

    const setState = (v) => {
        _val = v
        return val
    }

    return [val, setState]
}

const [foo, setfoo] = useState(0)
console.log(foo())
setfoo(1)
console.log(foo())

const MyReact = (function() {
    let _val // hold our state in module scope
    return {
      render(Component) {
        const Comp = Component() // retrigger the component to get updated state
        Comp.render()
        return Comp
      },
      useState(initialValue) {
        console.log('in usestate')
        _val = _val || initialValue // assign anew every run
        function setState(newVal) {
          _val = newVal
        }
        return [_val, setState]
      }
    }
  })()

  function Counter() {
    const [count, setCount] = MyReact.useState(0)
    return {
      click: () => setCount(count + 1),
      render: () => console.log('render:', { count })
    }
  }
  let App
  App = MyReact.render(Counter) // render: { count: 0 }
  App.click()
  App = MyReact.render(Counter)