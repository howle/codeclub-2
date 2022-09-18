export default {
fetch(request) {

 const _greets = {
    0: 'hello',
    1: 'bonjour',
    2: 'guten tag',
    3: 'hola', };   
const _earth = {
    0: 'mundo',
    1: 'world',
    2: 'monde',
    3: 'welt,', };   

!!(request)
return new Response(`${_greets[Math.floor(Math.random() * 4)]} ${request.method}  ${_earth[Math.floor(Math.random() * 4)]}`);


}
}
