export default function PostHeader(props) {
    const { question, profileUrl, author, replyAmount } = props;
    return (
        <section className="PostHeader">
          <h1>{question}</h1>
          <h2>
            By: <img src={profileUrl} /> <span>{author}</span>
          </h2>
          {replyAmount === 0 && <p>no replies so far</p>}
          {replyAmount === 1 && <p>1 reply so far</p>}
          {replyAmount > 1 && <p>{replyAmount} replies so far</p>}
        </section>
    )
}