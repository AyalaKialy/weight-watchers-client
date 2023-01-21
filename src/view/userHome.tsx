import MyAppBar from "../components/AppBar";
import PersonalGraph from "../components/personalGraph";
import UserDetailes from "../components/userDetails";
import '../styles/userhome.style.css';


export default function UserHome() {
    return(
        <div className="box">
        <MyAppBar/>
        <div className="container">
            <div className ="details"><UserDetailes/></div>
            <div className = "graph"><PersonalGraph/></div>
        </div>
        </div>
    )
}