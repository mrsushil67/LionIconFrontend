// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FreshPolicy from "./pages/FreshPolicy";
import Layout from "./components/Layout";
import RenewalPolicy from "./pages/RenewalPolicy";
import NewPolicyForm from "./pages/NewPolicyForm";
import Login from "./pages/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/fresh-policy" element={<FreshPolicy />} />
        <Route path="/renewal-policy" element={<RenewalPolicy />} />
        <Route path='/policy-form' element={<NewPolicyForm />} />
      </Route>
    </Routes>
  );
};

export default App;
