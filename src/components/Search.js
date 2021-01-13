import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);


  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);



  useEffect(() => {
    const getSearch = async () => {
      try {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            srsearch: debouncedTerm,
            origin: "*",
            format: "json",
          },
        });

        setResults(data.query.search);
      } catch (err) {
        console.error(err.message);
      }
    };

    getSearch();

    return () => {};
  }, [debouncedTerm]);

 

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="celled ui list">{renderedResults}</div>
    </div>
  );
};

export default Search;
