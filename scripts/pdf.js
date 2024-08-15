console.log("pdf.js ready");

document.getElementById('btnPdf').addEventListener('click', function () {
    generatePDF();
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("contenidoPDF"), {
        useCORS: true,
        onrendered: (canvas) => {
            let doc = new jsPDF("p", "mm", "a4");
            //Obtengo la dimensión en pixeles en base a la documentación
            // https://github.com/MrRio/jsPDF/blob/ddbfc0f0250ca908f8061a72fa057116b7613e78/jspdf.js#L59
            let a4Size = {
                w: convertPointsToUnit(595.28, "px"),
                h: convertPointsToUnit(841.89, "px")
            };

            let canvastoPrint = document.createElement("canvas");
            let ctx = canvastoPrint.getContext("2d");
            canvastoPrint.width = a4Size.w;
            canvastoPrint.height = a4Size.h;

            // Como mi ancho es mas grande y lo redimencionare, tomo cuanto corresponde esos 595 de el total de mi imagen
            let aspectRatioA4 = a4Size.w / a4Size.h;
            let rezised = canvas.width / aspectRatioA4;

            let printed = 0,
                page = 0;
            while (printed < canvas.height) {
                //Tomo la imagen en proporcion a el ancho y alto.
                ctx.drawImage(
                    canvas,
                    0,
                    printed,
                    canvas.width,
                    rezised,
                    0,
                    0,
                    a4Size.w,
                    a4Size.h
                );
                var imgtoPdf = canvastoPrint.toDataURL("image/png");
                let width = doc.internal.pageSize.getWidth();
                let height = doc.internal.pageSize.getHeight();
                if (page == 0) {
                    // si es la primera pagina, va directo a doc
                    doc.addImage(imgtoPdf, "JPEG", 0, 0, width, height);
                } else {
                    // Si no ya tengo que agregar nueva hoja.
                    let page = doc.addPage();
                    page.addImage(imgtoPdf, "JPEG", 0, 0, width, height);
                }
                ctx.clearRect(0, 0, canvastoPrint.width, canvastoPrint.height); // Borro el canvas
                printed += rezised; //actualizo lo que ya imprimi
                page++; // actualizo mi pagina
            }

            doc.save("graficas.pdf");
        }
    });

    function convertPointsToUnit(points, unit) {
        // Unit table from https://github.com/MrRio/jsPDF/blob/ddbfc0f0250ca908f8061a72fa057116b7613e78/jspdf.js#L791
        var multiplier;
        switch (unit) {
            case "pt":
                multiplier = 1;
                break;
            case "mm":
                multiplier = 72 / 25.4;
                break;
            case "cm":
                multiplier = 72 / 2.54;
                break;
            case "in":
                multiplier = 72;
                break;
            case "px":
                multiplier = 96 / 72;
                break;
            case "pc":
                multiplier = 12;
                break;
            case "em":
                multiplier = 12;
                break;
            case "ex":
                multiplier = 6;
            default:
                throw "Invalid unit: " + unit;
        }
        return points * multiplier;
    }
}