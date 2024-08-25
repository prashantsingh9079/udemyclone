import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useCourseData from "../utility/useCourseData";

const CourseInfo = () => {
    const { courseId } = useParams();
    const courseData = useCourseData(courseId);

    if (courseData.length === 0) {
        return (
            <Shimmer />
        )
    }

    const title = courseData?.source_objects[0]?.title;
    const recom_course = courseData.items;
    const description = courseData?.description;
    const avg_rating = courseData?.avg_rating || (Math.random()*5).toFixed(2);
    console.log(courseData);
    
    return (
        <div id="course-info" className="course-info-page">
            <h1>{title}</h1>
            <p>Course Rating {avg_rating} stars</p>
            <p>{description}</p>
            <h2>Recommended Courses</h2>
            {recom_course.map((item) => {
                return (
                    <Link key={item.id} to={"/course/"+item.id} className="course-info-card">
                    <div >
                        <h3>{item.title}</h3>
                        <p>{`Rating ${item.avg_rating.toFixed(2)} stars`}</p>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
};

export default CourseInfo;