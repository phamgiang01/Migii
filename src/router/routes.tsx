import Dashboard from "src/components/Dashboard.tsx";
import Exam from "../Pages/Exam/Exam.tsx";
import Practice from "../Pages/Practice/Practice.tsx";
import Roadmap from "../Pages/RoadMap/Index.tsx";
import Setting from "../Pages/Setting/Index.tsx";
import Upgrade from "../Pages/Upgrade/Index.tsx";
import { IRouterConfig } from "../type/common.ts";

const routes: IRouterConfig[] = [
  {
    name: "dashboard",
    key: "dashboard",
    route: "/",
    component: <Dashboard />,
  },
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
