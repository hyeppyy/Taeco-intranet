const renderUserList = () => {
  const userTableBody = document.querySelector("#userTableBody");

  // Fetch users from server
  const fetchUsers = () => {
    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "OK") {
          userTableBody.innerHTML = ""; // Clear existing rows
          data.data.forEach((user) => {
            appendUserRow(user); // Append each user row
          });
          addDeleteButtonListeners(); // Add event listeners to delete buttons
        } else {
          console.error("Error fetching users:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  // Append a user row to the table
  const appendUserRow = (user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${
        user.profileImage
          ? `<img src="${user.profileImage}" alt="Profile Image" style="width: 50px; height: auto;">`
          : "-"
      }</td>
      <td>${user.position || "-"}</td>
      <td>${user.birthday || "-"}</td>
      <td>${user.startDate || "-"}</td>
      <td>${user.phone || "-"}</td>
      <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>
    `;
    userTableBody.appendChild(row);
  };

  // Add event listeners to delete buttons
  const addDeleteButtonListeners = () => {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const userId = event.target.dataset.id;
        deleteUser(userId); // Call delete function
      });
    });
  };

  // Handle form submission
  const userForm = document.querySelector("#userForm");

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(userForm);

    fetch("/api/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `HTTP error! status: ${response.status}, message: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "OK") {
          console.log("User added successfully:", data);
          fetchUsers(); // Refresh user list
          userForm.reset(); // Reset form
        } else {
          console.error("Error adding user:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  });

  // Delete user function
  const deleteUser = (userId) => {
    fetch(`/api/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "OK") {
          fetchUsers(); // Refresh user list after deletion
        } else {
          console.error("Error deleting user:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  // Initial fetch of users
  fetchUsers();
};

export default renderUserList;
