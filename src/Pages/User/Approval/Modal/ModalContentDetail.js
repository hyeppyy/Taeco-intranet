const approvalType = () => {
  const select = document.getElementById('category');
  const approvalDataContainer = document.querySelector(
    '.approval-data__container'
  );

  select.addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === '반차' || selectedValue === '조퇴') {
      approvalDataContainer.innerHTML = `
      <input type="date" id="startDate"/>
        <select id="ampm">
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
        <select id="detailtime">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>          
          <option value="11">11</option>
          <option value="12">12</option>
        </select>`;
    } else {
      approvalDataContainer.innerHTML = `
          <input type="date" id="startDate"/> 
          <span> - </span>
          <input type="date" id="endDate"/>`;
    }
  });
};

export default approvalType;
