import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { name: "Sign Up", id: 0, active: 1 },
  // { name: "Sign In", id: 1, active: 2 },
  { name: "Get Started", id: 1, active: 1 },
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const changeButton = (id) => {
    if (id == 0) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  const changeHome = () => {
    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PERFECT PLACE
      </Typography>
      <Divider />
      <List>
        {navItems.map((obj) => (
          <ListItem key={obj.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => changeButton(obj.id)}
            >
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "#000000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              pl: "30px",
              fontSize: "18pt",
              fontWeight: "bold",
            }}
          >
            <Button
              onClick={() => changeHome()}
              sx={{
                color: "#ffffff",
                fontSize: "16pt",
                letterSpacing: ".3rem",
              }}
            >
               PERFECT PLACE
            </Button>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((obj) => (
              <Button
                className="btn"
                key={obj.name}
                sx={{
                  color: props.value == obj.active ? "#F0D90D" : "#000",
                  background: props.value == obj.active ? "#000" : "#F0D90D",
                  ml: "10px",
                  pl: "20px",
                  pr: "20px",
                  "&:hover": {
                    color: "#F0D90D",
                  },
                }}
                onClick={() => changeButton(obj.id)}
              >
                {obj.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
