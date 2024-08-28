import React from "react";

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName:"loading..."
        }
    }

    async componentDidMount(){  
        const data = await fetch("https://api.github.com/users/prashantsingh9079");
        const json = await data.json();
        this.setState({
            userName : json.login
        })
    }

    render() {
        return (<div id="user-card">
            <h3>{this.state.userName}</h3>
            <h3>{}</h3>
        </div>)
    }
}

export default User;