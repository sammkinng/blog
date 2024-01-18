import React, { createContext, useEffect, useState } from "react";
import Routes from "./Routes";
import { getAllBlogPosts } from "services/api";

export const Context = createContext()

function App() {
  const [user, setUser] = useState('')
  const [reload,setReload]=useState(false)
  const [list,setList] = useState([])
  useEffect(()=>{
    let l=sessionStorage.getItem('loggedIn')
    if(l){
      setUser(sessionStorage.getItem('username'))
    }
  },[])

  useEffect(()=>{
    const load=async()=>{
      try {
        const res=await getAllBlogPosts()
        setList(res)
        // setList(res)
      } catch (error) {
        
      }
    }
    load()
  },[reload])

  return <Context.Provider value={
    {
     list, user, setUser,reload,setReload
    }}>
    <Routes />
  </Context.Provider>

}
export default App;
