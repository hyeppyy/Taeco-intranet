export const showExampleContent = (item) => {
  return {
    modal_id: `${item.id}`,
    header: `마일리지 승인`,
    content: `<h3>${item.category}</h3>`,
  };
};
