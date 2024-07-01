import styles from "../Detail/Detail.module.css";

const detailInfo = () => {
  const ul = document.querySelector(`.${styles.noticeDetail__info}`);
  const items = [
    {
      title: "등록일",
      content: "2024.02.02",
    },
    {
      title: "작성자",
      content: "홍길동",
    },
    {
      title: "조회수",
      content: "13",
    },
    {
      title: "첨부파일",
      content: "sfsf.png",
    },
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = `${styles.noticeDetail__items}`;
    const menuTitle = document.createElement("h5");
    const menuContent = document.createElement("h5");
    menuTitle.innerText = item.title;
    menuContent.innerText = item.content;
    li.appendChild(menuTitle);
    li.appendChild(menuContent);
    ul.appendChild(li);
  });
};

export default detailInfo;
