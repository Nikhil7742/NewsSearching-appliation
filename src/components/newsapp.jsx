
import React, { useEffect, useState } from "react"
import Card from "./card"

function NewsApp() {
  const [search, setSearch] = useState("india")
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "f9d34b105e974c81a863371c218f8513"
  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const data = await response.json();
    setNewsData(data.articles)
  }
  useEffect(
    () => {
      getData();
    }, []
  )
  const inputValue = (e) => {
    setSearch(e.target.value)
  }
  const userInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div>
        <nav>
          <div>
            <h1>Trendy News</h1>
          </div>

          <div className="searchBar">
            <input type="text" name="search" id="" value={search} placeholder="Search News here..." onChange={inputValue} />
            <button onClick={getData}>Search</button>
          </div>
        </nav>


        <div>
          <p className="heading-line">
            Stay update with TrendyNews.
          </p>
        </div>

        <div className="categorybtn">
          <button onClick={userInput} value="Sports">Sports</button>
          <button onClick={userInput} value="Politics">Politics</button>
          <button onClick={userInput} value="India">India</button>
          <button onClick={userInput} value="Health">Health</button>
          <button onClick={userInput} value="Fitness">Fitness</button>
        </div>


        <div>
          {newsData ? <Card data={newsData} /> : null}

        </div>

      </div>

    </>
  )
}

export default NewsApp
