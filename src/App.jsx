import { useState } from "react"
import Blogs from "./components/Blogs"
import Course from "./components/Course"
import Header from "./components/header"

function App() {
  const [courseName, setCourseName] = useState([]);
  const [creditHr, setCreditHr] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const handleCourseAdd = blog => {
    console.log(blog)
    const isExist = courseName.find((item) => item.id == blog.id)
    console.log(isExist)
    if (isExist) {
      alert('Have an  already booked')
    }
    else {
      const newCourseAdd = [...courseName, blog];
      setCourseName(newCourseAdd)
    }

  }

  const handleCredit = credit => {
    const newCredit = creditHr + credit;
    const totalRemaining = remaining - credit;
    setRemaining(totalRemaining)
    if (newCredit <= 20) {
      setCreditHr(newCredit)
    }
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-10">
        <Blogs handleCourseAdd={handleCourseAdd} handleCredit={handleCredit}></Blogs>
        <Course courseName={courseName} creditHr={creditHr} remaining={remaining}></Course>
      </div>
    </>
  )
}

export default App
