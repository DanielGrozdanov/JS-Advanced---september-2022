window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener('click', createPost)
  document.getElementById("clear-btn").addEventListener("click", clearPost)


  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content")
  let reviewSection = document.getElementById("review-list");
  let approveSection = document.getElementById("published-list");

  function createPost() {
    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    createDOMElements(titleValue, categoryValue, contentValue);
    clearInputFields();
  }

  function clearInputFields() {
    title.value = "";
    category.value = "";
    content.value  = "";
  }

  function createDOMElements(titleValue, categoryValue, contentValue) {
    let li = document.createElement("li");
    li.classList.add("rpost");

    let article = createArticle(titleValue, categoryValue, contentValue)

    let editButton = document.createElement("button");
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editPost)

    let approvedButton = document.createElement("button");
    approvedButton.classList.add("action-btn");
    approvedButton.classList.add("approve");
    approvedButton.textContent = "Approve";
    approvedButton.addEventListener('click', approvePost)


    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approvedButton);
    reviewSection.appendChild(li);

  }

  function createArticle(titleValue, categoryValue, contentValue) {
    let article = document.createElement('article');

    let h = document.createElement('h4');
    h.textContent = titleValue;

    let categoryPara = document.createElement("p");
    categoryPara.textContent = `Category: ${categoryValue}`

    let contentPara = document.createElement("p");
    contentPara.textContent = `Content: ${contentValue}`;

    article.appendChild(h);
    article.appendChild(categoryPara);
    article.appendChild(contentPara);

    return article;
  }

  function editPost(e) {
    let currentPost = e.target.parentElement;
    let article = currentPost.getElementsByTagName("article")[0].children;

    let titleValue = article[0].textContent;
    let categoryValue = article[1].textContent;
    let contentValue = article[2].textContent;

    title.value = titleValue;
    category.value = categoryValue.split(": ")[1];
    content.value = contentValue.split(": ")[1];
    currentPost.remove();
  }

  function approvePost(e) {
    let currentPost = e.target.parentElement;
    approveSection.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll("button")).forEach(btn => btn.remove())
  }

  function clearPost(e) {
    Array.from(approveSection.children).forEach(li => li.remove());
  }
}