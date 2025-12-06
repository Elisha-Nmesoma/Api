import HomePage from "./components/homePage"
import Posts from "./components/posts"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Users from './components/users'
import Photos from "./components/photos"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path= '/users' element={<Users />} />
          <Route path='/photos' element={<Photos />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}
export default App