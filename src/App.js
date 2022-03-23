import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TodoListProvider from "./contexts/TodoListContext";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import PageNotFound from "./components/404/404";
import DetailPage from "./components/Main/DetailPage/DetailPage";


function App() {
  return (
    <TodoListProvider>
      <div className="container py-5">
      <BrowserRouter>
        <Header />
             <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/about" element={<About />} />
               <Route path="/info" element={<Contacts />} />
               <Route path ="/:id" element={<DetailPage />} />
               <Route path="*" element={<PageNotFound />} />
             </Routes>
     
      </BrowserRouter>
        
      </div>
    </TodoListProvider>

  )
}

export default App;



