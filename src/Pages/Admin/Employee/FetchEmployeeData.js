// FetchEmployeeData.js
export const fetchEmployeeData = async () => {
  try {
    const response = await fetch("/server/data/users.json");
    if (!response.ok) {
      throw new Error("서버로부터 데이터를 가져오는데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchEmployeeData 함수에서 오류 발생:", error);
    throw error;
  }
};
