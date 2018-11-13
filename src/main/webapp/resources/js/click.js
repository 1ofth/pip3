// обработка нажатия на картинку - все работает
function clickHandler(event){
    let x = event.pageX;
    let y = event.pageY;

    let canvas = document.getElementById("canvas");
    let canvasRect = canvas.getBoundingClientRect();
    let headerRect = document.getElementById("header").getBoundingClientRect();

    let r = document.getElementById("hiddenR").value;

    if (r === "0.0") {
        document.getElementById("errors").innerHTML = "Не указан радиус";
        return;
    }
    if(isFinite(+r)){
        // Coordinates for a plot
        let xP = ((x-canvasRect.left)-canvasRect.width/2);
        let yP = (canvasRect.height/2-((y-canvasRect.top+headerRect.top)));

        let xCoordinate = (4*r*xP/canvasRect.width).toFixed(3);
        let yCoordinate = (4*r*yP/canvasRect.height).toFixed(3);

        document.getElementById("hiddenX").value = xCoordinate;
        document.getElementById("Y").value = yCoordinate;

        document.getElementById("check").click();
        //drawDot(xCoordinate, yCoordinate, r, r);
    }
}
