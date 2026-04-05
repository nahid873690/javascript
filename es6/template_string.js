const firstName = 'kamruzzaman';

const lastName = "Shuvo";

const aboutMe = `My name is ${firstName}`
// console.log(aboutMe);

const giveMe = `give me money ${(10+20)*2+500}`
// console.log(giveMe);

function getCardHTML(name, description, price){
    const div = `
        <div class="card">
            <h2>${name}</h2>
            <p>Price: ${price}</p>
            <p>${description}</p>
        </div>
    `;
    console.log(div);
}
getCardHTML('iphone 12', 'This is the latest iphone model', 1999);
