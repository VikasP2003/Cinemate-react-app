
import { useEffect, useState } from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [theme, setTheme] = useState("light");

  // Read theme once on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Sync theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header theme={theme} setTheme={setTheme} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;