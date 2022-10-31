import UserAppbar from "../stats/UserAppbar";
import './userhome.css'
import UniItem from "./UniItem"

function UserHome() {
    return (
        <div>

            <div className="userhome"></div>
            <UserAppbar value={1}/>
            <div className="imageuserhome"></div>
            <div className="content">
                <UniItem />
            </div>
        </div>

    );

}

export default UserHome;
