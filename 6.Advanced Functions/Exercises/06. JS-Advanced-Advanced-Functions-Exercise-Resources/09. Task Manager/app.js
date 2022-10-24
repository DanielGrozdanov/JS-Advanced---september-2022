function solve() {
    document.getElementById("add").addEventListener("click", onClick);

    function onClick() {
        let task = document.getElementById("task");
        let description = document.getElementById("description");
        let date = document.getElementById("date");

        if(task.value == "" || description.value == "" || date.value == ""){
            return;
        }

        let openTab = document.querySelectorAll("section")[1].children[1];
        let article = document.createElement('article');
        

    }

    debugger
}