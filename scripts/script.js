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
    "title": 'First js application (Not responsive)'
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

const myLinks = document.getElementById('myLinks')

for (const link in links) {
    const listTag = document.createElement('li')
    const anchorTag = document.createElement('a')
    anchorTag.setAttribute("href", links[link].link)
    console.log(links[link].title.length);
    if(links[link].title.length > 25) listTag.classList.add('grid-two')
    anchorTag.innerText = links[link].title
    myLinks.appendChild(listTag)
    listTag.appendChild(anchorTag);
}
var anchors = document.querySelectorAll('a');

[].forEach.call(anchors, function(a) {
    a.classList.add('links')
});
const lastLi = document.createElement('li')
myLinks.appendChild(lastLi)
lastLi.style.marginTop = 1.5 + 'rem'
lastLi.classList.add('grid-two')
const socialLinks = [{
    'socialLink': 'https://www.instagram.com/ahmedfathy2001/',
    'icon': 'fa-instagram'
}, {
    'socialLink': 'https://twitter.com/ahmedfathy_2001',
    'icon': 'fa-twitter'
}, {
    'socialLink': 'https://www.linkedin.com/in/ahmed-fathy-a112511b4/',
    'icon': 'fa-linkedin-in'
}, {
    'socialLink': 'https://discord.com/users/452192923199733781',
    'icon': 'fa-discord'
}]
for (const socialLink in socialLinks) {
    const socialAnchor = document.createElement('a')
    const socialList = document.createElement('li')
    const icon = document.createElement('i')
    socialAnchor.setAttribute('href', socialLinks[socialLink].socialLink)
    icon.classList.add('fab')
    icon.classList.add(socialLinks[socialLink].icon)
    socialList.classList.add('list-styling')
    socialAnchor.appendChild(icon)
    socialAnchor.style.color = 'white'
    socialList.appendChild(socialAnchor)
    lastLi.appendChild(socialList)
}
var socialAnchors = document.querySelectorAll('a');

[].forEach.call(socialAnchors, function(a) {
    a.setAttribute('target', '_blank')
});