const profileName = document.getElementById('profileName');
const profileTagline = document.getElementById('profileTagline');
const profileLocation = document.getElementById('location');
const profileLanguage = document.getElementById('language');
const profileBio = document.getElementById('profileBio');

profileName.value = localStorage.getItem('profileName');
profileTagline.value = localStorage.getItem('profileTagline');
profileLocation.value = localStorage.getItem('profilelocation');
profileLanguage.value = localStorage.getItem('profileLanguage') ;
profileBio.value = localStorage.getItem('profileBio');


