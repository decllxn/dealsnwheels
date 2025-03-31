import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";


// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const CarDetailPage = lazy(() => import("./pages/CarDetailPage"));
const CommunitiesPage = lazy(() => import("./pages/CommunitiesPage"));
const Dashboard = lazy(() => import("./pages/SellersDashBoard"));
const Blog = lazy(() => import("./pages/BlogHome"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const SellACar = lazy(() => import("./pages/SellACar"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-20 text-lg">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-detail/:id" element={<CarDetailPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/sell-a-car" element={<SellACar />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;