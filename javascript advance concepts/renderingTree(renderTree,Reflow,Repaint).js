/**
 *   https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
 * 
 *   https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
 * 
 *   Reflow repaint
 * 
 *   general flow
 *   
 *   HTML DOC -->  DOM TREE
 *                                 --> Render tree(reflow, repaint) --> paint
 *   CSS      -->  Styles struct
 * 
 *   DOM TREE : 
 *   Parses HTML source code and constructs DOM Tree --> 
 *   a data representation where every HTML tag has 
 *   corresponding node in the tree and corresponding text between them
 * 
 *   Render Tree:
 *   The render tree knows about styles, 
 *   so if you're hiding a div with display: none, 
 *   it won't be represented in the render tree. Same for the other invisible elements.
 *   Once the render tree is constructed, 
 *   the browser can paint (draw) the render tree nodes on the 
 * 
 *   In simple words Render Tree is visible part of the DOM Tree and it has some additional node
 *   aka bozes and aka frames (box model)
 *   The root node in render tree is the Frame and it contains all other elements.
 *   In simple words it is browser window where the page could spread
 * 
 *   Reflow: 
 *   parts of the render tree (or the whole tree) will need to be revalidated and the node dimensions recalculated. 
 *   This is called a reflow, or layout, or layouting.
 * 
 *   Repaint:
 *   parts of the screen will need to be updated, 
 *   either because of changes in geometric properties of a node or 
 *   because of stylistic change, such as changing the background color. 
 *   This screen update is called a repaint, or a redraw.
 * 
 *   What triggers a reflow or a repaint?:
 *   Adding, removing, updating DOM nodes
     Hiding a DOM node with display: none (reflow and repaint) or 
     visibility: hidden (repaint only, because no geometry changes)
     Moving, animating a DOM node on the page
     Adding a stylesheet, tweaking style properties
     User action such as resizing the window, changing the font size, or (oh, OMG, no!) scrolling

     Browsers are smart
     It will queue all updates of DOM and flush after certain amount of time and do batch operations.
    
     But sometimes script may prevent browser optimization and force to flush all the changes.
     Eg: offsetTop, offsetLeft, offsetWidth, offsetHeight, scrollTop/Left/Width/Height, clientTop/Left/Width/Height
     All the above are requesting about node and browser should give latest upto date style. 
     so it has to flush queue.

     // no-no!
    el.style.left = el.offsetLeft + 10 + "px";

    Minimizing repaints and reflows:
    1. Don't change individual styles, one by one
    2. Batch DOM changes and perform them "offline". Offline means not in the live DOM tree. You can:
       1.use a documentFragment to hold temp changes,
       2.clone the node you're about to update, work on the copy, then swap the original with the updated clone.
       3.hide the element with display: none (1 reflow, repaint), 
         add 100 changes, restore the display (another reflow, repaint). 
         This way you trade 2 reflows for potentially a hundred.
       4.Don't ask for computed styles excessively. 
         If you need to work with a computed value, take it once, cache to a local var and work with the local copy

    eg:
      // no-no!
        for(big; loop; here) {
            el.style.left = el.offsetLeft + 10 + "px";
            el.style.top  = el.offsetTop  + 10 + "px";
        }
        
        // better
        var left = el.offsetLeft,
            top  = el.offsetTop
            esty = el.style;
        for(big; loop; here) {
            left += 10;
            top  += 10;
            esty.left = left + "px";
            esty.top  = top  + "px";
}
       

 */