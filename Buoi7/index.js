//switch key
// let key = 1
// switch(key){
//     case 0: {
//         console.log(1)
//     }
//     case 1:{
//         console.log(2);
//         break
//     }
//     case 2: {
//         console.log(3);
//     }
// }
// for(let i = 0; i < 1000; i++){
//     for (j = 0; j<1000; j++){
//         console.log("i,j", i, j);
//     }
// }

// Nhập 1 số tự nhiên, in ra các số lẻ từ 0 đến số đó
// let so = prompt("Nhap vao so tu nhien");
// for (let i = 0; i <= so; i++) {
//     if (i%2 ==  1){
//         console.log(i);
//     }
    
// }
let soNguyenTo = 9
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
let check = kiemTra(soNguyenTo)

if (kiemTra(soNguyenTo) == true) {
    console.log('Day la so nguyen to');
}
else{
    console.log('Day khong phai so nguyen to')
}
// function hello(name, age, sex){
//     alert(`Xin chao ${name} ${age} ${sex}`)
// }
// //function nếu có return vai trò giống như 1 biến
// hello('Tung', 22, 'male')