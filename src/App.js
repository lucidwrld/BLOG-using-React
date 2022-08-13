import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import EditPost from './EditPost'
import { Route, Routes } from 'react-router-dom'
import {DataProvider} from './context/DataContext'
function App() {
  

  return (
    <div className="App">
      <Header title="React JS BLOG" />
      
      <DataProvider>
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home/>}>
        </Route>

        <Route exact path='/posts' element={<NewPost />} ></Route>

        <Route path='/edit/:id' element={<EditPost />} ></Route>

        <Route path='/posts/:id' element={<PostPage />}></Route>

        <Route path='/about' element={<About />} ></Route>
        <Route path='/missing' element={<Missing />} ></Route>
      </Routes>
      <Footer />
      </DataProvider>
      

    </div>
  );
}

export default App;
