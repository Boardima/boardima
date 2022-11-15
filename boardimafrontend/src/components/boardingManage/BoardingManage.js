import AdminAppBar from "../stats/AdminAppbar";
import Content from "./Content";


function BoardingManage() {
    return (
        <div>
            <AdminAppBar value={2}/>
            <Content />
        </div>
    );
}

export default BoardingManage;