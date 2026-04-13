import { series } from "./data.js";
import { Serie } from "./Serie.js";

const table = document.getElementById("series-table")!;
const avgText = document.getElementById("average")!;
const cardContainer = document.getElementById("series-card")!;

let totalSeasons = 0;

series.forEach((serie: Serie) => {
    let row = document.createElement("tr");
   
    row.className = "fila-serie";
    row.style.cursor = "pointer";

    row.innerHTML = `
        <td><strong>${serie.id}</strong></td>
        <td><a class="serie-link">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;

    row.onclick = (e) => {
        e.preventDefault();
        showDetail(serie);
    };

    table.appendChild(row);
    totalSeasons += serie.seasons;
});

//promedio
let avg = totalSeasons / series.length;
avgText.innerHTML = `<strong>Seasons average: ${avg}</strong>`;

function showDetail(serie: Serie): void {
    cardContainer.innerHTML = `
        <div class="card">
            <img src="${serie.image}" 
                 class="card-img-top" 
                 alt="${serie.name}" 
                 style="height: auto; max-height: 300px; object-fit: contain; background-color: #eee;">
            <div class="card-body">
                <h5 class="card-title"><strong>${serie.name}</strong></h5>
                <p class="card-text text-secondary">${serie.description}</p>
                <a href="${serie.link}" target="_blank" class="text-primary" style="word-break: break-all;">${serie.link}</a>
            </div>
        </div>
    `;
}