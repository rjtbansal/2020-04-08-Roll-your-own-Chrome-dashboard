
/**
 * Useful api:
 * top headlines
 * https://newsapi.org/v2/top-headlines?country=ca&apiKey=<key>
 * - print total_results,
 * - loop through articles and print article.title, article.description, article.urlToImage, article.publishedAt, article.url(to be opened in new tab)
 */
import news_api_key from './news_api_key.js';

const api_key = news_api_key.api_key;
const getNewsHeadlines = () => {

  axios.get(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=${api_key}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
}

getNewsHeadlines();

