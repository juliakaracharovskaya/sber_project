import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostListProvider from "./contexts/PostListContext";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Contacts from "./components/Contacts/Contacts";
import PageNotFound from "./components/404/404";
import DetailPage from "./components/Posts/DetailPage/DetailPage";
import News from "./components/News/News";


function App() {
  return (
    <PostListProvider>
       <div className='card d-flex align-items-center border-0 fs-3 mt-2 ' >Wellcome to travel project</div>
      <div className="container ">
      <BrowserRouter>
        <Header />
             <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/news" element={<News />} />
               <Route path="/info" element={<Contacts />} />
               <Route path ="/:id" element={<DetailPage />} />
               <Route path="*" element={<PageNotFound />} />
             </Routes>
     
      </BrowserRouter>
        
      </div>
    </PostListProvider>

  )
}

export default App;



