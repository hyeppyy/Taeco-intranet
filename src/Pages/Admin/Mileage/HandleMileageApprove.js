import approveMileage from "./ApproveMileage";
import rejectMileage from "./RejectMileage";
import fetchMileageData from "./FetchMileageData";

const handleMileageApprove = (item) => {
  const approveBtn = document.getElementById(`approve-btn-${item.id}`);
  const rejectBtn = document.getElementById(`reject-btn-${item.id}`);

  if (approveBtn) {
    approveBtn.addEventListener("click", async () => {
      const success = await approveMileage(item.id);
      if (success) {
        document.querySelector(".modal-box.active").classList.remove("active");
        document.querySelector("#modal__background").classList.remove("active");
        // location.reload();
        fetchMileageData();
      }
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", async () => {
      const reasonSelect = document.querySelector("#rejection-reason");
      const reason = reasonSelect.value;
      console.log(reason);
      if (reason === "none") {
        alert("거절 사유를 선택해주세요.");
        return;
      }

      console.log("선택된 이유:", reason);

      const success = await rejectMileage(item.id, reason);
      if (success) {
        document.querySelector(".modal-box.active").classList.remove("active");
        document.querySelector("#modal__background").classList.remove("active");
        fetchMileageData();
      }
    });
  }
};

export default handleMileageApprove;
