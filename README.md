
# JavaScript Answers

## Ans-01: Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

- **getElementById('id')**
  - Selects a **single element** with the given ID.
  - Returns a **single element**.

- **getElementsByClassName('class')**
  - Selects **all elements** with the given class.
  - Returns an **HTMLCollection** (live collection).

- **querySelector('selector')**
  - Selects the **first element** that matches a CSS selector.
  - Returns a **single element**.

- **querySelectorAll('selector')**
  - Selects **all elements** matching the CSS selector.
  - Returns a **NodeList**.

---

## Ans-02: Create and insert a new element into the DOM

```html
<body>
  <div id="parent"></div>

  <script>
    const newDiv = document.createElement("div");
    newDiv.className = "html-container";
    newDiv.innerHTML = `
      <h1 style="text-align: center; font-weight: bold;">Hello World</h1>
    `;
    const addHtml = document.getElementById("parent");
    addHtml.appendChild(newDiv);
  </script>
</body>

```


## Ans-03: Event Bubbling
When an event occurs on an element, it **bubbles up** from the target element to its ancestors.  

**Example:**  
If a button is clicked, the event first triggers the button’s handler, then moves to its parent, grandparent, up to `<body>` and `<html>`.

---

## Ans-04: Event Delegation
Instead of adding listeners to multiple child elements, a **single listener is placed on the parent element**.  
- Uses `event.target` to identify which child triggered the event.  
- Benefits:
  - Saves memory
  - Works well with dynamically created elements  

---

## Ans-05: Difference between preventDefault() and stopPropagation()

1. **preventDefault()**
   - Prevents the default behavior of an event.  
   - Example: A link click normally navigates to another page, but `preventDefault()` stops the navigation.

2. **stopPropagation()**
   - Stops event bubbling.  
   - Example: If a child element is clicked, the parent handler will **not fire** when `stopPropagation()` is used.
