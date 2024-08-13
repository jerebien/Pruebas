window.alert("Zoom al 50% para mejor exp");
alert("Zoom al 50% para mejor exp");

function gridFlex () {
    let gridToFlexBox = document.getElementById("gridToFlexBox");
    if (gridToFlexBox.className === "gridBox") {
        gridToFlexBox.className = "flexBox";
    }
    else { gridToFlexBox.className = "gridBox";
    }
}

document.getElementById("gridToFlexBox").onclick = gridFlex;
