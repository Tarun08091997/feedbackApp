import { useEffect, useState } from "react"
import Login from "./pages/Login"
import NavbarPage from "./pages/NavbarPage"
import SeeSuggestionPage from "./pages/body/SeeSuggestionPage";
import CreateSuggestionPage from "./pages/body/CreateSuggestionPage";
import axios from "axios";


function App() {
  const [viewLogin , setViewLogin]= useState(true);
  const [viewPage , setViewPage] = useState("Create");
  const [user,setUser] = useState({});
  
  const checkLogin = async()=>{
    try{
      const response = await axios.get("http://localhost:4000/checkLogin", {
        withCredentials: true // Include cookies in requests
      });

      if(response.data.success){
        setViewLogin(false);
        setUser(response.data.message);
      }
    }catch(err){
      console.log("we are getting error" , err);
      if(err.response.data.success == false){
        alert(err.response.data.message);
      }
    }
  }

  useEffect(()=>{
    if(viewLogin){
      checkLogin();
    }
  })

  return (
    <div className="w-full h-full m-0 p-0">
      <NavbarPage setPage = {setViewPage} user={user} setViewLogin={setViewLogin} setUser={setUser}/>
      {/* <Body /> */}

      {viewPage == "See" && <SeeSuggestionPage /> }
      {viewPage == "Create" && <CreateSuggestionPage />}

      {viewLogin && <Login setView={setViewLogin} setUser = {setUser}/>}
    </div>
  )
}

export default App
