// Prototype
PageHeader()
pageSidebar()
pageContent();
pageFooter();

function PageHeader() {
  // create <header> element
  var header = document.createElement('header');
  var h1 = document.createElement('h1');
  // add input text to <h1> element
  h1.innerHTML = 'Header';
  // place <h1> inside of <header>
  header.appendChild(h1);
  // place <header> element inside of the body
  document.body.appendChild(header);
  // ADDING STYLE
  header.style.background = "green";
  header.style.color = "white";
  header.style.textAlign = "center";
  header.style.padding = "100px";
}

function pageSidebar() {
  // create sidebar <section> element
  var sidebar = document.createElement('section');
  var h1 = document.createElement('h1');
  // input text to <h1>
  h1.innerHTML = 'Sidebar';
  // place <h1> inside of sidebar <section>
  sidebar.appendChild(h1);
  // place sidebar <section> element inside of the body
  document.body.appendChild(sidebar);
  // ADDING STYLE
  sidebar.style.background = "purple";
  sidebar.style.color = "white";
  sidebar.style.textAlign = "center";
  sidebar.style.display = "inline-block";
  sidebar.style.padding = "160px 0";
  sidebar.style.width = "30%";
}

function pageContent() {
  var content = document.createElement('section');
  var h1 = document.createElement('h1');
  // input text to <h1>
  h1.innerHTML = 'Content';
  // place h1 inside of content <section>
  content.appendChild(h1);
  // place content <section> inside of body
  document.body.appendChild(content);
  // ADDING STYLE
  content.style.background = "black";
  content.style.color = "yellow";
  content.style.textAlign = "center";
  content.style.padding = "160px 0";
  content.style.display = "inline-block";
  content.style.width = "70%";
}

function pageFooter() {
  var footer = document.createElement('footer');
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Footer';
  footer.appendChild(h1);
  document.body.appendChild(footer);
  // ADDING STYLE
  footer.style.background = "brown";
  footer.style.color = "white";
  footer.style.textAlign = "center";
  footer.style.padding = "100px";
}

// create a function that can design the layout without repeating
function style(background, color, align, padding) {

}