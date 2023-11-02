import CourseName from "./CourseName/CourseName";
import PropTypes from 'prop-types';

const Course = ({ courseName, creditHr, remaining }) => {

    return (
        <div className="md:w-1/4 bg-slate-100 ml-4 rounded">
            <h1 className="text-xl p-4">Credit Hour Remaining :  {remaining}</h1>
            <p className="px-4"> <hr /></p>
            <h2 className="text-2xl font-bold py-4 pl-4">Course name</h2>

            {
                courseName.map((course, idx) => <CourseName
                    key={idx}
                    course={course}
                ></CourseName>)
            }
            <p className="px-4 pt-4"> <hr /></p>
            <p className="text-2xl font-bold py-4 pl-4">Total Credit Hour : {creditHr}</p>
            <p className="px-4"> <hr /></p>
            <p className="text-2xl font-bold py-4 pl-4">Total Price : 48000 USD</p>
        </div>
    );
};
Course.propTypes = {
    courseName: PropTypes.array,
    creditHr: PropTypes.number,
    remaining: PropTypes.number

}
export default Course;