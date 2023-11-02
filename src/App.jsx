import { useState } from "react"
import Blogs from "./components/Blogs"
import Course from "./components/Course"
import Header from "./components/header"

function App() {
  const [courseName, setCourseName] = useState([]);

  const handleCourseAdd = (blog) => {
    console.log('click', blog)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-10">
        <Blogs handleCourseAdd={handleCourseAdd}></Blogs>
        <Course></Course>
      </div>
    </>
  )
}

export default App
