import Header from "./components/custom/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-white p-4 sm:p-6">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
