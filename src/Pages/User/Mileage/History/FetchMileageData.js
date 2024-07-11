import renderMileageList from "./RenderMileageList";
import initPagination from "/src/Components/Pagination/Pagination";
import styles from "./History.module.css";

// 서버 데이터 요청 함수
const fetchMileageData = async () => {
  // const response = await fetch('/server/data/mileage.json');
  // const data = await response.json();
  // initPagination(data, renderMileageList);
  try {
    const response = await fetch("/api/mileage");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const approvedMileage = data.data.filter(
      (item) =>
        item.user === sessionStorage.getItem("userName") && item.isApprove == 1
    );
    if (data.status === "OK") {
      initPagination(approvedMileage, renderMileageList);
    } else {
      console.error("Error fetching mileage data:", data.error);
    }
  } catch (error) {
    console.error("Error fetching mileage data:", error);
  }
};

export default fetchMileageData;
