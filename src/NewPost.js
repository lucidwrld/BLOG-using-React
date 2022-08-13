import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import DataContext from "./context/DataContext"
import api from './api/posts'
import { useState, useContext } from 'react'
const NewPost = () => {
const history = useNavigate()
const [postBody, setPostBody] = useState('')
const [postTitle, setPostTitle] = useState('')
const {posts, setPosts} = useContext(DataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy PP');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try{
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
    
    history('/');
    }catch (err){
      console.log(`Error: ${err.message}`)
    }
    }
  
  return (
    <main className="NewPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTile">Title</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost