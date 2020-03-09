//Get the needed object from HTML
const sections = document.querySelectorAll('section');
const focus = document.querySelector('.focus');
const projects_table = document.querySelector(".projects_table");

//Initialize options to animate the NavBar
const options = { threshold: 0.7 };

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        //Get the name of the  active Section, then get the respective anchor in the NavBar, then the anchor coords
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        
        /*Then if we're currently seeing that section (there's intersection), sets the focus 
        (the colored "bookmark" in the navbar) coords to the currently active anchor coords*/
        if (entry.isIntersecting) { 
            focus.style.setProperty("height", `${coords.height}px`);
            focus.style.setProperty("width", `${coords.width}px`);
            focus.style.setProperty("top", `${coords.top}px`);
            focus.style.setProperty("left", `${coords.left}px`);
        }
    });
}

async function populateTable() {
    //Url that will eventually return my repo, sorted from the last to the most recent updated
    const API_request = "https://api.github.com/search/repositories?q=user:its-hmny&sort=updated";
    response = await fetch(API_request);
    result = await response.json(); //JSON parsing
    
    result.items.forEach(repo => {
        const position = result.items.left; //Position in which the repo elements has to be inserted
        const newRow = projects_table.insertRow(position);
        
        //Adds the needed repo's info to the table row element
        newRow.insertCell().append(document.createTextNode(repo.name));
        newRow.insertCell().append(document.createTextNode(repo.description));
        newRow.insertCell().append(document.createTextNode(repo.language));
        
        //Create the link to the repo page in GitHub, and then  insert it in the table
        const repo_link = document.createElement("a");
        
        repo_link.setAttribute("href", repo.html_url);
        repo_link.appendChild(document.createTextNode("See"));
        repo_link.className = "repo_link";
        
        newRow.insertCell().append(repo_link);
    });
}


populateTable();

/*This little subroutine cycles through all the sections and pass each of them to 
the observer that will call the navCheck method */
sections.forEach(section => {
    observer.observe(section);
});