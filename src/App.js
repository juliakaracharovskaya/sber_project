import "./App.css";
import Footer from "./components/Footer/Foter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TodoListProvider from "./contexts/TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <div className="container py-5">
        <Header />
        <hr />
        <Main />
        <Footer />
      </div>
    </TodoListProvider>
  );
}

export default App;
