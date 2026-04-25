import React, { useEffect } from 'react'

function About() {

    // useEffect( callBack, [] )
useEffect(()=>{
    console.log("Component -About - MOUNTED")

    return ()=>{console.log("UNMOUNTED - About")}
}, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
  <h1 className="text-3xl font-bold text-gray-800 mb-2">About Page</h1>
  <hr className="w-16 border-gray-300 mb-6" />
  
  <div className="space-y-4 text-gray-600">
    <p className="text-sm">Check Console for <span className="font-mono bg-gray-100 p-1">useEffect</span> logs</p>
    
    <div className="flex gap-3 justify-center text-xs font-bold uppercase">
      <span className="text-green-600">Mount ✅</span>
      <span className="text-green-600">Unmount ✅</span>
      <span className="text-red-400">Updation ❌</span>
    </div>
    <p className="text-[10px] text-gray-400 max-w-xs">
      Updation only triggers when state changes or props update , or  Like when any view changes.
    </p>
  </div>
</div>
  )
}

export default About
