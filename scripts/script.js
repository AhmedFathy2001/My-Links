const links = [{
    "link": "https://jsdemoapps.w3spaces.com/slider.html?bypass-cache=1631452387",
    "title": 'Vanilla js slider with touch support'
}, {
    "link": "https://randomquotegenerator.w3spaces.com/index.html?bypass-cache=1631301814",
    "title": 'Random Quote Generator'
}, {
    "link": "https://jsdemoapps.w3spaces.com/index-CRUD.html?bypass-cache=1630619105",
    "title": 'CRUD System'
}, {
    "link": "https://jsdemoapps.w3spaces.com/index.html?bypass-cache=1630176699",
    "title": 'first js application (Not designed to support responsive)'
}, {
    "link": "https://ahmedfathydemosites.w3spaces.com/Bezel.html?bypass-cache=1629515424",
    "title": 'Forth website (made only in 15 hours)'
}, {
    "link": "https://ahmedfathydemosites.w3spaces.com/Devfolio.html?bypass-cache=1629617546",
    "title": 'Third website'
}, {
    "link": "https://ahmedfathydemosites.w3spaces.com/Simone.html?bypass-cache=1629736247",
    "title": 'Second website'
}, {
    "link": "https://ahmedfathydemosites.w3spaces.com/Fokir.html?bypass-cache=1629734379#",
    "title": 'First site (the first ever site i created)'
}]

const container = document.getElementById('container')

for (const link in links) {
    const anchorTag = document.createElement('a')
    anchorTag.setAttribute("href", links[link].link)
    anchorTag.innerText = links[link].title
    container.appendChild(anchorTag);
}
var anchors = document.querySelectorAll('a');

[].forEach.call(anchors, function(a) {
    a.classList.add('links')
    a.setAttribute('target', '_blank')
});