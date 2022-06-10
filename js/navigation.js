function createNavigation(){
    let navItem = document.getElementById("navigacia");
    let array = [
        {
            "href" : "index.html",
            "innerHtml" : "HOME"
        },
        {
            "href" : "history.html",
            "innerHtml" : "HISTORY"
        },
        {
            "href" : "team.html",
            "innerHtml" : "TEAM"
        },
       
    ]

    let ul = document.createElement('ul');

    array.forEach(element => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = element.href;
        a.innerHTML = element.innerHtml;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navItem.appendChild(ul);
}

createNavigation();