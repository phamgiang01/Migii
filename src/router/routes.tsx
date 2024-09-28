import Dashboard from "../components/Dashboard.tsx";
import Exam from "../Pages/Exam/Exam.tsx";
import Practice from "../Pages/Practice/Practice.tsx";
import Roadmap from "../Pages/RoadMap/Index.tsx";
import Setting from "../Pages/Setting/Index.tsx";
import Upgrade from "../Pages/Upgrade/Index.tsx";
import Question from "../Pages/Question";
import Test from "../Pages/Exam/Test.tsx";

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
    name: "test",
    key: "test",
    route: "exam/test/:id",
    component: <Test />,
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
  
  {
    name: "question",
    key: "question",
    route: "question",
    component: <Question />,
  },
];
export default routes;
