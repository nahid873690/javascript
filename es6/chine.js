const employee = {
    name: 'John Doe',
    1: 'Desh one',
    'home-address': '123 Main St',
    salary: 50000,
    position :'Software Engineer',
    family:{
        father:'Richard Doe',
        mother: {
            name:'Joane Doe',
            age: 55,
        },

    }
};
const value = employee.name;
console.log(employee.family.mother?.age)