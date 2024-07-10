const approveMileage = async (id) => {
  try {
    const response = await fetch(`/api/mileage/${id}/approve`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isApprove: true }),
    });
    const data = await response.json();
    if (data.status === "OK") {
      alert("마일리지가 승인되었습니다.");
      return true;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    alert("마일리지 승인 중 오류가 발생했습니다: " + error.message);
    return false;
  }
};

export default approveMileage;
