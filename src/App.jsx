import Blogs from "./components/Blogs"
import Course from "./components/Course"
import Header from "./components/header"

function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Course></Course>
      </div>
    </>
  )
}

export default App
