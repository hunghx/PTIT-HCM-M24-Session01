// Bài toán : HIển thị các bình phương của 5 số tự nhiên đầu tiên > 0 : 1,2,3,4,5 (step)
// đánh giá , phân tích (for i)

for(let i = 1; i<=5 ; i++){
    console.log(`${i} có bình phương là ${Math.pow(i,2)}`);
}
// callback(gọi lại) function 
function printNumber( number , index , arrayOnlyRead){
    console.log("index = "+index);
    console.log(`${number} có bình phương là ${Math.pow(number,2)}`)
    arrayOnlyRead[1] =100;
    console.log("array",arrayOnlyRead);
}


// printNumber(8)
// sử dụng foreach() : áp dụng với mảng ;
let arr = [1,2,3,4,5];
// arr.forEach(printNumber);
// Nguyên lí hoạt động : 
// 1. foreach giúp lặp qua lần lượt các giá trị phần tử của mảng và
// truyền nó vào trong tham số của hàm callback
// 2. Tham số đầu tiên của hàm callback chính là giá trị của từng phần tử trong mảng,
// tham số thứ 2 là vị trí chỉ mục của phần tử đấy
// Arrow function
arr.forEach((number, index)=> {
    console.log("index = "+index);
    console.log(`${number} có bình phương là ${Math.pow(number,2)}`)
})

// Bài tập ứng dụng :
// Tạo mảng random có 10 số nguyên ngẫu nhiên từ 1-100;
// Sử dụng foreach 
let numberArray = [];
let array10 = [0,0,0,0,0,0,0,0,0,0];

array10.forEach(()=>{
    numberArray.push(Math.ceil(Math.random()*100))
})

// in ra
numberArray.forEach((number)=> {
    console.log(number)
})


// Map : duyệt qua lần lượt các phần tử và trả về 1 mảng khác
// dựa trên điều kiên của hàm callback

// hãy chuyển từ 1 mảng số nguyên thành 1 mảng lập phương của các phân tử đấy 
let numbers = [1,3,5,7,9];

let newArrayNumbers = numbers.map((element,index) => Math.pow(element,3))
// lưu ý khi sử dụng arrow function có khối lệnh thực thi thì bắt buộc cần từ khóa
// return bên trong khối lệnh

console.log(newArrayNumbers);

// áp dụng 
let a = 10 ; // ngôn ngữ chăt chẽ  (typescript)
a = array10.map(()=>Math.ceil(Math.random()*100));
console.log("array10 :",a); 

// filter : lọc theo điều kiện mà hàm call back return (true/false)
// Bài toán : lọc ra các số chia hết cho 3 ở trong mảng a;

let filterArray = a.filter((element) =>{
    element%3==0}) 
console.log(filterArray);

// Reduce : tích lũy - trả về giá trị tích sau khi lặp tất cả phần tử 

// tinh tổng
let sum = a.reduce((temp,element)=>temp+element,0)
console.log(sum);

// tính tích : {1,3,5,7,9}
let multi = numbers.reduce((temp,element)=>temp*element,1);
console.log("multi",multi);

// find/findIndex (tim kiếm phần tử , chỉ mục)
// tìm ra phần tử đầu tiên chia hết cho 5 trong mảng random 
let xxx = a.findIndex((element)=>element%5==0);
console.log(xxx);


// Bài tập 1 : In ra danh sách tên sinh viên áp dụng các hàm đã học (foreach, map)
let students = [
    // phím tắt : nhân dòng Shift+Alt+ Arrow down 
    {
        id: 1,
        name:"Nguyễn Văn A",
        age : 18
    },
    {
        id: 2,
        name:"Nguyễn Văn B",
        age : 18
    },
    {
        id: 3,
        name:"Nguyễn Văn C",
        age : 18
    },
    {
        id: 4,
        name:"Nguyễn Văn D",
        age : 18
    }
] 

// c1
students.forEach(element=>console.log(element.name))
// c2
let newStudents = students.map(element=>element.name);
// todo something with new Array
console.log(newStudents);
