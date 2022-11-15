import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AdminAppBar from "../stats/AdminAppbar";
import AddBoarding from "./AddBoarding";
import ViewBoarding from "./ViewBoarding";

function Content() {


    return (
        <Box sx={{ margin: '100px' }}>
            <AddBoarding />
            <ViewBoarding />
        </Box>
    );
}

export default Content;