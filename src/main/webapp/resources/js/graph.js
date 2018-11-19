function drawDot(x, y, r, R, answer) {
    // r - current radius
    // R - global one
    // NEVER change it. Don't mind how it works, eklmn
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let yOrtPosition = canvas.height / 2;
    let xOrtPosition = canvas.width / 2;

    if(isFinite(+R)) {
        if(R === r) {
            ctx.beginPath();
            let indent = xOrtPosition / 10;
            ctx.arc(xOrtPosition + x * indent * 5 / R, yOrtPosition - y * indent * 5 / R, 2, 0, Math.PI * 2);
            ctx.fillStyle =  answer ? "red" : "blue";
            ctx.fill();

            ctx.closePath();
            ctx.stroke();
        }
    }
}


function drawGraph(R){
    let canvas = document.getElementById("canvas");
    let ctx = document.getElementById("canvas").getContext("2d");
    let yOrtPosition = canvas.height / 2;
    let xOrtPosition = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // R may be "R"
    let radios = 5;
    let indent = canvas.width/20;
    let widthOfGrades = 7;

    ctx.font = "16px Arial";

    ctx.fillStyle = "lightblue";

    ctx.fillText("Рамочка - ОДЗ", 5, 25);


    ctx.beginPath();
    ctx.arc(xOrtPosition, yOrtPosition, radios*indent/2, Math.PI*3/2, 0);
    ctx.lineTo(xOrtPosition, yOrtPosition);
    ctx.fill();
    ctx.closePath();

    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xOrtPosition, yOrtPosition);
    ctx.lineTo(xOrtPosition-radios*indent, yOrtPosition);
    ctx.lineTo(xOrtPosition, yOrtPosition+radios*indent/2);
    ctx.fill();
    ctx.closePath();

    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xOrtPosition, yOrtPosition+radios*indent);
    ctx.rect(xOrtPosition-(radios*indent), yOrtPosition,radios*indent, -radios*indent/2);
    ctx.fill();
    ctx.closePath();

    ctx.stroke();

    ctx.fillStyle = "black";
    drawAxis();


    if(isFinite(+R)) {
        drawMarks(radios, +R);
        drawMarks(radios / 2,+R / 2);
    } else {
        drawMarks(radios, "R");
        drawMarks(radios / 2,"R/2");
    }


    eklm();
    drawAllDots();

    function eklm(){
        // takaya magia. Ne smotrite suda
        ctx.beginPath();
        if(R==1) {
            ctx.rect(xOrtPosition - 16 / R * indent - indent,
                yOrtPosition - 12 / R * indent - indent,
                30 / R * indent + 2 * indent,
                24 / R * indent + 2 * indent);
        } else if(R*1.0===1.5) {
            ctx.rect(xOrtPosition - 8.5 / R * indent - indent,
                yOrtPosition - 15 / R * indent - indent,
                17 / R * indent + 2 * indent,
                30 / R * indent + 2 * indent);
        } else if(R==2) {
            ctx.rect(xOrtPosition - 8 / R * indent - indent,
                yOrtPosition - 13 / R * indent - indent,
                16 / R * indent + 2 * indent,
                26 / R * indent + 2 * indent);
        } else if(R*1.0===2.5) {
            ctx.rect(xOrtPosition - 8 / R * indent - indent,
                yOrtPosition - 12.8 / R * indent - indent,
                16 / R * indent + 2 * indent,
                25.8 / R * indent + 2 * indent);
        } else if(R==3) {
            ctx.rect(xOrtPosition - 8 / R * indent - 0.8*indent,
                yOrtPosition - 12 / R * indent - indent,
                16 / R * indent + 1.6 * indent,
                24 / R * indent + 2 * indent);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function drawAxis(){
        ctx.moveTo(xOrtPosition, indent);
        ctx.lineTo(xOrtPosition, canvas.height-indent);

        ctx.moveTo(xOrtPosition, indent);
        ctx.lineTo(xOrtPosition-indent*4/10, indent*7/4);
        ctx.moveTo(xOrtPosition, indent);
        ctx.lineTo(xOrtPosition+indent*4/10, indent*7/4);
        ctx.fillText("y", xOrtPosition - indent, indent*2);


        ctx.moveTo(indent, yOrtPosition);
        ctx.lineTo(canvas.width-indent, yOrtPosition);

        ctx.moveTo(canvas.width-indent, yOrtPosition);
        ctx.lineTo(canvas.width-indent*7/4, yOrtPosition-indent*4/10);
        ctx.moveTo(canvas.width-indent, yOrtPosition);
        ctx.lineTo(canvas.width-indent*7/4, yOrtPosition+indent*4/10);

        ctx.fillText("x", canvas.width - indent*3/2, yOrtPosition + indent);
        ctx.stroke();
    }


    function drawMarks(radius, mark){
        ctx.moveTo(xOrtPosition + radius*indent, yOrtPosition-widthOfGrades);
        ctx.lineTo(xOrtPosition + radius*indent, yOrtPosition+widthOfGrades);
        ctx.fillText(mark, xOrtPosition + radius*indent-5, yOrtPosition+indent*4/3);

        ctx.moveTo(xOrtPosition - radius*indent, yOrtPosition-widthOfGrades);
        ctx.lineTo(xOrtPosition - radius*indent, yOrtPosition+widthOfGrades);
        ctx.fillText("-"+mark, xOrtPosition - radius*indent-5, yOrtPosition+indent*4/3);

        ctx.moveTo(xOrtPosition-widthOfGrades, yOrtPosition-radius*indent);
        ctx.lineTo(xOrtPosition+widthOfGrades, yOrtPosition-radius*indent);
        ctx.fillText(mark, xOrtPosition-indent-5, yOrtPosition-radius*indent-indent*1/3);

        ctx.moveTo(xOrtPosition-widthOfGrades, yOrtPosition+radius*indent);
        ctx.lineTo(xOrtPosition+widthOfGrades, yOrtPosition+radius*indent);
        ctx.fillText("-"+mark, xOrtPosition-indent-5, yOrtPosition+radius*indent);
        ctx.stroke();
    }
}


function drawAllDots() {
    let R = document.getElementById("hiddenR").value;
    let x, y, r;
    let counter=0;
    let table = document.getElementById('results');
    if (!(table===null)) {
        table.querySelectorAll('td').forEach(function (e) {
            switch (counter) {
                case 0:
                    x = e.innerHTML;
                    break;
                case 1:
                    y = e.innerHTML;
                    break;
                case 2:
                    r = e.innerHTML;
                    break;
                case 3:
                    drawDot(+x, +y, +r, +R, e.innerHTML.includes("true"));
                    counter -= 4;
                    break;
            }
            counter++;
        });
    }
}