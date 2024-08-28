import CourseCart from "../components/CourseCart";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { COURSES_API_URL } from "../utility/constant";
import { useState, useEffect } from "react";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [courseArr, setCourseArr] = useState([]);
    const [courseArrCopy, setCourseArrCopy] = useState([]);
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
        <div className="m-10 bg-gray-50">
            <div className="flex justify-normal items-center mt-3">
                <div className="mr-3 border border-gray-500 rounded-sm">
                    <input className=" p-1" type="text" placeholder="Search for anything ..." value={searchText} onChange={
                        (e) => {
                            const changedVal = e.target.value;
                            setSearchText(changedVal);
                            const filteredArray = courseArr.filter((course) => {
                                return course.title.toLowerCase().includes(changedVal.toLowerCase());
                            })

                            setCourseArrCopy(filteredArray)
                        }}></input>
                </div>
                <div className="content-center">
                    <button className="border-2 rounded-md p-1 hover:bg-slate-300" onClick={
                        () => {
                            const filteredArr = courseArr.filter((course) => {
                                return course.avg_rating > 4.7
                            })
                            setCourseArrCopy(filteredArr);
                        }
                    }>Top Rated Courses</button>
                </div>
            </div>
            <div className="m-4"><h1 className="text-4xl font-bold">Web Development Courses</h1></div>
            <div className="mb-6 text-xl pl-4">
                <h3>Courses to get you started</h3>
                <p>Explore courses from experienced, real-world experts.</p>
            </div>
            {courseArr.length === 0 ? <Shimmer /> :
                (<div className="flex flex-wrap justify-evenly ">
                    {courseArrCopy.map((course) => {
                        return (
                            <Link key={course.id} to={"/course/" + course.id}>
                                <CourseCart courseObj={course} />
                            </Link>
                        );
                    })}
                </div>)}
        </div>
    )
};

export default Body;