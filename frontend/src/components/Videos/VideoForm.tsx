import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Video } from "./Video";
import * as videoServer from "./VideoServer";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";

//Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//Custom CSS
import "./VideoForm.css";
import "react-toastify/dist/ReactToastify.css";

type InpuntChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function VideoForm() {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InpuntChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (video.url === "" || video.title === "" || video.description === "") {
      toast.error("The fields are empty!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      await videoServer.getVideos();
      navigate("/");
    }

    if (!params.id) {
      await videoServer.createVideo(video);
      toast.success("New video uploaded!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      await videoServer.updatedVideo(params.id, video);
    }

    navigate("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoServer.getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ background: "#E7EBF0" }}>
      <Card className="VideoForm_Card">
        <CardContent>
          <Box className="VideoForm_Box">
            {params.id ? (
              <Typography variant="h5" component="div" style={{ margin: 10 }}>
                Update Video
              </Typography>
            ) : (
              <Typography variant="h5" component="div" style={{ margin: 10 }}>
                New Video
              </Typography>
            )}
            <TextField
              placeholder={params.id ? video.title : ""}
              name="title"
              value={params.id && video.title}
              style={{ width: 400, margin: 10 }}
              helperText="Please enter your Title"
              id="demo-helper-text-aligned"
              label="Title"
              onChange={handleInputChange}
            />
            <TextField
              placeholder={params.id ? video.url : ""}
              name="url"
              value={params.id && video.url}
              style={{ width: 400, margin: 10 }}
              helperText="Please enter your Youtube link"
              id="demo-helper-text-aligned"
              label="Link to video"
              onChange={handleInputChange}
            />
            <TextareaAutosize
              placeholder={
                params.id ? video.description : "Write your description"
              }
              value={params.id && video.description}
              name="description"
              maxRows={4}
              aria-label="maximum height"
              style={{
                width: 400,
                height: 200,
                margin: 10,
                fontFamily: "arial",
                fontSize: 14,
              }}
              onChange={handleInputChange}
            />
            <CardActions>
              {params.id ? (
                <Button
                  variant="contained"
                  style={{ background: "purple" }}
                  type="submit"
                >
                  Update Video
                </Button>
              ) : (
                <Button variant="contained" color="success" type="submit">
                  Create Video
                </Button>
              )}
            </CardActions>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                className="btn-back"
                variant="contained"
                color="error"
                size="small"
              >
                Back
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
}

export default VideoForm;
