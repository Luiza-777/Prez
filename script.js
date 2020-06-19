

let arr = JSON.parse(localStorage.getItem('dogs-list')) || [];
if (arr) {
    arr.forEach(elem => addDog(elem, false))
}
function addDog(form, setToLocalStorage) {
    // let nameInput = document.createElement('input');
    // let breedInput = document.createElement('input');
    // nameInput.value = form.name.value;
    // breedInput.value = form.breed.value;
    // nameInput.readOnly = true;
    // breedInput.readOnly = true;
    let dogObj;
    if (setToLocalStorage) {
        dogObj = {
            name: form.name.value,
            breed: form.breed.value,
        };
        arr.push(dogObj);
    } else {
        dogObj = form;
    }
    let li = document.createElement('li');
    li.classList.add('dogs-list-items');
    let content = document.createTextNode('name: ' + dogObj.name + ', breed: ' + dogObj.breed);
    li.appendChild(content);
    document.getElementById('dogs-list').appendChild(li);
    localStorage.setItem('dogs-list', JSON.stringify(arr));
}