function lockedProfile() {
    let buttons = document.querySelectorAll("button");
    
    
    for(let button of buttons){
        button.addEventListener('click', show)
    }


    function show(event){
        let currentButton = event.target;
        let currentProfile = currentButton.parentNode;
        let currentProfileInfo = currentProfile.querySelectorAll("div")[0];
        let currectLock = currentProfile.querySelector(`input[type="radio"]:checked`).value;

        if(currectLock === "unlock"){
            if(currentButton.textContent === "Show more"){
                currentProfileInfo.style.display = "block";
                currentButton.textContent = "Hide it";
            }else if(currentButton.textContent === "Hide it"){  
                currentProfileInfo.style.display = "none";
                currentButton.textContent = "Show more";
            }
        }
    }
}