import { Link } from "react-router-dom";

//Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              marginRight: "40px",
            }}
          >
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Videos
            </Typography>
          </Link>
          <Link
            to="/new-video"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Create a New Video
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

