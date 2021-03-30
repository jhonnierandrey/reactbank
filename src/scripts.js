// Available scripts

const show = {
    login : (e) => {
        e.preventDefault();

        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".login-form").style.display = 'flex';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".about").style.display = 'none';
    },
    apply : (e) => {
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'flex';
        document.querySelector(".about").style.display = 'none';
    },
    about : (e) => {
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".about").style.display = 'flex';
    },
    modal : (e) =>{
        e.preventDefault();

        document.querySelector(".modal-container").style.display = 'flex';
        // document.querySelector(".login-form").style.display = 'none';
    },
    dashboard : (e) => {
        if(e) e.preventDefault();
  
        document.querySelector(".modal-container").style.display = 'none';
        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".about").style.display = 'none';
        document.querySelector(".dashboard-container").style.display = 'initial';
    }
}


export default show;