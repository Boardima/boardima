import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function UniCard(props) {
  const navigate = useNavigate();

  const changeToUniFilter = () => {
    navigate("/filterhome", {
      state: { uniName: props.uniName },
    });
  };

  return (
    <Box sx={{ width: 270, boderColor: "2px solid #FFFFFF" }}>
      <CardActionArea>
        {/* <CardMedia
                    component="img"
                    image={props.uniImage}
                    alt="green iguana"
                    sx={{ width: "250px", height: "150px", objectFit: "contain", pt:2 }}
                /> */}
        <CardContent
          sx={{
            color: "#FFFFFF",
            background: "#000000",
            mt: 2,
            height: "170px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#F0D90D", mt: 4 }}
          >
            {props.uniName}
          </Typography>
          {/* <Typography variant="body2" color="#FFFFFF">
            {props.uniAddress}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ m: 0, p: 0 }}>
        <Button
          size="small"
          color="primary"
          sx={{
            width: "100%",
            textAlign: "center",
            color: "#000000",
            backgroundColor: "#F0D90D",
          }}
          onClick={changeToUniFilter}
        >
          view
        </Button>
      </CardActions>
    </Box>
  );
}
