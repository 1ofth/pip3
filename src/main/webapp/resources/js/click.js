// обработка нажатия на картинку - все работает
function clickHandler(event){
    let x = event.pageX;
    let y = event.pageY;

    let canvas = document.getElementById("canvas");
    let canvasRect = canvas.getBoundingClientRect();
    let headerRect = document.getElementById("header").getBoundingClientRect();

    let r = document.getElementById("hiddenR").value;

    if (r === "0.0") {
        document.getElementById("odz_error").innerHTML = "R was not set";
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

        if(xCoordinate < -2 || xCoordinate > 2 || yCoordinate < -3 || yCoordinate > 3){
            document.getElementById("odz_error").innerText="remember: -2<=x<=2, -3<=y<=3";
            return;
        }


        document.getElementById("check").click();
    }
}
