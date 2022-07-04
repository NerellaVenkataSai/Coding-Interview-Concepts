HTML
<input id="inputEl" placeholder="Enter a number..." type="text" />
<span id="val"></span>
<button id="incrementVal">Increment</button>
// JavaScript
const data = {
  value: ''
};
const el = document.getElementById('inputEl');
Object.defineProperty(data, 'prop', {
  get: function() {
    console.log('Getter called');
    return this.value;
  },
  set: function(value) {
    console.log('Setter called');
    this.value = value;
    el.value = value;
    printVal();
  }
});
// attaching the event listener on keyup events
el.addEventListener('keyup', (event) => {
  data.prop = event.target.value;
});
function printVal() {
  const el = document.getElementById('val');
  el.innerText = data.prop;
}
const btn = document.getElementById('incrementVal');
btn.addEventListener('click', () => {
 data.prop = Number(data.prop) + 1;
});