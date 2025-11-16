import React, { useEffect, useState } from "react";

export default function FetchDemo() {
  const apiEndPoint = "https://jsonplaceholder.typicode.com/todos";

  const [toDo, setToDo] = useState([]);



  useEffect(() => {
    async function fetchTodos() {
        fetch(apiEndPoint)
        .then((res) => res.json())
        .then((data) => setToDo(data));
    }
        fetchTodos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Fetch Demo Component
      </h1>

      <table className="w-full border-collapse shadow rounded-lg overflow-hidden">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="p-3 text-left">S.No</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {toDo.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.title}</td>
              <td className="p-3">
                {item.completed ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-600 font-semibold">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
