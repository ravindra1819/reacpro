// 🌟 Lists in React

// In React, Lists are used to display a collection of similar items,
// like a list of users, products, messages, cards, etc.
// Instead of manually writing multiple elements, 
// we can dynamically loop through an array using JavaScript's map() function 
// and render JSX for each item.

// ------------------------------------------------------------
// Example : Without a List (Manual Way)
// ------------------------------------------------------------

function StudentList() {
    return (
        <div>
            <p>Vamsee</p>
            <p>Ravindra</p>
            <p>Reddy</p>
        </div>
    );
}

// ✅ Works fine, but not scalable if you have many students.

// ------------------------------------------------------------
// Rendering Lists Dynamically
// ------------------------------------------------------------

// React supports rendering multiple elements using Array.map().
// This helps us create dynamic and reusable UI blocks.

function StudentList() {
    const students = ["Vamsee", "Krishna", "Ravindra", "Reddy"];

    return (
        <>
            {
                students.map((student) => (<p>{student}</p>))
            }
        </>
    );
}

// ------------------------------------------------------------
// 💡 Explanation
// ------------------------------------------------------------
// 1. students.map()  --> Loops through each element in the array.
// 2. For every student name, React returns a <p> element.
// 3. The result is a list of <p> tags dynamically generated.
// 4. Makes the UI scalable and flexible to handle any number of items.

// ------------------------------------------------------------
// ⚠️ Why React Needs Keys
// ------------------------------------------------------------
// When React updates the DOM, it needs to know which items have changed, 
// added, or removed. Without unique keys, React can't efficiently track updates.
// This can lead to unexpected behavior or performance issues.

// ------------------------------------------------------------
// Example : Without Keys (❌ Warning)
// ------------------------------------------------------------

function StudentList() {
    const students = ["Vamsee", "Krishna", "Ravindra", "Reddy"];

    return (
        <>
            {
                students.map((student) => (<p>{student}</p>))
            }
        </>
    );
}

// ⚠️ React Warning:
// Each child in a list should have a unique "key" prop.

// ------------------------------------------------------------
// ✅ Using Keys Correctly
// ------------------------------------------------------------

function StudentList() {
    const students = ["Vamsee", "Krishna", "Ravindra", "Reddy"];

    return (
        <>
            {
                students.map((student, index) => (
                    <p key={index}>{student}</p>
                ))
            }
        </>
    );
}

// ------------------------------------------------------------
// 💡 Notes on Keys
// ------------------------------------------------------------
// - The 'key' prop helps React identify which items have changed or moved.
// - Keys should be unique among siblings.
// - Avoid using 'index' as key if items can be reordered or removed.
// - Prefer unique IDs from your data whenever possible.

// Example: Using IDs as keys

function StudentList() {
    const students = [
        { id: 101, name: "Vamsee" },
        { id: 102, name: "Krishna" },
        { id: 103, name: "Ravindra" },
        { id: 104, name: "Reddy" },
    ];

    return (
        <>
            {
                students.map((student) => (
                    <p key={student.id}>{student.name}</p>
                ))
            }
        </>
    );
}

// ------------------------------------------------------------
// ✅ Summary
// ------------------------------------------------------------
// - Use Array.map() to render lists dynamically.
// - Always provide a unique 'key' prop for each item.
// - Keys help React efficiently re-render only changed elements.
// - Avoid using array indexes as keys when list items can change order.
// - Lists make your React components reusable, clean, and scalable.
