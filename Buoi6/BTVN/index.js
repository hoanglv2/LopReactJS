var a = prompt("Nhập số a:")
var b = prompt("Nhập số b:")
var c = prompt("Nhập số c:")
var delta = b*b-(4*a*c)

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Hãy nhập vào số!")
}
else if(a == 0) {
    if(b == 0){
        if(c == 0){
            alert("Phương trình có vô số nghiệm")
        }
        else{
            alert("Phương trình vô nghiệm")
        }
    }else {
        alert("Phương trình có nghiệm duy nhất x = "+(-c/b))
        }
}
else {
    if(delta > 0) {
        var x1 = (-b+Math.sqrt(delta))/(2*a);
        var x2 = (-b-Math.sqrt(delta))/(2*a);
        alert('Nghiệm thứ nhất x1 = '+x1+'\n Nghiệm thứ 2 x2 = '+x2)
    } else if ( delta == 0) {
        var sum = -b/2*a
        alert('Phương trình có nghiệm kép: x1 = x2 = '+sum)
    } else {
        alert('Phương trình vô nghiệm')
    }
}
    

    
