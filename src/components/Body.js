import CourseCart from "../components/CourseCart";
import { useState } from "react";
import { useEffect } from "react";
import { COURSES_API_URL } from "../utility/constant";
import Shimmer from "./Shimmer";

const Body = () => {
    const [courseArr, setCourseArr] = useState([]);
    const [courseArrCopy, setCourseArrCopy] = useState([]);
    const [searchText, setSearchText] = useState("");
    const fetchData = async () => {
        const data = await fetch(`${COURSES_API_URL}`);
        const json_data = await data.json();
        setCourseArr(json_data?.units[0]?.items)
        setCourseArrCopy(json_data?.units[0]?.items);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id="body-component">
            <div id="search-bar">
                <input type="text" placeholder="Search for anything ..." value={searchText} onChange={
                    (e) => {
                        const changedVal = e.target.value;
                        setSearchText(changedVal);
                        const filteredArray = courseArr.filter((course)=>{
                            return course.title.toLowerCase().includes(changedVal.toLowerCase());
                        })
                        console.log("prashant ",filteredArray);
                        
                        setCourseArrCopy(filteredArray)
                    }}></input>
            </div>
            <div id="filter-button" className="top-rated-courses-button">
                <button onClick={
                    () => {
                        const filteredArr = courseArr.filter((course) => {
                            return course.avg_rating > 4.4
                        })
                        setCourseArrCopy(filteredArr);
                    }
                }>Top Rated Courses</button>
            </div>
            <br />
            <div id="body-heading"><h1>Web Development Courses</h1></div>
            <br />
            <br />
            <div id="para-heading">
                <h3>Courses to get you started</h3>
                <p>Explore courses from experienced, real-world experts.</p>
            </div>
            {courseArr.length === 0 ? <Shimmer /> :
                (<div id="course-container">
                    {courseArrCopy.map((course) => {
                        return <CourseCart key={course.id} courseObj={course} />;
                    })}
                </div>)}
        </div>
    )
};

export default Body;