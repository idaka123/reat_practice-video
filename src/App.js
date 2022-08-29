import VideoPage from "./page/VideoPage/VideoHandle/VideoPage"
import ParagraphPage from "./page/ParagraphPage/ParagraphPage"
import { Routes, Route, Link } from 'react-router-dom'


function App () {
  return (
    <>
        <Link to="/VideoPage">Video</Link>
        <Link to="/ParagraphPage">Paragraph</Link>


      <Routes>
        <Route path="/VideoPage" element={<VideoPage />}></Route>
        <Route path="/ParagraphPage" element={<ParagraphPage />}></Route>
      </Routes>
    </>

  )
}

export default App