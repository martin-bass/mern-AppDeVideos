import app from "./app";
import "./database";

const port = app.get("port");

app.listen(port, () => {
  console.log("listen on port", port);
});
