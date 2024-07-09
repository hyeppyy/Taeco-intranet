import fetchApprovalData from "./../FetchApprovalData";

const modalApprovalDenied = () => {
  const submitBtn = document.querySelector("[data-approvalapproval-btn]");
  const refuseBtn = document.querySelector("[data-approvalreject-btn]");
  const approvalID = document.querySelector("[data-a-id]");
  const refuse = document.querySelector("[data-a-refusereason]");

  const closeModal = () => {
    const modal = document.querySelector(".modal-box.active");
    const modalBackground = document.querySelector("#modal__background");
    modal?.classList.remove("active");
    modalBackground?.classList.remove("active");
  };

  const sendRequest = async (isApprove) => {
    const formData = new FormData();
    formData.append("id", approvalID.value);
    formData.append("isApprove", isApprove.toString());
    if (!isApprove) {
      formData.append("refusereason", refuse.value);
    }

    try {
      const response = await fetch(`/api/approval/${approvalID.value}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);
      if (isApprove) {
        alert("전자결제가 승인되었습니다.");
      } else {
        alert("전자결제가 거절되었습니다.");
      }
      // 여기에 UI 업데이트 로직을 추가할 수 있습니다.
      closeModal();
      fetchApprovalData();
    } catch (error) {
      console.error("Error updating approval:", error);
      alert("승인/거절 처리 중 오류가 발생했습니다.");
    }
  };

  const handleClick = (isApprove) => async (event) => {
    event.preventDefault();
    await sendRequest(isApprove);
  };

  submitBtn.addEventListener("click", handleClick(true));
  refuseBtn.addEventListener("click", handleClick(false));
};

export default modalApprovalDenied;
