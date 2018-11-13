function addPointAfterRequest(data) {
    if(data.status === "complete") {
        let arr = [4];
        let input = data.responseText.replace("<tr>", "").replace("</tr>", "");
        if (!input.includes("<span style=\"color:red\">Y")) {
            input = input.substring(input.indexOf("<tr>")+4, input.indexOf("</tr>"));
            for (let i = 0; i < 4; i++) {
                arr[i] = input.substring(input.indexOf("<td>")+4, input.indexOf("</td>"));
                input = input.replace("<td>", "").replace("</td>", "");
            }
            drawDot(+arr[0], +arr[1], +arr[2],
                +document.getElementById("hiddenR").value, arr[3].toString().includes("true") );
        }
        // if (document.getElementById("x" + arr[0]) !== null) {
        //     document.getElementById("x" + arr[0]).style.color = '#fc0707';
        // }
        // document.getElementById("r" + arr[2]).style.color = '#fc0707';
    }

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

function isValid () {
    let message;

    let Yinput = document.getElementById("Y");
    let Y = Yinput.value.replace(",", ".");
    document.getElementById("Y").value =  Y.toString();
    if (Y  < -5 || Y > 5 || isNaN(Y) || Y === "" || Y.length > 7){
        message = "Некорректно задано значение Y";
    }
    if (message) {
        document.getElementById("errors").innerHTML = message;
        Yinput.style.backgroundColor = '#FF4136';

    } else {
        document.getElementById("errors").innerHTML = "";
        Yinput.style.backgroundColor = 'white';
        return true;
    }
}
