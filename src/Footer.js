import {  useContext } from "react"

import DataContext from "./context/DataContext"
const Footer = () => {
  const {posts} = useContext(DataContext)
  return (
    <footer className="Footer">
      <p>There are {posts.length} posts</p>
    </footer>
  )
}

export default Footer