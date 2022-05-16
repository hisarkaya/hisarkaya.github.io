function toggleMenu() {
    var menu = document.getElementById('mainMenu');
    if (menu.className === 'main-menu') {
        menu.className += ' toggle';
    } else {
        menu.className = 'main-menu'
    }
} 

function initMap() {
    var coordinate = { lat: 51.525471, lng: -0.083649 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordinate
    });
    var marker = new google.maps.Marker({
        position: coordinate,
        map: map
    });
}
