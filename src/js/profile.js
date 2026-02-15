const profileName = document.getElementById('profileName');
const profileTagline = document.getElementById('profileTagline');
const profileLocation = document.getElementById('location');
const profileLanguage = document.getElementById('language');
const profileBio = document.getElementById('profileBio');

editBtn.addEventListener("click", ()=>{
    
    
    localStorage.setItem('profileName', profileName.textContent);
    localStorage.setItem('profileTagline', profileTagline.textContent);
    localStorage.setItem('profileLocation', profileLocation.textContent);
    localStorage.setItem('profileLanguage', profileLanguage.textContent);
    localStorage.setItem('profileBio', profileBio.textContent);
    
    location.replace('../pages/editProfile.html');
});

if(localStorage.getItem('change') === "1"){
    profileName.textContent = localStorage.getItem('profileName');
    profileTagline.textContent = localStorage.getItem('profileTagline');
    profileLocation.textContent = localStorage.getItem('profileLocation');
    profileLanguage.textContent = localStorage.getItem('profileLanguage') ;
    profileBio.textContent = localStorage.getItem('profileBio');

    //Get rid off if you want changes to be permanent
    localStorage.setItem('change', "0");
}