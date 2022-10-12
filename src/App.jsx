import Header from "./components/header/Header";
import HeroStart from "./components/hero/HeroStart";

function App() {
  return (
    <div className="App bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors ease-in min-h-screen ">
      <Header />
      <HeroStart />
    </div>
  );
}

export default App;
