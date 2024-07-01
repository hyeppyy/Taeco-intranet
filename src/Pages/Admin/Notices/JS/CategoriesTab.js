export const createButtonGroups = () => {
  const menus = [
    {
      title: "이벤트",
      id: "eventMenu",
    },
    {
      title: "마일리지",
      id: "mileageMenu",
    },
    {
      title: "전자결재",
      id: "paymentMenu",
    },
    {
      title: "인사행정",
      id: "humanResourceMenu",
    },
    {
      title: "교육",
      id: "educationMenu",
    },
    {
      title: "기타",
      id: "etcMenu",
    },
  ];

  const buttonGroup = document.getElementById("buttonGroup");

  menus.forEach((menu, index) => {
    const tab = document.createElement("button");
    buttonGroup.appendChild(tab);
    tab.innerText = menu.title;

    if (menu.title === "이벤트") {
      tab.classList.add("buttonGroup__active");
    }

    tab.addEventListener("click", showTable);

    function showTable(event) {
      const currentPage = document.querySelector(".showtable");
      currentPage.classList.remove("showtable");
      const targetId = menu.id;
      const target = document.querySelector(`#${targetId}`);
      target.classList.add("showtable");

      const currentTab = document.querySelector(".buttonGroup__active");
      currentTab.classList.remove("buttonGroup__active");
      event.target.classList.add("buttonGroup__active");
    }
  });
};
