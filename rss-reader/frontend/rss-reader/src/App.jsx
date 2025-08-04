import { useState, useEffect } from "react";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const response = await fetch("http://localhost:3001/api/rss");

        if (!response.ok) throw new Error("Ошибка сети");

        const data = await response.json();

        setArticles(data);

        console.log(data);
      } catch (err) {
        setError("Не удалось загрузить ленту. Убедись, что бэкенд запущен.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRSS();
  }, []);

  return (
    <div>
      <h1>📰 Мой RSS-ридер</h1>
      <p>
        Источник: <em>HBR.org</em>
      </p>
      <hr />

      <div>
        {articles.map((item) => {
          return <NewPost item={item} key={item.title} />;
        })}
      </div>
    </div>
  );
}

function NewPost({ item }) {
  return (
    <>
      <li className="title">{item.title}</li>
      <a href={item.link}>{item.link}</a> <br />
      <span>{item.pubDate}</span>
      <p>{item.content}</p>
    </>
  );
}
