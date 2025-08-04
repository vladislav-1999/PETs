// backend/server.js

const express = require("express");
const cors = require("cors");
const Parser = require("rss-parser");

const app = express();
const parser = new Parser();

// Разрешаем запросы с фронтенда (React)
app.use(cors());

// Маршрут для получения RSS
app.get("/api/rss", async (req, res) => {
  try {
    // Можно передавать URL через query: /api/rss?url=https://hbr.org/feed
    const feedUrl = req.query.url || "https://www.fl.ru/rss/all.xml?category=2";

    const feed = await parser.parseURL(feedUrl);
    res.json(feed.items); // Отправляем статьи как JSON
  } catch (error) {
    res.status(500).json({
      error: "Не удалось загрузить RSS-ленту",
      message: error.message,
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Бэкенд запущен на http://localhost:${PORT}`);
  console.log(`👉 Пример: http://localhost:3001/api/rss`);
});
