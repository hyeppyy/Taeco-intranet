import filter from "./Filter";

const fetchEmployeeData = async () => {
  try {
    const response = await fetch("/api/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.status === "OK") {
      filter(result.data);
    } else {
      console.error("Error fetching notices:", result.error);
    }
  } catch (error) {
    console.error("Failed to fetch notices:", error);
  }
};

export default fetchEmployeeData;
