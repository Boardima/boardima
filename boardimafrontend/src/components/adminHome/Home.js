import AdminAppBar from "../stats/AdminAppbar";
import Content from "./Content";

function Home() {

    return (
        <div>
            <AdminAppBar value={1} />
            <Content />
        </div>
    );
}

export default Home;