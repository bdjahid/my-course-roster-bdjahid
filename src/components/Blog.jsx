import PropTypes from 'prop-types';
import { BsBook } from "react-icons/Bs";
import { BiDollar } from "react-icons/Bi";

const Blog = ({ blog, handleCourseAdd, handleCredit }) => {
    // console.log(blog)
    const { cover, title, description, price, credit } = blog
    return (
        <div className='space-y-4 bg-slate-100 rounded px-3 py-3'>
            <img src={cover} alt="" />
            <h2 className='text-base font-bold'>{title}</h2>
            <p>{description}</p>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-4'>
                    < BiDollar />
                    <span> Price:{price}</span>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    < BsBook />
                    <span> Credit:{credit}hr</span>
                </div>
            </div>
            <div onClick={() => handleCredit(credit)}>
                <button onClick={() => handleCourseAdd(blog)} className="bg-blue-300 w-full py-3 rounded-lg font-bold">Select</button>
            </div>
        </div >
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleCourseAdd: PropTypes.func,
    handleCredit: PropTypes.func
}
export default Blog;