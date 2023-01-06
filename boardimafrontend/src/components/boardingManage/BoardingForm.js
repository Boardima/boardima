import { Box } from "@mui/system";
import AdminAppBar from "../stats/AdminAppbar";
import FormContent from "./FormContent";

function BoardingForm(){
    return(
        <div>
            <AdminAppBar value={2}/>
            <Box sx={{ m: 10 }}
                display="flex"
                alignItems="center"
                justifyContent="center">
                <FormContent />
            </Box>
        </div>
    );
}

export default BoardingForm;