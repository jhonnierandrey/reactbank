// Available scripts

const show = {
    login : (e) => {
        if(e){
            e.preventDefault();
        }

        // deletes previous error messages
        document.querySelector('.form-errors').innerHTML = '';

        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".login-form").style.display = 'flex';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".about").style.display = 'none';
    },
    apply : (e) => {
        if(e){
            e.preventDefault();
        }

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'flex';
        document.querySelector(".about").style.display = 'none';
    },
    about : (e) => {
        if(e){
            e.preventDefault();
        }

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".about").style.display = 'flex';
    },
    modal : (e) =>{
        if(e){
            e.preventDefault();
        }

        document.querySelector(".modal-container").style.display = 'flex';
        // document.querySelector(".login-form").style.display = 'none';
    }
}


export default show;