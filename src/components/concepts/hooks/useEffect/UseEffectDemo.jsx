import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  
  // Example 1
  const [users, setUsers] = useState([]);

  // Example 2
  const [theme, setTheme] = useState("light");

  // Example 3
  const [time, setTime] = useState(0);

  // Example 4
  const [width, setWidth] = useState(window.innerWidth);

  // Example 5
  const [count, setCount] = useState(0);

async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }

  // 1. Fetch API Data
  useEffect(() => {
    fetchUsers();
  }, []);


  // 2. Sync theme to localStorage
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);


  // 3. Timer Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  // 4. Window Resize Listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // 5. Update Tab Title
  useEffect(() => {
    document.title = `Notifications (${count})`;
  }, [count]);



  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center gap-10">

      <h1 className="text-3xl font-bold mb-4 text-indigo-600">
        useEffect Real-Time Examples
      </h1>


      {/* Example 1 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">1. API Users</h2>
        <div className="space-y-1">
          {users.map(u => (
            <p key={u.id} className="text-gray-700">{u.name}</p>
          ))}
        </div>
      </div>


      {/* Example 2 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">2. Theme Sync (localStorage)</h2>
        
        <p className="mb-4">Current Theme: 
          <span className="font-semibold ml-2">{theme}</span>
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setTheme("light")}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition"
          >
            Dark
          </button>
        </div>
      </div>


      {/* Example 3 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">3. Timer (Interval)</h2>
        <p className="text-2xl font-bold text-green-600">{time}s</p>
      </div>


      {/* Example 4 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">4. Window Resize</h2>
        <p className="text-xl font-medium text-indigo-600">
          Width: {width}px
        </p>
      </div>


      {/* Example 5 */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">5. Document Title Update</h2>

        <p className="text-xl mb-4">Count: <span className="font-bold">{count}</span></p>

        <button
          onClick={() => setCount(c => c + 1)}
          className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>

    </div>
  );
}
