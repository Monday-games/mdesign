import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OperatorDashboard from "./pages/OperatorDashboard";
import OperatorstartInnings from "./pages/OperatorstartInnings";
import OperatormarketOn from "./pages/OperatormarketOn";
import OperatorballRunning from "./pages/OperatorballRunning";
import OperatorGiveResultSubmit from "./pages/OperatorGiveResultSubmit";
import OperatorGiveResultConfirm from "./pages/OperatorGiveResultConfirm";
import Operatorend1stInning from "./pages/Operatorend1stInning";
import Operatorstart2ndInning from "./pages/Operatorstart2ndInning";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/operatorstart-innings":
        title = "";
        metaDescription = "";
        break;
      case "/operatormarket-on":
        title = "";
        metaDescription = "";
        break;
      case "/operatorball-running":
        title = "";
        metaDescription = "";
        break;
      case "/operatorgive-result-submit":
        title = "";
        metaDescription = "";
        break;
      case "/operatorgive-result-confirm":
        title = "";
        metaDescription = "";
        break;
      case "/operatorend-1st-inning":
        title = "";
        metaDescription = "";
        break;
      case "/operatorstart-2nd-inning":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OperatorDashboard />} />
      <Route path="/operatorstart-innings" element={<OperatorstartInnings />} />
      <Route path="/operatormarket-on" element={<OperatormarketOn />} />
      <Route path="/operatorball-running" element={<OperatorballRunning />} />
      <Route
        path="/operatorgive-result-submit"
        element={<OperatorGiveResultSubmit />}
      />
      <Route
        path="/operatorgive-result-confirm"
        element={<OperatorGiveResultConfirm />}
      />
      <Route
        path="/operatorend-1st-inning"
        element={<Operatorend1stInning />}
      />
      <Route
        path="/operatorstart-2nd-inning"
        element={<Operatorstart2ndInning />}
      />
    </Routes>
  );
}
export default App;
