import Exam from "src/Pages/Exam/Exam";
import Practice from "src/Pages/Practice/Index";
import Roadmap from "src/Pages/RoadMap/Index";
import Setting from "src/Pages/Setting/Index";
import Upgrade from "src/Pages/Upgrade/Index";
import { IRouterConfig } from "src/type/common";

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
