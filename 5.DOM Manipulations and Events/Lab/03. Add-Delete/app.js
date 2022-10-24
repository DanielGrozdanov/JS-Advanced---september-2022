function addItem() {
    let ul = document.getElementById("items")

    let input = document.getElementById('newItemText').value

    let value = input;

    let li = document.createElement('li');
    li.textContent = value + '';

    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = "#"
    console.log(deleteBtn);


    deleteBtn.addEventListener('click', function(event){
        event.target.parentElement.remove();
    })

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = '';
}