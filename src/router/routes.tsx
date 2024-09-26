import Exam from "../Pages/Exam/Exam.tsx";
import Practice from "../Pages/Practice/";
import Roadmap from "../Pages/RoadMap";
import Setting from "../Pages/Setting";
import Upgrade from "../Pages/Upgrade";
import { IRouterConfig } from "../type/common.ts";

const routes: IRouterConfig[] = [
  {
    name: "practice",
    key: "practice",
    route: "practice",
    component: <Practice />,
  },
  {
    name: "exam",
    key: "exam",
    route: "exam",
    component: <Exam />,
  },
  {
    name: "roadmap",
    key: "roadmap",
    route: "roadmap",
    component: <Roadmap />,
  },
  {
    name: "setting",
    key: "setting",
    route: "setting",
    component: <Setting />,
  },
  {
    name: "upgrade",
    key: "upgrade",
    route: "upgrade",
    component: <Upgrade />,
  },
];
export default routes;
