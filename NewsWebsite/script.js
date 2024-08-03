const API_KEY ="138c765f046c477a88b9c01af2850a53"
const API_URL = "https://newsapi.org/v2/everything?q="

window.addEventListener('load',()=>fetchNews("India"));

async function fetchNews(query) {
    const response = await fetch(`${API_URL}${API_KEY}$apikey=${API_KEY}`);
const data = await response.json()
console.log(data);
}
    