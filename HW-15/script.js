document.getElementById("addTravelBtn").addEventListener("click", function () {
    document.getElementById("travelForm").style.display = "block";
});
const notebook = new TravelNotebook();

document.getElementById("submit").addEventListener("click", function () {
    const toValue = document.getElementById('toInput').value;
    const startDateValue = document.getElementById('startDateInput').value;
    const finishDateValue = document.getElementById('finishDateInput').value;
    const budgetValue = document.getElementById('budgetInput').value;

    console.log(toValue, startDateValue, finishDateValue, budgetValue);


    const newTravel = new Travel(toValue, startDateValue, finishDateValue, budgetValue);
    notebook.addTravel(newTravel);

    const card = document.createElement('div');
    card.innerHTML = `
      <p><strong>To:</strong>${toValue}</p>
      <p><strong>Start:</strong> ${startDateValue}</p>
      <p><strong>Finish:</strong> ${finishDateValue}</p>
      <p><strong>Budget:</strong> $${budgetValue}</p>
    `;

    card.addEventListener('dblclick', () => {
        notebook.removeTravel(newTravel);
        card.remove();
    });

    document.getElementById('board').appendChild(card);

    document.getElementById('toInput').value = '';
    document.getElementById('startDateInput').value = '';
    document.getElementById('finishDateInput').value = '';
    document.getElementById('budgetInput').value = '';

    document.getElementById('travelForm').style.display = "none";
});


// ==========обработчик==============
document.getElementById('searchBtn').addEventListener("click", function () {
    const query = document.getElementById('searchInput').value;
    const results = notebook.getTravelByDestination(query);
    console.log(results);
    console.log(notebook.getAllTravels());
})