import './App.scss'
import Header from "./components/Header"
import PostHeader from './components/PostHeader'
import ReplyForm from './components/ReplyForm'
import ReplyList from './components/ReplyList'
import ReplyListItem from './components/ReplyListItem'

import { t1 } from '../../data/topics'
import { usersObj } from '../../data/users'

//  reply contains {userId:1, content:""}
const singularReply = t1.replies[2];
const allTheReplies = t1.replies


function App() {
  const fakeOnSubmit = reply => console.log(reply);
  // const replyListItemInfo = generateReplyListItemInfo(singularReply, usersObj)
   
  // return (
  //   <>
  //     <Header />
  //     <main>
  //       <PostHeader />
  //       <ReplyList />
  //       <ReplyForm />
  //     </main>
       
  //   </>
  // );

  return <ReplyForm onSubmit={fakeOnSubmit} />;

  // return <ReplyList replies={allTheReplies} users={usersObj} />;
  // return <ReplyListItem { ...replyListItemInfo } />;
}

export default App
 