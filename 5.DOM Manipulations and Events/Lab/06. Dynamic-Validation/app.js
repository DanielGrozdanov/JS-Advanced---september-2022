function validate() {
        let input = document.getElementById('email');
        input.addEventListener("change", changed)
        

        function changed(){
            let email = document.getElementById('email').value;
            let emailValidator = /[a-z]+@[a-z]+.[a-z]+/;

            if(!email.match(emailValidator)){
                input.className = "error";
            }else{
                input.className = "";
            }
        }
}