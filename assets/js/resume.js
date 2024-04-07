
function downloadPDF() {
    // Path to the PDF file within your project
    const pdfPath = '.documents/sai krishna resume .pdf';
    
    // Create an anchor element
    const a = document.createElement('a');

    // Set the href attribute with the path to the PDF file
    a.href = pdfPath;
    a.target = '_blank';

    // Set the download attribute with the desired file name
    a.download = 'sai krishna resume .pdf';

    // Append the anchor to the document and trigger a click event
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);
    }