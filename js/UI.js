class UI {
    constructor(){
        //tags
        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer');
    }

    //show profile
    showProfile(user){
        this.profile.innerHTML = `
            <div class="'card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view profile</a>
                    </div>
                        <div class="col-md-9">
                            <div class="user-info-header mb-3">
                                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-secondary">Public Gits: ${user.public_gists}</span>
                                <span class="badge badge-success">Followers: ${user.followers}</span>
                                <span class="badge badge-info">Following: ${user.following}</span>
                            </div>
                                <ul class="list-group mb-3">
                                    <li class="list-group-item">Company: ${user.company ? user.company : 'N/A'}</li>
                                    <li class="list-group-item">Website/Blog: ${user.blog ? user.blog :'N/A'}</li>
                                    <li class="list-group-item">Location: ${user.location ? user.location : 'N/A'}</li>
                                     <li class="list-group-item">Member since: ${user.created_at ? user.created_at : 'N/A'}</li>
                                </ul>
                    </div>
                </div>   
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
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

    //clear Profile
    clearProfile(){
         this.profile.innerHTML = '';
    }

}