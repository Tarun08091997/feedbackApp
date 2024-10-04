import { useState } from "react"
import Login from "./pages/Login"
import NavbarPage from "./pages/NavbarPage"
import SeeSuggestionPage from "./pages/body/SeeSuggestionPage";
import CreateSuggestionPage from "./pages/body/CreateSuggestionPage";

function App() {
  const [viewLogin , setViewLogin] = useState(false);
  const [viewPage , setViewPage] = useState("Create");
  return (
    <div className="w-full h-full m-0 p-0">
      <NavbarPage setPage = {setViewPage}/>
      {/* <Body /> */}

      {viewPage == "See" && <SeeSuggestionPage /> }
      {viewPage == "Create" && <CreateSuggestionPage />}

      {viewLogin && <Login />}
    </div>
  )
}

export default App
