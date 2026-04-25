import React from 'react'
import axios from 'axios'
import { useState} from 'react'
function Show() {

    const [apiData, updateData] = useState([])

    const api = 'https://jsonplaceholder.typicode.com/todos/1'
    const runAxios = async () => {
        await axios(api).then((something) => {
            console.log(something)
            updateData([...apiData, something.data])
            console.log(something.data)
        }).catch((err) => console.log(err))
    }
    

    return (
        <div className="flex flex-col items-center p-8 gap-6 min-h-screen bg-white">
  <button
    onClick={runAxios}
    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all active:scale-95"
  >
    Call API
  </button>

  <div className="w-full max-w-lg space-y-2">
    {apiData.map((dt, index) => (
      <li key={index} className="flex justify-between items-center list-none p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex gap-4 items-center">
          <span className="text-gray-400 font-mono text-xs">{dt.id}</span>
          <span className="text-gray-800 text-sm capitalize">{dt.title}</span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded ${dt.completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {dt.completed.toString()}
        </span>
      </li>
    ))}
  </div>
</div>

    )
}

export default Show
