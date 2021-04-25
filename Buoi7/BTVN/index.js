// Câu 1
let ketqua1 = document.getElementById("ketqua1")
let arr1 = []
function inSo(){
    let soN1 = document.getElementById("soN1").value;
    console.log(soN1);
    for(let i = 1; i <= soN1; i++){
        console.log(i);
        arr1.push(i);
        ketqua1.innerHTML += `${i} `;
    }
}

//Câu 2
let ketqua2 = document.getElementById("ketqua2")
let arr2 = []
function soLe(){
    let soN2 = document.getElementById("soN2").value;
    console.log(soN2);
    for(let i = 1; i <= soN2; i+=2){
        console.log(i);
        arr3.push(i);
        ketqua2.innerHTML += `${i} `;
    }
}

// Câu 3
let ketqua3 = document.getElementById("ketqua3")
let arr3 = []
function soChan(){
    let soN3 = document.getElementById("soN3").value;
    console.log(soN3);
    for(let i = 2; i <= soN3; i+=2){
        console.log(i);
        arr3.push(i);
        ketqua3.innerHTML += `${i} `;
    }
}

// Câu 4
let ketqua4 = document.getElementById("ketqua4")
let arr4 = []
// let soN4 = document.getElementById("soN4").value;
function kiemTra(soNguyenTo){
    let flag = true
    if (soNguyenTo == 2) {
        flag = true
    }
    else{
        if (soNguyenTo % 2 ==0) {
            flag = false
        } else{
        for (let index = 3; index <= Math.sqrt(soNguyenTo); index +=2) {
            if (soNguyenTo % index == 0) {
                flag = false
                
            } 
            
        }
    }
}
if (flag == true){
    return true
}
else return false
}
function soNguyenTo(){
    let soN4 = document.getElementById("soN4").value;
    console.log(soN4);
    for (i = 2; i <= soN4; i++){
        if (kiemTra(i) == true){
            console.log(i);
            arr4.push(i);
            ketqua4.innerHTML += ` ${i}`
        }
    }
}
