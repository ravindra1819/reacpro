// ===============================
// React Events — Complete Theory (Enhanced)
// ===============================

// What Are Events in React ?
// Events in React are actions or interactions that happen inside the browser —
// such as clicking a button, typing in an input field, hovering an element,
// submitting a form, pressing a key, scrolling, etc.
//
// React manages these using Synthetic Events, which provide consistent behavior
// across all browsers.

// Why React Uses Synthetic Events ?
// Different browsers handle native DOM events differently.
// Some have naming differences, missing properties, or inconsistent behavior,
// especially older browsers like Internet Explorer.
//
// To solve this, React created SyntheticEvent — a cross-browser wrapper around
// the browser’s native event object.
//
// Benefits:
// - Consistent behavior across browsers
// - Unified event system
// - Performance optimizations
// - Same event properties everywhere

// Key Points About React Events:
//
// 1. React event names use camelCase.
//    Example: onClick, onChange, onMouseEnter, onSubmit.
//
// 2. Event handlers are functions, NOT strings.
//    (HTML uses strings, React uses functions)
//
// 3. You pass the function reference, not the function call.
//    Incorrect: onClick={handleClick()}
//    Correct:   onClick={handleClick}
//
// 4. Every event handler receives a SyntheticEvent object (e).

// ===============================
// Basic Example — Click Event
// ===============================

import React from "react";

function ClickExample() {
  
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <div>
      <h2>React Event Example</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default ClickExample;


// Explanation:
// onClick → React event
// handleClick → event handler function
// Notice: no parentheses used while assigning the handler.


// ===============================
// Passing Arguments to Event Handlers
// ===============================

function GreetUser() {

  const handleGreet = (name) => {
    console.log(`Hello, ${name}`);
  };

  return (
    <div>
      <button onClick={() => handleGreet("Vamseee")}>
        Greet Me
      </button>
    </div>
  );
}

// Explanation:
// To pass a value, wrap the handler inside an arrow function.
// Otherwise, it will execute immediately on render.


// ===============================
// Accessing the Event Object
// ===============================

function InputLogger() {

  const handleChange = (e) => {
    console.log(`Input Value: ${e.target.value}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
        className="
          w-full max-w-sm px-4 py-2 border border-gray-300 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
          shadow-sm
        "
      />
    </div>
  );
}

// Explanation:
// - Every handler receives a SyntheticEvent object (e).
// - e.target.value gives the current input value.


// ===============================
// Commonly Used React Events
// ===============================
//
// Mouse Events:
// - onClick
// - onDoubleClick
// - onMouseEnter
// - onMouseLeave
//
// Keyboard Events:
// - onKeyDown
// - onKeyPress
// - onKeyUp
//
// Form Events:
// - onChange
// - onSubmit
// - onFocus
// - onBlur
//
// Touch Events:
// - onTouchStart
// - onTouchEnd

// ===============================
// Important Notes
// ===============================
//
// - Synthetic Events are lightweight and optimized.
// - Do not store the event object directly in state.
// - Always keep event handlers inside the component to access state and props.

// ===============================
// END OF THEORY
// ===============================
