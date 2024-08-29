Here’s a list of some of the most common and important CSS pseudo-classes and pseudo-elements, along with brief descriptions of their usage:

### tldr;

- **Pseudo-classes** like `:hover`, `:focus`, and `:nth-child` are used to apply styles based on the state of an element or its position within the DOM.
- **Pseudo-elements** like `::before`, `::after`, and `::first-letter` are used to style specific parts of an element's content or add content before or after the element's content.

### **Common CSS Pseudo-Classes**

1. **`:hover`**

   - Applies when the user hovers over an element with a pointing device (like a mouse).
   - Example: `button:hover { background-color: blue; }`

2. **`:active`**

   - Applies when an element is being activated by the user, such as when a button is pressed down.
   - Example: `button:active { background-color: red; }`

3. **`:focus`**

   - Applies when an element has received focus, such as when a user clicks on an input field.
   - Example: `input:focus { border-color: green; }`

4. **`:visited`**

   - Applies to links that have been visited by the user.
   - Example: `a:visited { color: purple; }`

5. **`:nth-child(n)`**

   - Matches the nth child of a parent element.
   - Example: `li:nth-child(2) { color: red; }`

6. **`:nth-of-type(n)`**

   - Matches the nth child of a specific type (tag name) within a parent element.
   - Example: `p:nth-of-type(2) { font-weight: bold; }`

7. **`:first-child`**

   - Matches the first child of a parent element.
   - Example: `p:first-child { font-size: larger; }`

8. **`:last-child`**

   - Matches the last child of a parent element.
   - Example: `p:last-child { color: blue; }`

9. **`:only-child`**

   - Matches an element that is the only child of its parent.
   - Example: `p:only-child { margin: 0; }`

10. **`:not(selector)`**

    - Excludes elements that match the specified selector.
    - Example: `p:not(.highlight) { color: gray; }`

11. **`:checked`**

    - Applies to form elements (like checkboxes or radio buttons) that are checked.
    - Example: `input:checked { border-color: green; }`

12. **`:disabled`**

    - Applies to form elements that are disabled.
    - Example: `input:disabled { background-color: #ccc; }`

13. **`:enabled`**

    - Applies to form elements that are enabled.
    - Example: `input:enabled { background-color: white; }`

14. **`:empty`**

    - Matches elements that have no children (including text nodes).
    - Example: `div:empty { display: none; }`

15. **`:nth-last-child(n)`**
    - Matches the nth child of a parent element, counting from the last child.
    - Example: `li:nth-last-child(2) { color: orange; }`

### **Common CSS Pseudo-Elements**

1. **`::before`**

   - Inserts content before the content of an element.
   - Example: `h1::before { content: "★ "; color: gold; }`

2. **`::after`**

   - Inserts content after the content of an element.
   - Example: `h1::after { content: " ★"; color: gold; }`

3. **`::first-letter`**

   - Applies styles to the first letter of the first line of a block-level element.
   - Example: `p::first-letter { font-size: 2em; color: red; }`

4. **`::first-line`**

   - Applies styles to the first line of a block-level element.
   - Example: `p::first-line { font-weight: bold; }`

5. **`::selection`**

   - Applies styles to the portion of an element that has been highlighted by the user (selected).
   - Example: `::selection { background: yellow; color: black; }`

6. **`::placeholder`**

   - Styles the placeholder text of an input or textarea element.
   - Example: `input::placeholder { color: gray; font-style: italic; }`

7. **`::marker`**

   - Styles the marker (bullet point) of a list item.
   - Example: `li::marker { color: blue; font-size: 1.5em; }`

8. **`::backdrop`**

   - Styles the backdrop of an element when it is in fullscreen mode.
   - Example: `::backdrop { background-color: rgba(0, 0, 0, 0.5); }`

9. **`::file-selector-button`**
   - Styles the button that opens the file selection dialog in an `<input type="file">` element.
   - Example: `input[type="file"]::file-selector-button { background-color: #007BFF; color: white; }`

### Summary

- **Pseudo-classes** like `:hover`, `:focus`, and `:nth-child` are used to apply styles based on the state of an element or its position within the DOM.
- **Pseudo-elements** like `::before`, `::after`, and `::first-letter` are used to style specific parts of an element's content or add content before or after the element's content.

These pseudo-classes and pseudo-elements are essential tools in CSS for creating dynamic and interactive web designs.

[psuedo-elements](https://youtu.be/_LxYNxeWpBo?si=xHnKoWH5sSpigTms)
[pseudo-classes](https://youtu.be/Nrsy_2ogRfQ?si=knHSE5o6c1e-UFp7)
