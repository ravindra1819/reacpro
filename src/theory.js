// ----------------------------------------------------
// 🌐 What is ReactJS?
// ----------------------------------------------------

/*
ReactJS is a JavaScript library developed by Facebook (Meta)
for building fast and interactive user interfaces (UI).

It helps developers build complex UIs using small,
reusable pieces of code called "Components".

React uses a Virtual DOM to efficiently update
only the parts of the UI that change, instead of reloading the entire page.
This makes it very fast and scalable.
*/

// Example:
const message = "Hello React!";
console.log(message); // React can render this message dynamically into the UI


// ----------------------------------------------------
// ⚙️ React Features
// ----------------------------------------------------

/*
1. **Component-Based Architecture**
   - UI is divided into independent, reusable components.
   - Each component manages its own state and logic.

2. **Virtual DOM**
   - React uses an in-memory representation of the real DOM.
   - It compares (diffing) the old and new DOMs, and updates only what changed.

3. **Declarative UI**
   - You describe *what* the UI should look like, not *how* to change it.
   - React handles UI updates automatically when data changes.

4. **One-Way Data Flow**
   - Data flows from parent → child components through props.
   - This makes debugging and data tracking easier.

5. **JSX (JavaScript XML)**
   - A syntax extension that allows writing HTML-like code inside JavaScript.
   - Makes UI code more readable and expressive.

6. **React Hooks**
   - Introduced in React 16.8 to use state and lifecycle features in functional components.

7. **React Native Support**
   - Same React concepts can be used for building mobile apps.
*/


// ----------------------------------------------------
// 🧩 Components in React
// ----------------------------------------------------

/*
A Component is the smallest building block of a React application.

Each component is a function or class that:
- Returns UI (usually written using JSX)
- Can have its own state and props

There are **two main types** of components:
1. Functional Components
2. Class Components
*/


// ✅ Functional Component Example
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

// ✅ Class Component Example
class WelcomeClass extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}


// ----------------------------------------------------
// 🧱 JSX (JavaScript XML)
// ----------------------------------------------------

/*
JSX is a syntax extension that allows writing HTML-like code in JavaScript.

- It helps visualize the UI structure clearly.
- JSX gets compiled into React.createElement() calls internally.
- It makes code shorter, cleaner, and more intuitive.

Important Rules:
1. JSX must have one parent element.
2. Class names in JSX use `className` instead of `class`.
3. JavaScript expressions inside JSX are wrapped in `{}`.
4. JSX must be transpiled (usually by Babel) before running in the browser.
*/


// ✅ JSX Example
const element = (
  <div>
    <h1>Welcome to ReactJS!</h1>
    <p>JSX makes UI creation simpler and faster.</p>
  </div>
);

// ✅ JSX is compiled into:
const compiled = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Welcome to ReactJS!'),
  React.createElement('p', null, 'JSX makes UI creation simpler and faster.')
);


// ----------------------------------------------------
// 📚 Summary
// ----------------------------------------------------
/*
ReactJS → A JavaScript library for building dynamic UIs.
Features → Component-based, Virtual DOM, One-way data flow, Hooks, JSX.
Components → Reusable UI blocks (Functional / Class).
JSX → HTML-like syntax for writing React components.
*/


// Props :

// Components in ReactJS can accept properties (props) to make them dynamic, allowing for reusability and customization.

// KeyPoints : 

// - 💡 Props are optional input for components, allowing for dynamic rendering.
// - 💡 Props are accessed and used in functional components using the `props` parameter and in class components using `this.props`.
// - 💡 Props are immutable, meaning their value cannot be changed once set.
// - 💡 To render dynamic content passed as props, use `props.name` or `props.children`.
// - 💡 Props are essential for maintaining component data that may change over time in a React application.


// States : 

// - 💡 Props are passed to the component, while state is managed within the component.
// - 💡 State can be accessed using the `useState` hook in functional components and `this.state` in class components.
// - 💡 State is an object that influences what is rendered in the browser and can be changed within the component.
// - 💡 The `setState` method is used to alter the state of a class component.
// - 💡 State is privately maintained inside a component and can be used to influence the user interface.

// 💡 Do use setState method instead of modifying state directly
// 💡 Do use a function as an argument when updating state based on the previous state value
// 💡 Don’t modify state directly, as React will not rerender the component.

// 🧱 Destructuring Props: Destructuring allows you to extract specific properties from the props object directly into variables, simplifying access and improving readability.

// ⚙️ Destructuring State: Similarly, destructuring can be used with the state object, making it easier to use and update specific state variables.

// ➕ Concise Code: Destructuring reduces the amount of repetitive code needed to access props and state, leading to more maintainable components.

// 🚀 Improved Readability: By extracting values directly, the purpose and usage of props and state become clearer within the component’s render logic.

// 🎯 Targeted Updates: Destructuring makes it easier to update only the necessary parts of the state, promoting better performance and preventing unnecessary re-renders.


// Conditional Rendering :
// CR in ReactJs means displaying different UI elements or components based on certain conditions just like how you use if, else or switch statements in Javascript.

// In simple terms : React let's you decide what to show or what not to show depending on a particular condition. 

// Ways to CR :

  // using if else :
  // Using ternary operator :
  // Using Short Circuit Operator :
  // Element Variable method : 