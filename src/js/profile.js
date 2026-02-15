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