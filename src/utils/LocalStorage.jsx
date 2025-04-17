
const employees = [
    {
        "id": 1,
        "first_name": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "total": 2,
            "active": 1,
            "complete": 1,
            "failed": 0,
            "newTask": 1
        },
        "tasks": [
            { "title": "Task 1", "description": "Complete the report", "date": "2025-04-01", "category": "Work", "active": true, "newTask": true, "complete": false, "failed": false },
            { "title": "Task 2", "description": "Team meeting", "date": "2025-04-02", "category": "Meeting", "active": false, "newTask": false, "complete": true, "failed": false },
            { "title": "Task 3", "description": "Team meeting", "date": "2025-04-02", "category": "Meeting", "active": false, "newTask": false, "complete": true, "failed": false },
            { "title": "Task 4", "description": "Team meeting", "date": "2025-04-02", "category": "Meeting", "active": false, "newTask": false, "complete": true, "failed": false }
        ]
    },
    {
        "id": 2,
        "first_name": "Rahul",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "total": 2,
            "active": 1,
            "complete": 1,
            "failed": 0,
            "newTask": 1
        },
        "tasks": [
            { "title": "Task 1", "description": "Client call", "date": "2025-04-03", "category": "Communication", "active": true, "newTask": true, "complete": false, "failed": false },
            { "title": "Task 2", "description": "Submit budget report", "date": "2025-04-04", "category": "Finance", "active": false, "newTask": false, "complete": true, "failed": false }
        ]
    },
    {
        "id": 3,
        "first_name": "Aditya",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "total": 2,
            "active": 1,
            "complete": 0,
            "failed": 1,
            "newTask": 1
        },
        "tasks": [
            { "title": "Task 1", "description": "Code review", "date": "2025-04-05", "category": "Development", "active": true, "newTask": true, "complete": false, "failed": false },
            { "title": "Task 2", "description": "Fix bugs", "date": "2025-04-06", "category": "Debugging", "active": false, "newTask": false, "complete": false, "failed": true },
            { "title": "Task 3", "description": "Fix bugs", "date": "2025-04-06", "category": "Debugging", "active": false, "newTask": true, "complete": false, "failed": false }
        ]
    },
    {
        "id": 4,
        "first_name": "Arpit",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "total": 2,
            "active": 1,
            "complete": 1,
            "failed": 0,
            "newTask": 1
        },
        "tasks": [
            { "title": "Task 1", "description": "Prepare presentation", "date": "2025-04-07", "category": "Work", "active": true, "newTask": true, "complete": false, "failed": false },
            { "title": "Task 2", "description": "Send follow-up emails", "date": "2025-04-08", "category": "Communication", "active": false, "newTask": false, "complete": true, "failed": false }
        ]
    },
    {
        "id": 5,
        "first_name": "Sumit",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "total": 2,
            "active": 1,
            "complete": 1,
            "failed": 0,
            "newTask": 1
        },
        "tasks": [
            { "title": "Task 1", "description": "Organize files", "date": "2025-04-09", "category": "Management", "active": true, "newTask": true, "complete": false, "failed": false },
            { "title": "Task 2", "description": "Update documentation", "date": "2025-04-10", "category": "Documentation", "active": false, "newTask": false, "complete": true, "failed": false }
        ]
    }
];

const admin = {
    "id": 1,
    "first_name": "Raju",
    "email": "admin@example.com",
    "password": "123"
};

export const setLocalstroage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalstroage=()=>{
     const employees=JSON.parse(localStorage.getItem('employees'));
     const admin=JSON.parse(localStorage.getItem('admin'));
    //  console.log(employees,admin)
     return{employees,admin}
}