import "./App.css"
import Form from "./form"
import Login from "./Login"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App(){
  return (
    <BrowserRouter>    
  <div>
    <h1 style={{fontFamily:"monospace",fontSize:"35px"}}>Jokes Generator</h1>
    <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  )
}
export default App;