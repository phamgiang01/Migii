import {Navigate, Route, Routes} from "react-router-dom";
import {IRouterConfig} from "./type/common.ts";
import Sidebar from "./components/Sidebar";
import routes from "./router/routes";

import './index.css'
import Banner from "./components/Banner.tsx";

function App() {
  const getRoutes = (allRoutes: IRouterConfig[]) =>
    allRoutes.map((route: IRouterConfig) => {
      if (route.route) {
        return (
          <Route path={route.route} element={route.component} key={route.key}/>
        );
      }
      return null;
    });
  return (
    <div className='flex flex-col h-[100vh]'>
      <Sidebar/>
      <div id="container" className="mt-2 bg-blue-50 px-5 py-1 w-[1280px] max-w-[98%] mx-auto flex-1 rounded-[8px] pb-[80px]">
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/practice" replace/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
