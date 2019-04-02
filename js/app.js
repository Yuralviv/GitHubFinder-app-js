//init gitHub
const github = new GitHub();

//init Ui
const ui = new UI();

//init search input
const  searchInput = document.getElementById('searchUser');

//add event listener
searchInput.addEventListener('keyup',  (e) => {

    //get input text
    const userText = e.target.value;

        if(userText !== ' ') {
            //make http request
            github.getUser(userText)
                .then(user => {
                    if (user.message === 'Not Found'){
                        //show alert
                        ui.showAlert(`User: ${userText} not Found`, 'alert alert-danger');
                    }else{
                        //show profile
                        ui.showProfile(user);
                        ui.clearAlert();
                    }
                    return user;
                })
        }else {
            //clear profile
            ui.clearProfile();
        }
});