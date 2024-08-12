const CourseCart = (props) =>{
    const {courseObj} = props;
    return(
    <div id="course-card">
         <div id="course-image">
            <img src={courseObj.image_304x171} />
         </div>
         <div id="course-title">
            <h4>{courseObj.title}</h4>
         </div>
         <div id="course-instructor"><p>{courseObj.visible_instructors[0].display_name}</p></div>
         <div id="course-rating"><p>{courseObj.avg_rating.toFixed(2)} stars</p></div>
         <div id="course-duration"><p>{courseObj.content_info_short}</p></div>
    </div>
)}

export default CourseCart;