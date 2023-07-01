import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { Login } from "../pages/Login";
import { Chavdar } from "../pages/Chavdar";
import { NotFound } from "../pages/NotFound";
import { Dontcia } from "../pages/Dontcia";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/chavdar" component={<Login />} />
            }
          />

          <Route
            path="chavdar"
            element={
              <PrivateRoute redirectTo="/login" component={<Chavdar />} />
            }
          />

          <Route
            path="dontcia"
            element={
              <PrivateRoute redirectTo="/login" component={<Dontcia />} />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
