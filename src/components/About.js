import React from 'react'
import User from './User'

class About extends React.Component{
  render(){
    console.log("parent render");
    
    return (
      <div>
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut, repellendus voluptatibus excepturi possimus aut cupiditate fuga reiciendis officiis iure. Magni repellat, eveniet distinctio quisquam quasi natus nulla corporis architecto.</p>
        <User/>
      </div>
    )
  }
}


export default About
