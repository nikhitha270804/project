console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "amazon"
console.log(document.body);
console.log(document);

let img = document.images
console.log(img)

for(let i=0; i<=img.length; i++)
{
    console.log(img[i]);
    img[i].style.height = "200px"
    img[i].style.width = "200px"
    img[i].style.borderRadius = "200px"
    img[i].alt = "image"

}
//in-direct access in dom (methods in dom)
// 1) document. getElementById("value")
// 2) document getElementsByClassName ("value")
// 3) document getElementsByTagName ("value")
// 4) document. getElementsByName("value")
// 5) document. querySelector ("value")
// 6) document. querySelectorA11("value")
let a = document.getElementById("demo")
console.log(a)
console.log(a.textContent);
a.textContent = "batch5"
a.style.backgroundColor = "red"
a.style.textAlign = "content"