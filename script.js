

const carName = document.getElementById('carName');
const carPrice = document.getElementById('carPrice');
const carKey = document.getElementById('carKey');
const retrieveID = document.getElementById('retrieve');
const carDetails = document.getElementById('carDetails');
const cName = document.getElementById('name');
const cPrice = document.getElementById('price');
const cKey = document.getElementById('key');
const remove = document.getElementById('remove');


function storeData() {
    if (carName.value == '' || carPrice.value == '' || carKey.value == '') {
        alert('Please enter all details');
    } else {
        const car = {};
        car.carName = carName.value;
        car.carPrice = carPrice.value;
        car.carKey = carKey.value;
        let key = carKey.value;
        localStorage.setItem(key, JSON.stringify(car));
        carKey.value = '';
        carName.value = '';
        carPrice.value = '';
        alert('Car details added');
    }
}

function retreiveData() {
    if (retrieveID.value == '') {
        alert('enter id pls');
    } else {
        if (retrieveID.value in localStorage) {
            let carObj = JSON.parse(localStorage.getItem(retrieveID.value));
            console.log(carObj);
            cName.innerHTML = `Brand name : ${carObj.carName}`;
            cPrice.innerHTML = `Car price : ${carObj.carPrice}`;
            cKey.innerHTML = `Key : ${carObj.carKey}`;
            carDetails.style.display = 'block';
        } else {
            alert('key not found');
            carDetails.style.display = 'none';
        }
    }
}

function removeData() {
    if (remove.value == '') {
        alert('enter id pls');
    } else {
        if (remove.value in localStorage) {
            localStorage.removeItem(remove.value);
            alert('Car details removed');
        } else {
            alert("this key doesn't found ");
        }
    }
}

function removeAll(){
    localStorage.clear();
    alert('All cleared')
}