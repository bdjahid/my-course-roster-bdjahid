import PropTypes from 'prop-types';

const CourseName = ({ course }) => {
    const { title } = course;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
            {title}
        </div>
    );
};
CourseName.propTypes = {
    course: PropTypes.object
}
export default CourseName;