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

// Câu 5
let ketqua5 = document.getElementById("ketqua5")
let tong = 0
function tinhTong(){
    let soN5 = document.getElementById("soN5").value;
    console.log(soN5);
    for(let i = 1; i <= soN5; i++){
        tong = tong + i
    }
    ketqua5.innerHTML +=tong
}

// Câu 6
let ketqua6 = document.getElementById("ketqua6")
let tongBP = 0
function tongBinhPhuong(){
    let soN6 = document.getElementById("soN6").value;
    console.log(soN6);
    for(let i = 1; i <= soN6; i++){
        tongBP = tongBP + i*i
    }
    ketqua6.innerHTML +=tongBP
}

// Câu 7
let ketqua7 = document.getElementById("ketqua7")
let tongLe = 0
function tongSoLe(){
    let soN7 = document.getElementById("soN7").value;
    console.log(soN7);
    for(let i = 1; i <= soN7; i+=2){
        tongLe = tongLe + i
    }
    ketqua7.innerHTML +=tongLe
}

// Câu 8
let ketqua8 = document.getElementById("ketqua8")
let kiemTraLe = true

function kiemTra(){
    let soN8 = document.getElementById("soN8").value;
    console.log(soN8);
    let check = 'YES'
    let a = String(soN8)
    for(i = 0; i<a.length; i++){
        if (a.charAt(i)%2==0){
            check = 'NO'
            break
        }
    } 
    ketqua8.innerHTML +=` ${check}`
}


