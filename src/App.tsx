import { Navigate, Route, Routes } from "react-router-dom";
import { IRouterConfig } from "src/type/common";
import "./App.css";
import Sidebar from "./components/Sidebar";
import routes from "./router/routes";
function App() {
  const getRoutes = (allRoutes: IRouterConfig[]) =>
    allRoutes.map((route: IRouterConfig) => {
      if (route.route) {
        return (
          <Route path={route.route} element={route.component} key={route.key} />
        );
      }
      return null;
    });
  return (
    <>
      <Sidebar />
      <div id="container" className="bg-slate-50 px-5">
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/practice" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
