class UI {
    constructor(){
        //tags
        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer');
    }

    //show profile
    showProfile(user){
    }

    //show repos
    showRepos(repos){
    }

    //show alert
    showAlert(message = '', className = 'alert-info'){
        //clear any alert
        this.clearAlert();

        //create template
        const alert =  `<div class="${className}">${message}</div>`;
        this.search_container.insertAdjacentHTML('afterbegin', alert);

        //hide alert after 2s
        setTimeout( () => this.clearAlert(), 2000);
    }

    //clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }

}