import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleCourseAdd, handleCredit }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    })
    return (
        <div className="w-3/4">
            {/* <h2 className="text-3xl">Blogs:{blogs.length}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleCourseAdd={handleCourseAdd}
                        handleCredit={handleCredit}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleCourseAdd: PropTypes.func,
    handleCredit: PropTypes.func
}


export default Blogs;