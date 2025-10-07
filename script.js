function ChangeText () {
    let changed = document.getElementById("changed");
    if (changed.className === "textone") {
        (changed.className === "texttwo")
    }
    else {
        changed.className = "textone";
    }
}

document.getElementById(changed).onclick = ChangeText;
