// const ajax = new XMLHttpRequest();
const host = "http://localhost:8080";
// ajax.open("get", host + "/mock");
// ajax.setRequestHeader("Content-Type", "application/json");
// ajax.addEventListener("load", (ev) => {
//     console.log(JSON.parse(ev.target.response));
// });
// ajax.send();

const newMock = {
    name: "Inna",
    age: "25"
};
const post = new XMLHttpRequest();
post.open("post", host + "/mock");
post.setRequestHeader("Content-Type", "application/json");
post.send(JSON.stringify(newMock));
