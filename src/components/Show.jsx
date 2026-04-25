import React, { useEffect } from 'react'
import { useState} from 'react'
import axios from '../utils/api'
function Show() {

    const [apiData, updateData] = useState([])
    const runAxios = async () => {
        await axios('/6').then((something) => {
            console.log(something)
            updateData([...apiData, something.data])
            console.log(something.data)
        }).catch((err) => console.log(err))
    }
    
    useEffect(()=>{
        runAxios()

        return ()=>{}
    },[])

    return (
        <div className="flex flex-col items-center p-8 gap-6 min-h-screen bg-white">


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
