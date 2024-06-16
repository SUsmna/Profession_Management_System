let employees = [];
let nextId = 1;

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const messageElement = document.getElementById("message");

    if (!name || !profession || !age) {
        messageElement.textContent = "Error :Please Make sure  all the field before adding in an employee";
        messageElement.className = "error";
        return;
    }

    const employee = {
        id: nextId++,
        name,
        profession,
        age: parseInt(age)
    };

    employees.push(employee);
    displayEmployees();

    messageElement.textContent = "Success: Message Added";
    messageElement.className = "success";

    document.getElementById("employeeForm").reset();
}

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";

    if (employees.length === 0) {
        employeeList.innerHTML = "<p>Data not found.</p>";
        return;
    }

    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";
        employeeDiv.innerHTML = `
            ${employee.name}&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp  ${employee.profession}&nbsp;&nbsp;&nbsp ${employee.age} 
            <span class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</span>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}




