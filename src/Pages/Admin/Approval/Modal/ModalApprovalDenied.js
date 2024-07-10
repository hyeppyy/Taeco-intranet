/*
const modalApprovalDenied = () => {
  const submitButton = document.querySelector("[data-approvalapproval-btn]");
  const refuseButton = document.querySelector("[data-approvalreject-btn]");
  const refuse = document.querySelector("[data-a-refusereason]");
  const approvalId = document.querySelector("[data-a-id]");

  const modal = document.querySelector(".modal-box.active");
  const modalBackground = document.querySelector("#modal__background");

  const closeModal = () => {
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
    if (modalBackground && modalBackground.classList.contains("active")) {
      modalBackground.classList.remove("active");
    }
  };

  const removeEventListeners = () => {
    submitButton.removeEventListener("click", submitEventListener);
    refuseButton.removeEventListener("click", refuseEventListener);
  };

  const submitEventListener = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", approvalId.value);
    formData.append("refusereason", "");
    formData.append("isApprove", "true");

    try {
      await sendRequest(formData);
      alert("전자결제가 성공적으로 승인되었습니다.");
      closeModal();
      removeEventListeners();
      fetchApprovalData();
    } catch (error) {
      console.error("Failed to approve:", error);
      alert(`전자결제 승인 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  const refuseEventListener = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", approvalId.value);
    formData.append("refusereason", refuse.value);
    formData.append("isApprove", "false");

    try {
      await sendRequest(formData);
      alert("전자결제가 성공적으로 거부되었습니다.");
      closeModal();
      removeEventListeners();
      fetchApprovalData();
    } catch (error) {
      console.error("Failed to refuse:", error);
      alert(`전자결제 거부 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  const sendRequest = async (formData) => {
    const response = await fetch("/api/approval", {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const result = await response.json();

    if (result.status !== "OK") {
      throw new Error(result.error || "알 수 없는 오류");
    }

    return result;
  };

  submitButton.addEventListener("click", submitEventListener);
  refuseButton.addEventListener("click", refuseEventListener);
};

export default modalApprovalDenied;
*/

const modalApprovalDenied = () => {
  const submitButton = document.querySelector("[data-approvalapproval-btn]");
  const refuseButton = document.querySelector("[data-approvalreject-btn]");
  const refuse = document.querySelector("[data-a-refusereason]");
  const approvalId = document.querySelector("[data-a-id]");
  const modal = document.querySelector(".modal-box.active");
  const modalBackground = document.querySelector("#modal__background");

  const closeModal = () => {
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
    if (modalBackground && modalBackground.classList.contains("active")) {
      modalBackground.classList.remove("active");
    }
  };

  const updateApproval = (isApprove, refusereason) => {
    const id = approvalId.value;
    fetch(`/api/approval/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isApprove, refusereason }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        closeModal();
        removeEventListeners();
      })
      .catch((error) => {
        console.error("Error:", error);
        removeEventListeners();
      });
  };

  const handleSubmit = () => {
    updateApproval(true, "");
  };

  const handleRefuse = () => {
    updateApproval(false, refuse.value);
  };

  const removeEventListeners = () => {
    submitButton.removeEventListener("click", handleSubmit);
    refuseButton.removeEventListener("click", handleRefuse);
  };

  submitButton.addEventListener("click", handleSubmit);
  refuseButton.addEventListener("click", handleRefuse);
};

export default modalApprovalDenied;
