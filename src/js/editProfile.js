const profileName = document.getElementById('profileName');
const profileTagline = document.getElementById('profileTagline');
const profileLocation = document.getElementById('location');
const profileLanguage = document.getElementById('language');
const profileBio = document.getElementById('profileBio');

profileName.value = localStorage.getItem('profileName');
profileTagline.value = localStorage.getItem('profileTagline');
profileLocation.value = localStorage.getItem('profileLocation');
profileLanguage.value = localStorage.getItem('profileLanguage') ;
profileBio.value = localStorage.getItem('profileBio');

saveBtn.addEventListener("click",()=>{
    //To-do: Pop up to make sure if you wanna
    localStorage.setItem('profileName', profileName.value);
    localStorage.setItem('profileTagline', profileTagline.value);
    localStorage.setItem('profileLocation', profileLocation.value);
    localStorage.setItem('profileLanguage', profileLanguage.value);
    localStorage.setItem('profileBio', profileBio.value);
    
    localStorage.setItem('change', "1");

    location.replace('../pages/profile.html');
});

cancelBtn.addEventListener("click",()=>{
    location.replace('../pages/profile.html');
})
