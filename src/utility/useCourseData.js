import { useState,useEffect } from "react";
import { COURSE_INFO_API_1,COURSE_INFO_API_2 } from "./constant";

const useCourseData = (courseId) =>{
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetchCourseContents();
    }, [courseId]);

    const fetchCourseContents = async () => {
        const API_FORMED = COURSE_INFO_API_1 + courseId + COURSE_INFO_API_2;
        const dataFromAPI_FORMED = await fetch(API_FORMED);
        const jsonConverted = await dataFromAPI_FORMED.json();
        setCourseData(jsonConverted.units[0])
    }

    return courseData;
}

export default useCourseData;