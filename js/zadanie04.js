//1
const tags = document.getElementsByClassName('sample_class');

const getTagsOfElements = (elements) => [...elements].map(el => el.tagName);

console.log(getTagsOfElements(tags));

//2
const sampleElement = document.getElementById('sample_id');

const getClassesOfElement = (element) => Array.from(element.classList);

console.log(getClassesOfElement(sampleElement));

//3
const listElements = document.querySelectorAll('.sample_class_2 li');

const getInnerTextsOfElements = (elements) => [...elements].map(el => el.innerText);

console.log(getInnerTextsOfElements(listElements));

//4
const links = document.getElementsByTagName('a');

const getAddressesOfElements = (elements) => [...elements].map(el => el.href);

console.log(getAddressesOfElements(links));

//5
const childrenOfCl3 = document.querySelectorAll('.sample_class_3>*');
console.log(getTagsOfElements(childrenOfCl3));
