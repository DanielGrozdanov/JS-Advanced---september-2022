function getArticleGenerator(articles) {
    let div = document.getElementById('content');

    return function showNext() {
        if(articles.length){
            let element = articles.shift();
            let articleDiv = document.createElement('article');
            articleDiv.textContent = element;
            div.appendChild(articleDiv);
        }    
    };
}

