

document.getElementById('start-button').addEventListener('click', function() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#camera'),
            constraints: {
                width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 },
        aspectRatio: { min: 1, max: 2 },
        facingMode: "environment",
        frameRate: { ideal: 24, max: 30 }
            }
        },
        decoder: {
            readers: [
                "code_128_reader",
                "ean_reader",
                "ean_8_reader",
                "code_39_reader",
                "code_39_vin_reader",
                "codabar_reader",
                "upc_reader",
                "upc_e_reader",
                "i2of5_reader",
                "2of5_reader",
                "code_93_reader"
            ] 
        }
    }, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // var canvas = Quagga.canvas.dom.image;
        //     var ctx = canvas.getContext("2d");
            
        //     // Add a semi-transparent overlay
        //     ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        //     ctx.fillRect(0, 0, canvas.width, canvas.height);
            
        //     // Draw a scanning area
        //     var scanAreaWidth = canvas.width * 0.8;
        //     var scanAreaHeight = canvas.height * 0.3;
        //     var scanAreaX = (canvas.width - scanAreaWidth) / 2;
        //     var scanAreaY = (canvas.height - scanAreaHeight) / 2;
            
        //     ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        //     ctx.lineWidth = 2;
        //     ctx.beginPath();
        //     ctx.rect(scanAreaX, scanAreaY, scanAreaWidth, scanAreaHeight);
        //     ctx.stroke();
            
        //     // Add text
        //     ctx.fillStyle = "white";
        //     ctx.font = "16px Arial";
        //     ctx.textAlign = "center";
        //     ctx.fillText("Align barcode within the frame", canvas.width / 2, scanAreaY - 10);
        // });


    });

    // Quagga.onProcessed(function(result) {
    //     var drawingCtx = Quagga.canvas.ctx.overlay;
    //     var drawingCanvas = Quagga.canvas.dom.overlay;

    //     drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    //     if (result) {
    //         if (result.boxes) {
    //             result.boxes.filter(function (box) {
    //                 return box !== result.box;
    //             }).forEach(function (box) {
    //                 Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
    //             });
    //         }

    //         if (result.box) {
    //             Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
    //         }

    //         if (result.codeResult && result.codeResult.code) {
    //             Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
    //         }
    //     }
    // });


    

    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;
        // alert('Barcode detected and read! Value: ' + code);
        document.getElementById('result').innerHTML = code;
    });
   
});

document.getElementById('stop-button').addEventListener('click', function() {
    Quagga.stop();
    console.log("Scanning stopped");
    // document.getElementById('camera').style.display = 'none';
});