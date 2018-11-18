function initializeChart(){
    document.getElementById("hiddenR").value = "1";
    document.getElementById("hiddenX").value = "0";
    document.getElementById("Y").value = "0";
}

function addPointAfterRequest(data) {
    if (data.status === "complete") {
        document.getElementById("odz_error").innerText = "" ;
        let arr = [4];
        let input = data.responseText.replace("<tr>", "").replace("</tr>", "");
        if (!input.includes("<span style=\"color:red\">Y")) {
            input = input.substring(input.indexOf("<tr>") + 4, input.indexOf("</tr>"));
            for (let i = 0; i < 4; i++) {
                arr[i] = input.substring(input.indexOf("<td>") + 4, input.indexOf("</td>"));
                input = input.replace("<td>", "").replace("</td>", "");
            }
            drawDot(+arr[0], +arr[1], +arr[2],
                +document.getElementById("hiddenR").value, arr[3].toString().includes("true"));
        }
    }
}

function checkConnection() {
    if (navigator.onLine) {
        return true;
    }
    document.getElementById("errors").innerHTML = "Отсутствует подключение к интернету";
    document.getElementById("check").style.display = 'none';
    document.getElementById("canvas").style.display = 'none';

    let timerID = setInterval(() => {
        if (navigator.onLine) {
            document.getElementById("errors").innerHTML = "";
            document.getElementById("check").style.display = 'block';
            document.getElementById("canvas").style.display = 'inline-block';
            clearInterval(timerID);
        }
    }, 2000);
    return false;
}

function changeR(id) {
    document.getElementById("errors").innerHTML = "";
    let i;
    for (i = 1; i <= 5; i++ ) {
        if (i === id) {
            document.getElementById("r" + i).style.color = '#fc0707';
        } else {
            document.getElementById("r" + i).style.color = '#000000';
        }
    }
    document.getElementById("hiddenR").value = document.getElementById("r" + id).value;
    drawGraph(document.getElementById("r" + id).value);
    drawAllDots();
}

function changeX(id) {
    document.getElementById("errors").innerHTML = "";
    let i;
    for (i = 1; i <= 9; i++ ) {
        if (i === id) {
            document.getElementById("x" + i).style.color = '#fc0707';
        } else {
            document.getElementById("x" + i).style.color = '#000000';
        }
    }
    document.getElementById("hiddenX").value = document.getElementById("x" + id).value;
}