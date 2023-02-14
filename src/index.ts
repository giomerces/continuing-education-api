import express from "express";
import cors from "cors";
import user from "./users/user.routes";
import video from "./videos/video.routes";
import area from "./areas/area.routes";
import course from "./courses/course.routes";

const PORT = process.env.PORT || 8080;

const app = express();

// routes;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", user);
app.use("/video", video);
app.use("/area", area);
app.use("/course", course);

app.listen(PORT, () => {
  console.log("server running");
});
