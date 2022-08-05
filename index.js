function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex]);
    }

    fetchData();
  }, []);

  const newQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuotes(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="jumbotron" style={{ margin: 50, width: 500 }}>
          <div className="card" id="quote-box">
            <div className="card-header">Quote Everyday</div>
            <div className="card-body">
              {randomQuotes ? (
                <blockquote className="blockquote mb-0">
                  <p id="text">{randomQuotes.text}</p>
                  <footer className="blockquote-footer" id="author">
                    {randomQuotes.author || "No author"}
                  </footer>
                </blockquote>
              ) : (
                <h2>Loading</h2>
              )}
              <div className="row">
                <div className="col">
                  <a
                    href="https://twitter.com/intent/tweet"
                    target="blank"
                    className="btn btn-danger ml-3 mr-3"
                    id="tweet-quote"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-warning">
                    <i className="fab fa-tumblr"></i>
                  </a>
                  <button
                    onClick={newQuote}
                    className="btn btn-primary float-right"
                    id="new-quote"
                  >
                    New Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
