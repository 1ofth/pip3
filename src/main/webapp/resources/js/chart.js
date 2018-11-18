function drawGraph(radius){
    let canvas = document.getElementById("canvas");
    let canvasRect = canvas.getBoundingClientRect();
    let headerRect = document.getElementById("header").getBoundingClientRect();
    let ctx = document.getElementById("canvas").getContext("2d");


    let MAX_Y = 3.5;
    let MAX_X = 3.5;

    // get coordinates at the chart
    function getCX(valueX){
        return  (MAX_X*((valueX-canvasRect.left)-canvasRect.width/2)/canvasRect.width).toFixed(3);
    }

    function getCY(valueY){
        return (MAX_Y*(canvasRect.height/2-((valueY-canvasRect.top+headerRect.top)))/canvasRect.height).toFixed(3);
    }

    // get coordinates at the canvas
    function getPX(valueX){
        return valueX*canvasRect.width/MAX_X;
    }

    function getPY(valueY){
        return valueY*canvasRect.height/MAX_Y;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw axis

    ctx.beginPath();
        ctx.moveTo(getPX(MAX_X - 0.3), getPY(0));
        ctx.lineTo(getPX(0.3 - MAX_X), getPY(0));

        ctx.moveTo(getPX(MAX_X - 0.3), getPY(0));
        ctx.lineTo(getPX(MAX_X - 0.4), getPY(0.1));
        ctx.lineTo(getPX(MAX_X - 0.4), getPY(-0.1));

        ctx.moveTo(getPX(0), getPY(0.3 - MAX_Y));
        ctx.lineTo(getPX(0), getPY(MAX_Y - 0.3));

    ctx.closePath();
    ctx.stroke();

}

function drawDot(x, y, r, R, answer) {
    ;
}


function drawAllDots() {
    ;
}

