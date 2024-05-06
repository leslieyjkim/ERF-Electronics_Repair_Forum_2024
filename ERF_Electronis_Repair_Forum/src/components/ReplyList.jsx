import ReplyListItem from "./ReplyListItem";
import { generateReplyListItemInfo } from "../helpers/postHelpers";

export default function ReplyList(props) {

    const {replies, users} = props;

    const parsedReplies = 
        Array.isArray(replies) && 
        replies.map((reply, index) => {
            const replyListItemInfo = generateReplyListItemInfo(reply, users); 
            return <ReplyListItem { ...replyListItemInfo } key={index} />
    });
    
    
    return (
        <section className="ReplyList">{parsedReplies}</section>
    );
}


//Parsing?
//Imagine you have a form with bunch of fields that you need to fill-out information,
//And a person provides you all of the informations written on a napkin,
//The act of taking the info, and parsing it properly inside all of the proper fields.
//This is what parsing is. 
//Taking unorganized raw data, and shaping it in a way that we want. 