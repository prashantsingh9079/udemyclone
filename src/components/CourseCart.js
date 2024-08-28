const CourseCart = (props) =>{
    const {courseObj} = props;
    return(
    <div  className="p-5 m-5 w-[450px] bg-blue-50 text-wrap border bottom-10 border-gray-600 rounded-xl object-cover transition-transform duration-300 transform hover:scale-105 focus:scale-105">
         <div className="min-w-40 mb-4">
            <img src={courseObj.image_304x171} />
         </div>
         <div className="font-bold">
            <h4>{courseObj.title}</h4>
         </div>
         <div><h4>{courseObj.visible_instructors[0].display_name}</h4></div>
         <div><p>{courseObj.avg_rating.toFixed(2)} stars</p></div>
         <div><p>{courseObj.content_info_short}</p></div>
    </div>
)}

export default CourseCart;