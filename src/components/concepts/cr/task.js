// 🧠 React Conditional Rendering Task
// =======================================
// Component Name: AccessControlPanel
//
// Objective:
// Build a small React component that demonstrates conditional rendering
// using at least THREE different methods (if-else, ternary, short-circuit).
//
// ---------------------------------------
// 🧩 Functional Requirements:
//
// 1️⃣ Create 3 state variables:
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [hasAccess, setHasAccess] = useState(false);
//     const [showHint, setShowHint] = useState(true);
//
// 2️⃣ Display Logic:
//     - If isAdmin is true → Show: "Welcome, Admin! You have full access."
//     - Else if hasAccess is true → Show: "Welcome, User! Limited access granted."
//     - Otherwise → Show: "Access Denied. Please contact Admin."
//
// 3️⃣ Use Short-Circuit Rendering to show this hint only when showHint is true:
//     "Tip: Click the buttons below to change access!"
//
// 4️⃣ Add three buttons:
//     - Toggle Admin
//     - Toggle User Access
//     - Toggle Hint Message
//
// 5️⃣ Use Tailwind CSS for simple styling.
//     Example classes: bg-gray-100, p-3, rounded-lg, text-center, etc.
//
// ---------------------------------------
// ⚙️ Technical Requirements:
//
// ✅ Must demonstrate at least 3 conditional rendering methods:
//     - Element Variable or If-Else
//     - Ternary Operator
//     - Short-Circuit Operator
//
// ✅ Use functional component + useState hook
// ✅ Each button must toggle the corresponding state
//
// ---------------------------------------
// 💡 Bonus Challenge (Optional):
//
// Add a new state variable:
//     const [darkMode, setDarkMode] = useState(false);
//
// Conditionally change background color using ternary operator:
//     <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
//
// Add a button: "Toggle Theme"
//
// ---------------------------------------
// ✅ Submission Criteria:
//
// - Component name: AccessControlPanel
// - Must include 3 conditional rendering methods
// - Proper indentation and variable naming
// - Add comments explaining each conditional rendering method
//
// =======================================
