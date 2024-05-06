import './App.scss'

function App() {

  return (
    <>
      <header className="Header">
        <h1>Super Electronics Forum of Destiny!</h1>
      </header>
      <main>
        <section className="PostHeader">
          <h1>QUESTION</h1>
          <h2>By: Author IMG - AUTHOR NAME</h2>
          <p>X replies so far</p>
        </section>
        <section className="ReplyList">
          <article className="ReplyListItem">
            <img src="" alt="" />
            <h1>AUTHOR</h1>
            <p>REPLY TO THE QUESTION AT THE TOP</p>
          </article>
        </section>
        <form className="ReplyForm">
          <input type="text" placeholder="Enter the reply" />
          <button>Add the reply</button>
        </form>
      </main>
      
    </>
  )
}

export default App
 