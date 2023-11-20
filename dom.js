// // getting the directory
// console.dir(document);
// console.log(document.URL);

// // Getting the title
// console.log(document.title);
// // Changing the title value
// document.title = "rish";
// console.log(document.title);

// // Getting the doctype, head element, boy element
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// // getting all elements
// console.log(document.all);
// // getting selected elements
// console.log(document.all[10]);

// // getting form
// console.log(document.forms);

// // getting all the links
// console.log(document.links);

// // selectors:
// // console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// console.log(headertitle);

// // Changing the text of the id element
// headertitle.textContent = "hello";

// // Innerhtml basically pays attention to the styling, 
// // for example if something is styled as display:none; it will not take it, but textContent will take it.
// headertitle.innerText = "hello";

// headertitle.innerHTML = '<h3>Hello</h3>';

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px black';

// var t = document.getElementsByClassName('title');
// console.log(t);
// t[0].style.fontWeight = 'bold';
// // t[0].style.backgroundColor = 'yellow';
// t[0].style.color = 'green';

// var lst = document.getElementsByClassName("list-group-item");

// for(var i =0; i< lst.length; i++){
//     lst[i].style.fontWeight = 'bold';
// }

// var tag = document.getElementsByTagName('li');
// console.log(tag);

// for(var i =0; i< tag.length; i++){
//     tag[i].style.fontWeight = 'bold';
// }


// query selector
var q1 = document.querySelector('#item2');
q1.style.backgroundColor = 'green';
var q2 = document.querySelector('#item3');
q2.style.display = 'none';

// QuerSelectorAll
var q = document.querySelectorAll('li');
q[1].style.backgroundColor = 'green';
for(var i = 0; i<q.length; i+=2){
    q[i].style.backgroundColor = 'green';
}
