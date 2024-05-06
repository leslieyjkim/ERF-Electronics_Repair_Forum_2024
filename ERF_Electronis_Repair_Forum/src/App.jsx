import './App.scss'
import Header from "./components/Header"
import PostHeader from './components/PostHeader'
import ReplyForm from './components/ReplyForm'
import ReplyList from './components/ReplyList'
import ReplyListItem from './components/ReplyListItem'

import { topicsObj } from '../../data/topics'
import { usersObj } from '../../data/users'
import { generatePostHeaderInfo } from './helpers/postHelpers'
import { useState} from "react";


function App() {
  const [users, setUsers] = useState(usersObj);
  const [topics, setTopics] = useState(topicsObj);
  const [currentTopicId, setCurrentTopicId] = useState(1); //In topics.js data, const topicsObj = { 1: t1, 2: t2, 3: t3 }; the key starts with 1.


  //Navigating code is important JS question.
  //"How do you go over the elements of an array,
  //infinitely to the right & infinitely to the left without crashing?"
  const navigateTopic = (isNext) => {   //Boolean
    const availableIds = Object.keys(topics);
    //[1, 2, 3];
    const nextValueIndex =
     (availableIds.indexOf(currentTopicId) + 1) % availableIds.length;
    
    const prevValueIndex = 
      availableIds.indexOf(currentTopicId) - 1 === -1
        ? availableIds.length - 1
        : availableIds.indexOf(currentTopicId) - 1;

    if (isNext) {
      setCurrentTopicId(availableIds[nextValueIndex]);
    } else {
      setCurrentTopicId(availableIds[prevValueIndex]);
    }
  };




  const topic = topics[currentTopicId];

  const postHeaderInfo = generatePostHeaderInfo(topic, users);
  // const replyListItemInfo = generateReplyListItemInfo(singularReply, usersObj)


  const addReplyToTopic = (reply) => {

    const updatedTopics = { ...topics };
    const updatedTopic = { ...topic };

    const replyObj = {
      content: reply,
      userId: Math.ceil(Math.random() * 39), //I have 39 profile_images
    };

    updatedTopic.replies = [ ...topic.replies, replyObj];

    updatedTopics[currentTopicId] = updatedTopic;

    setTopics(updatedTopics);
  }


  const addReplyToTopicId = (reply) => {
    const updatedTopic = { ...topic };

    const replyObj = {
      content: reply,
      userId: Math.ceil(Math.random() * 39),
    };

    updatedTopic.replies = [...topic.replies, replyObj];

    setTopic(updatedTopic);
  };

  return (
    <>
      <Header />
      <main>
        <section className="Navigator">
          <button onClick={() => navigateTopic(false)}>Back</button>
          <span>Currently looking at topic #{currentTopicId}</span>
          <button onClick={() => navigateTopic(true)}>Next</button>
        </section>
        <PostHeader { ...postHeaderInfo}/>
        <ReplyList replies={topic.replies} users={users}/>
        <ReplyForm onSubmit={addReplyToTopic}/>
      </main>
       
    </>
  );

  // return <Header />; 
  // return <PostHeader { ...postHeaderInfo} />;
  // return <ReplyForm onSubmit={fakeOnSubmit} />;
  // return <ReplyList replies={allTheReplies} users={usersObj} />;
  // return <ReplyListItem { ...replyListItemInfo } />;
}

export default App
 