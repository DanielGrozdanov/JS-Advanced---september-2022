function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value.trim();

    let tableInfo = document.querySelectorAll('td')

    let found = false;
    for(let cell of tableInfo){
        if(cell.textContent === email){
            cell.parentElement.remove();
            found = true;
        }
    }

    let result = document.getElementById('result')

    result.textContent = found ? "Deleted" : "Not found.";

}