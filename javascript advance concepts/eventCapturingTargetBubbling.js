/**
 *  The standard DOM Events describes 3 phases of event propagation:
 *   1.Capturing phase – the event goes down to the element.
     2.Target phase – the event reached the target element.
     3.Bubbling phase – the event bubbles up from the element.
 *   Event bubbling and Event Capturing
 *   https://javascript.info/bubbling-and-capturing
 * 
 *   1.Event Bubbling: 
      When an event happens on an element, 
      it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
     
       <form onclick="alert('form')">FORM
            <div onclick="alert('div')">DIV
                <p onclick="alert('p')">P</p>
            </div>
        </form>

        event on P will trigger or bubble up to it's parent
        P -> div -> form
 
      Stop Bubbling
        A bubbling event goes from the target element straight up. 
        Normally it goes upwards till <html>, and then to document object, 
        and some events even reach window, calling all handlers on the path.

        event.stopPropagation():

        But any handler may decide that the event has been fully processed and stop the bubbling.
        event.stopPropagation() stops the move upwards, 
        but on the current element all other handlers will run.

        event.stopImmediatePropagation():
        To stop the bubbling and prevent handlers on the current element from running, 
        there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

       


 *   
 */

/**
 *  2. event.target
     A handler on a parent element can always get the details about where it actually happened.
     The most deeply nested element that caused the event is called a target element, accessible as event.target.
     Example:
     For instance, if we have a single handler form.onclick, 
     then it can “catch” all clicks inside the form. 
     No matter where the click happened, it bubbles up to <form> and runs the handler.    
     event.target is the actual element inside the form that was clicked.  
 */

/** 
 *  3. event capture
 * 
 *   on click of child event
 *   Event travels through all the anscestors and finally reaches the target and bubble up from there
 * 
 *   we rarely use event.capture
 *   to event capture we need to enable it in eventListener in below way
 * 
 *   elem.addEventListener(..., {capture: true})// default capture: false
 * 
 *   const el = document.getElementById("outside");
     el.addEventListener("click", modifyText, false);
 *   
 * 
*/