//Array of Objects holding anchor links and there titles
const links = [
  {
    link: "https://entertainment-fem.netlify.app/",
    title: "Entertainment app UI with Angular",
  },
  {
    link: "https://space-tourismm.netlify.app",
    title: "Space Tourism",
  },

  {
    link: "https://ahmedfathy2001.github.io/start-angular",
    title: "First Angular Project",
  },

  {
    link: "https://ahmedfathy2001.github.io/shooter/",
    title: "Shooter game",
  },
  {
    link: "https://ahmedfathy2001.github.io/Weather--News-app/",
    title: "Weather app",
  },
  {
    link: "https://ahmedfathy2001.github.io/login-system/",
    title: "Login & registration System",
  },
  {
    link: "https://ahmedfathy2001.github.io/Pop-up-Slider/",
    title: "Vanilla js slider with touch support",
  },
  {
    link: "https://ahmedfathy2001.github.io/Random-Quote-Generator/",
    title: "Random Quote Generator",
  },
  {
    link: "https://ahmedfathy2001.github.io/bookmarker",
    title: "Bookmarker",
  },
  {
    link: "https://ahmedfathy2001.github.io/crud-app",
    title: "CRUD App (Not responsive)",
  },
  {
    link: "https://ahmedfathy2001.github.io/bezel/",
    title: "Bezel Landing page",
  },
  {
    link: "https://ahmedfathy2001.github.io/devfolio",
    title: "Devfolio Landing page",
  },
];

const myLinks = document.getElementById("myLinks");
//looping over the array of objects to create list items and anchors
for (const link in links) {
  const listTag = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", links[link].link);
  //checks if the title of the link is over 25 characters and assigns it two grid columns if so else it takes only one
  if (links[link].title.length >= 25) listTag.classList.add("grid-two");
  anchorTag.innerText = links[link].title;
  //adds the created elements in there intended parents
  myLinks.appendChild(listTag);
  listTag.appendChild(anchorTag);
}
if (links.length % 2 == 1) {
  myLinks.firstChild.classList.add("grid-two");
}
var anchors = document.querySelectorAll("a");
//forEach loop to add class links to every anchor for styling (Only anchors created above this loop will be affected)
[].forEach.call(anchors, function (a) {
  a.classList.add("links");
});
//Creates the icons list item (will always be last child thats why its not in the above loop)
const lastLi = document.createElement("li");
//Appends it in the main list
myLinks.appendChild(lastLi);
lastLi.style.marginTop = 1.5 + "rem";
lastLi.classList.add("grid-two");
//Array of objects for the social icons
const socialLinks = [
  {
    socialLink: "https://www.instagram.com/ahmedfathy2001/",
    icon: "fa-instagram",
    title: "instagram",
  },
  {
    socialLink: "https://twitter.com/ahmedfathy_2001",
    icon: "fa-twitter",
    title: "twitter",
  },
  {
    socialLink: "https://www.linkedin.com/in/ahmed-fathy-a112511b4/",
    icon: "fa-linkedin-in",
    title: "linkedin",
  },
  {
    socialLink: "https://discord.com/users/452192923199733781",
    icon: "fa-discord",
    title: "discord",
  },
  {
    socialLink: "https://www.upwork.com/freelancers/~01d265643dcac8d4b2",
    icon: "fa-upwork",
    title: "upwork",
  },
];
var socialListUl = document.createElement("ul");
socialListUl.classList.add("socials");
// looping around the array of objects to create new list items, anchors, and icons for the social icons
for (const socialLink in socialLinks) {
  const socialAnchor = document.createElement("a");
  const socialList = document.createElement("li");
  const icon = document.createElement("i");
  socialAnchor.setAttribute("href", socialLinks[socialLink].socialLink);
  icon.classList.add("fab");
  icon.classList.add(socialLinks[socialLink].icon);
  socialAnchor.setAttribute("title", socialLinks[socialLink].title);
  socialList.classList.add("list-styling");
  socialAnchor.appendChild(icon);
  socialAnchor.style.color = "white";
  socialList.appendChild(socialAnchor);
  socialListUl.appendChild(socialList);
}
lastLi.appendChild(socialListUl);

lastLi.classList.add("hover-remove");
var socialAnchors = document.querySelectorAll("a");

//ForEach loop to loop around all the anchors and sets their target to a new page on click
[].forEach.call(socialAnchors, function (a) {
  a.setAttribute("target", "_blank");
});
