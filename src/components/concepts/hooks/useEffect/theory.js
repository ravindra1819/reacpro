// What is useEffect ?
// useEffect allows you to run side effects in React Components.


// A side effect is anything that happens outside your component, such as :
// Fetching API
// Updating document.title
// Using setTimeOut / setInterval
// Reading / Writing to localStorage
// Subscribing / Unscribing to events...etc.

// Why do we need useEffect ?
// Because React Renders components multiple times.
// If you write side effects directly in the component body, they will execute again and again causing :

// infinite loops
// multiple API calls
// performance Issues ...etc

// useEffect prevents that by controlling when your code runs.

// useEffect Syntax :

useEffect(()=>{
    // side effect code runs here
}, []);

// Components of useEffect :
// ()=>{}    ->     The code to run (sideEffect)
// [Dependencies]     ->    when the effect should re-run
// cleanUp            ->    Optional return function



// Types of useEffect :
// There are three major patterns :

// A. useEffect (Runs once - on mount)

useEffect(()=>{
    console.log(`ComponentMounted`);
},[]); // empty Dependency array

// When to use :

// Fetching API on initial page load.
// Initializing data
// Running timers
// Setting up subscriptions...etc

// B. useEffect (Runs on every render) :

useEffect(()=>{
    console.log(`I run after every render`);
});

// Not commonly used - can cause performance issues.

// C. useEffect (Runs when dependencies changes) :

useEffect(()=>{
    console.log("Count Changed : ", count);
}, [count]);
// Runs whenever component count updates 