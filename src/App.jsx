import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import NotFound from "./components/pages/NotFound";
import DashBoard from "./components/pages/Dashboard";
import Pages from "./components/pages/Pages";
import Authentication from "./components/pages/Authentication";
import Layouts from "./components/pages/Layouts";
import Link from "./components/pages/Link";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/notfound"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <DashBoard />
            </Layout>
          }
        />

        <Route
          path="/pages"
          element={
            <Layout>
              <Pages />
            </Layout>
          }
        />

        <Route
          path="/authentication"
          element={
            <Layout>
              <Authentication />
            </Layout>
          }
        />

        <Route path="/Layouts" element = {
          <Layout>
            <Layouts/>
          </Layout>
        }
        />

        <Route path="/link" element={

          <Layout>
            <Link/>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
