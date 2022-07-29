import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MedicationIcon from '@mui/icons-material/Medication';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logoutSuccess } from "../Redux/Auth/Action";

export default function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => {
        toggleDrawer(false);
      }}
      onKeyDown={() => {
        toggleDrawer(false);
      }}
    >
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
     <Divider/>
      <List>
        {token ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary={"Log out"} />
            </ListItemButton>
          </ListItem>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </Link>
        )}
      </List>
    
      <List>
        <Link to="/grocery" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalGroceryStoreIcon style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary={"Grocery"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List >
        <Link to="/pharmacy" style={{ textDecoration: "none", color: "black" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MedicationIcon style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary={"Pharmcy"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Drawer
          anchor={"left"}
          open={state}
          onClose={() => {
            toggleDrawer(false);
          }}
        >
          {list()}
        </Drawer>
        <Toolbar>
          <IconButton
            onClick={() => {
              toggleDrawer(true);
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            General Store
          </Typography>

          {token ? (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
