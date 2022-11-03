import { Box } from "@mui/system";
import UserAppbar from "../stats/UserAppbar";
import FeedbackForm from "./FeedbackForm";

function UserFeedback() {
    return (
        <div>

            <div className="userhome"></div>
            <UserAppbar value={2} />
            <Box sx={{ m: 10 }}
                display="flex"
                alignItems="center"
                justifyContent="center">
                <FeedbackForm />
            </Box>

        </div>

    );

}

export default UserFeedback;