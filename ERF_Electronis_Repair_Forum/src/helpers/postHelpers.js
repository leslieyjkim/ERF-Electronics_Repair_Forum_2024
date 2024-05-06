export const generateReplyListItemInfo = (reply, users) => {   //This gonna take reply, users
    const output = {};    //this function will create 'output' object, 
    const user = users[reply.userId]; 
                 
    output.content = reply.content;     //And then in there, output's content will be reply's content
    output.profileUrl = user.profile_url; //And the output's profileUrl that's gonna be users at the position of the reply.userId, and I'm gonna use their profile_url (from users.js in data)
    output.author = user.username;
  
    return output;
  }

  export const generatePostHeaderInfo = (topic, users) => {   
    const output = {};    
    const user = users[topic.userId]; 
                 
    output.question = topic.question;    
    output.profileUrl = user.profile_url; 
    output.author = user.username;
    output.replyAmount = topic.replies.length;
  
    return output;
  }