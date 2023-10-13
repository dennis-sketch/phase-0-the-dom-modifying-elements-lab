// Write your code here


    // Remove the 'main#main' node
    document.getElementById('main').remove();

    // Create a new 'h1' element with an id of 'victory'
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';

    // Set the inner text of the 'h1' element
    newHeader.innerText = 'YOUR-NAME is the champion';

    // Append the 'h1' element to the document body
    document.body.appendChild(newHeader);

    // Assign the 'newHeader' variable to the created 'h1' element
    const newHeaderVariable = document.getElementById('victory');

