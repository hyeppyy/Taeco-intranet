import submitMileageData from './SubmitMileageData';
import fetchMileageData from './FetchMileageData';

const handleMileageSubmit = () => {
  document
    .querySelector('.modal-box__button')
    .addEventListener('click', async (event) => {
      event.preventDefault();

      const category = document.getElementById('environment-category').value;
      const score = document.getElementById('score').value;
      const employee = document.querySelector(
        'input[placeholder="대리/홍길동"]'
      ).value;
      const date = document.getElementById('mileage-date').value;
      const imageFile = document.getElementById('mileage-image').files[0];

      if (!category || !score || !employee || !date || !imageFile) {
        alert('모든 필드를 채워주세요.');
        return;
      }

      const formData = new FormData();
      formData.append('category', category);
      formData.append('score', score);
      formData.append('employee', employee);
      formData.append('date', date);
      formData.append('image', imageFile);

      try {
        const response = await submitMileageData(formData);
        if (response.status === 'OK') {
          console.log('asdf');
          alert('마일리지 신청이 완료되었습니다.');

          // 모달 닫기
          document
            .querySelector('.modal-box.active')
            .classList.remove('active');
          document
            .querySelector('#modal__background')
            .classList.remove('active');

            fetchMileageData(); // 업데이트된 데이터 호출 후 렌더링
          // location.reload();
        }
      } catch (error) {
        alert('마일리지 신청 중 오류가 발생했습니다.');
      }
    });
};

export default handleMileageSubmit;
