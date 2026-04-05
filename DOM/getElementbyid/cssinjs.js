// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(section);
for(const section of sections){
    console.log(section);
    section.style.backgroundColor = 'ligthtblue';
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';

}