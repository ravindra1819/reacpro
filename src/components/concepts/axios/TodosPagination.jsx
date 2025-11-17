// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
// Component definition
const TodosPagination = () => {

    // State declaration

    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 10;

    // Fetching data with axios
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setTodos(res.data))
        .catch((err) => console.log(err))
    }, []);

    // Pagination logic

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
        // Example :  if(page = 3)
    // startIndex = (3 - 1) * 20 = 40
    // endIndex = 40 + 20 = 60
    const pageData = todos.slice(startIndex, endIndex);


    const totalPages = Math.ceil(todos.length / limit);

    // Ex : 200 items
        // 200 / 20 = 10 pages

    return(
        // Ui table rendering
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 text-center">Todo List (PaginationExamples)</h2>
            <hr />

            {/* Table */}

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-indigo-100">
                        <th className="border p-2">S.No</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pageData.map((todo, index)=>(
                            <tr className="hover:bg-gray-100" key={todo.id}>

                                <td className="border p-2 text-center">
                                    {(page - 1) * limit + index + 1}
                                </td>

                                <td className="border p-2">
                                    {todo.title}
                                </td>

                                <td className={`border p-2 text-center font-medium ${todo.completed ? "text-green-500" : "text-red-600"}`}>
                                    {todo.completed ? "Completed" : "Pending"}
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* // Pagination controls rendering */}

            <div className="flex justify-between mt-4">
                <button
                
                disabled = {page === 1}

                onClick={()=> setPage(page - 1)}

                className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                
                >Previous</button>


                    <p className="text-lg font-semibold"> Page {page} of {totalPages}</p>



                <button
                
                disabled = {page === totalPages}

                onClick={()=> setPage(page + 1)}

                className={`px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                
                >Next</button>
            </div>
        </div>
    )
};







export default TodosPagination;