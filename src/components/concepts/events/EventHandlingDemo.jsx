import React, { useState } from "react";

function EventHandlingDemo() {

  // 1. Click Event
  function handleClick() {
    alert("Button Clicked");
  }

  // 2. Input Change Event
  const handleChange = (e) => {
    console.log(`Input Value : ${e.target.value}`);
  };

  // 3. Passing Arguments to Event Handlers
  const greetUser = (name) => {
    alert(`Hello, ${name}`);
  };

  // 4. Mouse Events
  const handleMouseEnter = () => {
    console.log("Mouse Entered!");
  };

  const handleMouseLeave = () => {
    console.log("Mouse Left!");
  };

  // 5. Keyboard Events
  const handleKeyDown = (e) => {
    console.log(`Key Pressed: ${e.key}`);
  };

  // 6. Form Submit + Prevent Default
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted (Default Prevented)");
  };

  // 7. Focus & Blur
  const handleFocus = () => console.log("Input Focused");
  const handleBlur = () => console.log("Input Blurred");

  // 8. Controlled Component Example
  const [text, setText] = useState("");

  return (
    <div className="space-y-8 p-5">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-indigo-600">
        React Event Handling Examples
      </h2>

      {/* 1. Click Event */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Click Event
      </button>

      {/* 2. Input Change Event */}
      <div>
        <input
          type="text"
          placeholder="Type here..."
          onChange={handleChange}
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {/* 3. Passing Arguments */}
      <button
        onClick={() => greetUser("Vamseee")}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition"
      >
        Greet User (With Argument)
      </button>

      {/* 4. Mouse Events */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="p-4 border w-max rounded-md bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
      >
        Hover Over Me (Mouse Events)
      </div>

      {/* 5. Keyboard Event */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press any key..."
        className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
      />

      {/* 6. Form Submit Event */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 border rounded-lg shadow-sm w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Form Input"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
        >
          Submit Form
        </button>
      </form>

      {/* 7. Focus & Blur Events */}
      <input
        type="text"
        placeholder="Focus example..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full max-w-sm px-4 py-2 border rounded-lg"
      />

      {/* 8. Controlled Input Example */}
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Controlled Input"
          className="w-full max-w-sm px-4 py-2 border rounded-lg"
        />
        <p className="text-gray-600 mt-2">Typed Value: {text}</p>
      </div>

    </div>
  );
}

export default EventHandlingDemo;
