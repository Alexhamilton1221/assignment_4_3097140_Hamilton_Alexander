import fetch from "node-fetch"; // Import node-fetch to make HTTP requests
import Monster from "./monsterModel.js";

export default async function populateMonsters() {
  try {
    // Fetch data from the JSON URL
    const response = await fetch(
      "https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json"
    );
    const data = await response.json();

    // Insert each monster into the MongoDB collection
    await Monster.insertMany(data);

    console.log("Monsters populated successfully.");
  } catch (error) {
    console.error("Error populating monsters:", error);
  }
}
