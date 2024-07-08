import filterByTabs from "./Filters";

// 서버 데이터 요청 함수
const fetchApprovalData = async () => {
  try {
    const response = await fetch("/api/approval");
    const data = await response.json();
    console.log("Fetched approval data:", data);
    if (data.status === "OK") {
      filterByTabs(data.data);
    } else {
      console.error("Error in Approval data:", data.error);
    }
  } catch (error) {
    console.error("Failed to fetch Approval data:", error);
  }
};

export default fetchApprovalData;

/*
import filterByTabs from "./Filters";

// 서버 데이터 요청 함수
const fetchApprovalData = async () => {
  try {
    // Fetch data from the /api/approval endpoint
    const response = await fetch("/api/approval", {
      headers: {
        // Include headers as required, for example:
        username: sessionStorage.getItem(`userName`), // Replace with dynamic username
        userposition: sessionStorage.getItem(`userPosition`), // Replace with dynamic user position
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.status === "OK") {
      const data = result.data;
      filterByTabs(data); // Apply tab filters on the fetched data
    } else {
      console.error("Error fetching data: ", result.error);
    }
  } catch (error) {
    console.error("Fetch error: ", error.message);
  }
};

export default fetchApprovalData;
*/
