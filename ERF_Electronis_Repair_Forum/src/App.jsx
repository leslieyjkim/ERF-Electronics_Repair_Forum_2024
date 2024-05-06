import './App.scss'
import Header from "./components/Header"
import PostHeader from './components/PostHeader'
import ReplyForm from './components/ReplyForm'
import ReplyList from './components/ReplyList'
import ReplyListItem from './components/ReplyListItem'

import { t1 } from '../../data/topics'
import { usersObj } from '../../data/users'

//  {userId:1, content:""}
const singularReply = t1.replies[0]

const generateReplyListItemInfo = (reply, users) => {   //This gonna take reply, users
  const output = {}                  //this function will create 'output' object, 
  output.content = reply.content     //And then in there, output's content will be reply's content
  output.profileUrl = users[reply.userId].profile_url //And the output's profileUrl that's gonna be users at the position of the reply.userId, and I'm gonna use their profile_url (from users.js in data)
}


function App() {

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

  return <ReplyListItem />;
}

export default App
 