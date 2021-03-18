console.log('DOM Interaction');

const article = document.createElement('div');
article.setAttribute('id', 'main-page-article');

document.body.appendChild(article);
article.style.height = '400px';
article.style.width = '400px';
article.style.backgroundColor = 'pink';

article.innerText = 'HALLO DARI JAVASCRIPT';

article.addEventListener('click', function () {
  article.style.backgroundColor = 'yellow';
});