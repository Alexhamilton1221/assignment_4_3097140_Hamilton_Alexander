// frontend.js

// Function to fetch all monsters from the backend and populate the list
async function getAllMonsters() {
  try {
    // Fetch monsters from the backend API
    const response = await fetch("/monsters");
    const monsters = await response.json();

    // Get the list element
    const monsterList = document.getElementById("monster-list");

    // Clear existing list items
    monsterList.innerHTML = "";

    // Iterate over the monsters and create list items for each one
    monsters.forEach((monster) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${monster.name} - ${monster.imageUrl}`; // Adjust based on your monster data structure
      monsterList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching monsters:", error);
  }
}

// Function to handle form submission for adding a monster
async function addMonster(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const imageUrl = formData.get("imageUrl");
  // Add input fields for other attributes

  // Send POST request to add the new monster
  try {
    const response = await fetch("/monsters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageUrl }),
      // Add other attributes to the body object
    });
    // Reload the page to display the newly added monster
    location.reload();
  } catch (error) {
    console.error("Error adding monster:", error);
  }
}

// Add event listener for form submission
document
  .getElementById("add-monster-form")
  .addEventListener("submit", addMonster);
