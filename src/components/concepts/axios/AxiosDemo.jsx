import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AxiosDemo() {
      const apiEndPoint = "https://jsonplaceholder.typicode.com/todos";
    
      const [toDo, setToDo] = useState([]);

    useEffect(() => {
        axios.get(apiEndPoint)
        .then(response => 
                {
                    if(response.status === 200){
                        setToDo(response.data);
                    }else{
                        console.log('Error fetching data');
                    }
                }
        )
        .catch(error => console.log(error));
    }, []);

    console.log(toDo);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Axios Demo Component
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
  )
}
