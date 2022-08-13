import { useState, useEffect } from "react";

const useWindowsSize = () => {
 const [ windowsSize, setWindowsSize] = useState({
  width: undefined,
  heigh: undefined
 })

 useEffect(() => {
  const handleResize = () => {
   setWindowsSize({
    width: window.innerWidth,
    heigh: window.innerWidth
   })
  }

  handleResize()
  window.addEventListener("resize", handleResize)

  const cleanUp = () => {
   
   window.removeEventListener("resize", handleResize)
  }
  return cleanUp
 }, [])
 return windowsSize
}
export default useWindowsSize