import './App.scss'
import Header from "./components/Header"
import PostHeader from './components/PostHeader'
import ReplyForm from './components/ReplyForm'
import ReplyList from './components/ReplyList'

function App() {

  return (
    <>
      <Header />
      <main>
        <PostHeader />
        <ReplyList />
        <ReplyForm />
      </main>
      
    </>
  )
}

export default App
 