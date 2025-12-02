const btnSearch = document.getElementById('search-button');
const inputSearch = document.getElementById('search-input');
const creatureID = document.getElementById('creature-id');
const creatureName = document.getElementById('creature-name');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

async function search() {
  try {
    const creatureNameOrID = inputSearch.value.toLowerCase();
    const response = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrID}`);
    const data = await response.json();
    console.log(data);

     // Set Creature info
    creatureName.textContent = `${data.name.toUpperCase()}`;
    creatureID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
    
    types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join('');
  } catch(err) {
    alert("Creature not found");
    resetTable();
    console.log(err);
  }
}

function resetTable() {
  creatureName.textContent = '';
  creatureID.textContent = '';
  height.textContent = '';
  weight.textContent = '';
  types.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
}