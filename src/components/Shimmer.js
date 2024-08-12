const Shimmer = () =>{
    const shimmerArray = Array(4).fill(0)
    return(
        <div id="shimmer-ui">
            {shimmerArray.map((element,index)=>{
                return <div key={index} id="course-card"></div>
            })}
        </div>
    )
}

export default Shimmer;