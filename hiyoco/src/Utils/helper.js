function retrieveAuthorDetails() {
    let details = {
        "tool": "HiYoCo"
    };
    details.name = document.getElementById("author-name").value;
    details.email = document.getElementById("author-email").value;
    return JSON.stringify(details);
}

function clearAuthorDetails() {
    document.getElementById("author-name").value = "";
    document.getElementById("author-email").value = "";
}

export { retrieveAuthorDetails, clearAuthorDetails };