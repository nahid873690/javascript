const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address:'movie cinema',
    isSingle: true,
    friends: ['Apu','Raaz','Salman','aamir'],
    act: function(){
            console.log('acting like sakib khan')
        },
    car: {
        brand :'tesla',
        price: 500000,
        made: 2025,
        movies:[{name: 'no .1', year: 2015},{name: 'king khan ', year: 2018}],
        
        manufacturer:{
            name: 'tesla',
            ceo: 'Elon Mask',
            Country:'USA'
        }
    }
}
// console.log(student.friends);
// nayok.act();
console.log(nayok.act);
nayok.act();