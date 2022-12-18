const listRoutes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home/employees', name: 'List Employees'},
    { path: '/home/employees/add', name: 'Add Employee'},
    { path: '/home/employees/update/:id', name: 'Update Employee'},
]

export default listRoutes;