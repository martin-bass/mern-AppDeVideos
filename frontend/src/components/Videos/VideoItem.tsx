import { Video } from "./Video";
import { useNavigate } from "react-router-dom";
import * as videoServer from "./VideoServer";

//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//React Player
import ReactPlayer from "react-player";

interface Props {
  vid: Video;
  loadVideos: () => void;
}

function VideoItem({ vid, loadVideos }: Props) {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoServer.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="VideoItem">
      <Card sx={{ maxWidth: 345, height: 520 }}>
        <CardContent>
          <ReactPlayer url={vid.url} width={"100%"} />
          <Typography gutterBottom variant="h5" component="div">
            {vid.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40}}>
            {vid.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => navigate(`/update/${vid._id}`)}>
            Updated
          </Button>
          <Button
            size="medium"
            style={{ marginLeft: "170px" }}
            onClick={() => vid._id && handleDelete(vid._id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default VideoItem;
