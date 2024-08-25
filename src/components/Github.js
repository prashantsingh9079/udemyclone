import { Component } from "react";
import { GITHUB_API } from "../utility/constant";

class Github extends Component {

    constructor() {
        super();
        this.state = {
            followers: "Loading...",
            public_repos: "Loading...",
            bio: "Loading...",
            location: "Loading...",
            name: "Loading...",
            url: "Loading...",
            avatar_url: "Loading...",
        }
    }

    async componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("prashantttt");
        },1000);
        const data = await fetch(GITHUB_API);
        const json = await data.json();
        this.setState({
            followers: json.followers,
            public_repos: json.public_repos,
            bio: json.bio,
            location: json.location,
            name: json.name,
            html_url: json.html_url,
            avatar_url: json.avatar_url,
        })
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        const {avatar_url,html_url,name,location,bio,public_repos,followers} = this.state;
        return (
            <div id="github-info-in-a-card">
                <img src={avatar_url} alt="profile-pic" />
                <h3>{name}</h3>
                <h3>{location}</h3>
                <h5>{bio}</h5>
                <a href={html_url}><p>{html_url}</p></a>
                <p>Public Repositories : {public_repos}</p>
                <p>Followers : {followers}</p>
            </div>
        )
    }

}

export default Github;