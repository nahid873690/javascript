
// const listItems = document.getElementsByClassName("list-item")

// const listItems = document.querySelector('#mainDiv')
// console.log(mainDiv.children[0]);

// const listItems = document.getElementsByClassName('list-item')
// listItems.array.forEach(item =>{
//     item.style.color = 'red'
// });

const listItems = document.getElementsByClassName('list-item')
for(let list of listItems){
    list.style.backgroundColor = 'red'
}