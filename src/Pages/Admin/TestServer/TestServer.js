import renderUserList from "./renderUserList";

const renderAdminTest = (container) => {
  if (!container) {
    console.error("container element not found");
    return;
  }
  container.innerHTML = `
    <div>
       <form data-type-user id="userForm">
            <input type="text" id="name" name="name" placeholder="Name" required>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <input type="file" id="profileImage" name="profileImage" accept="image/*">
            <input type="text" id="position" name="position" placeholder="Position">
            <input type="date" id="birthday" name="birthday" placeholder="Birthday">
            <input type="date" id="startDate" name="startDate" placeholder="Start Date">
            <input type="tel" id="phone" name="phone" placeholder="Phone">
            <button type="submit">Add User</button>
        </form>
        <table style="width:100%;">
            <thead>
            <tr>
                <th>아이디</th>
                <th>이름</th>
                <th>이메일</th>
                <th>프로필 이미지</th>
                <th>직함</th>
                <th>생일</th>
                <th>입사일</th>
                <th>핸드폰</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody id="userTableBody">
            <!-- User rows will be inserted here -->
            </tbody>
        </table>
    </div>
  `;
  renderUserList();
};

export default renderAdminTest;
