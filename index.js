/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve", "Dustin", "Elliot", "Nicholas", "Sam", "Garrett", "Miles", "Caroline", "Victoria", "Dylan"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const freelancers = []

for (let count = 1; count <= NUM_FREELANCERS; count++) {
    const freelancer = {
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
        price: Math.floor(Math.random() * 180) + 20 
    }
    freelancers.push(freelancer);
};

const sum = freelancers.reduce((sumSoFar, freelancer)=>{
    return freelancer.price + sumSoFar
}, 0)

const average = sum / freelancers.length

const freelancerRow = () => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>$freelancer</td>
    `;
    return freelancer;
}

const freelancer