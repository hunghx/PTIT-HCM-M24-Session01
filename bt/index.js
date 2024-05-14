


// function insertArray(array1,array2,index){
//     // hàm khác 
//     array1.splice(index,0,...array2); // vị trí cần chèn trong mảng arr1
//     // ... là spread operator (chèn các phần tử vào vị trí xác định) 
//    console.log(array1);
//     return array1;
// }

// console.log(insertArray([1,2,3],[4,5,6],1));



// Bài 11 

const products = [
    {id:1, name :"sp1" , price :100 , stock: 100 }, 
    {id:2, name :"sp2" , price :90 , stock: 100 },
    {id:3, name :"sp3" , price :150 , stock: 100 }
];

 // lưu trữ sp và số lượng mua cartitem {pro: sản phẩm , quantity : soluongmua} 
const cart= [
    {pro: {id:1, name :"sp1" , price :100 , quantity: 100 } , quantity : 1},
    {pro: {id:2, name :"sp2" , price :90 , quantity: 100 } , quantity : 15} // 20
]

// proIds =[
//     1,2
// ]
// Hàm thay đổi số lượng có 3 tham số là id sản phẩm, số lượng mới và mảng sản phẩm, khi gọi hàm thì thay đổi số lượng của sản phẩm đó trong mảng.
function changeQuantity(proId, newQuantity) {
    // b1 kiểm tra sự tồn tại của sp trong giỏ hảng 
    let index = indexOfProductInCart(proId);
    if(index != -1){
        // lưu lại số lượng cũ
        let oldQuantity = cart[index].quantity;
        // tìm thấy và có thẻ thay đổi số lượng
        cart[index].quantity = newQuantity ; // số lượng mới cần cập nhật
        //  cập nhật lại số lương trong kho
        let indexPro = indexOfProductInProducts(proId);
        products[indexPro].stock = products[indexPro].stock - newQuantity + oldQuantity;
    }
}
function indexOfProductInCart(proId) {
        // chuyển đổi [cartitem] thành [proid]
        // let proIds = cart.map(cartItem=>cartItem.pro.id)
        // return proIds.indexOf(proId)  // ko tìm thấy trả về -1
        return cart.findIndex((cartItem)=>cartItem.pro.id==proId); // vị trí đầu tiên mà nó tìm được
}
function indexOfProductInProducts(proId) {
    return products.findIndex((pro)=>pro.id==proId); // vị trí đầu tiên mà nó tìm được
}
// tạo hàm lấy ra index của sản phẩm cần chỉnh sửa số lượng 
// Hàm xóa sản phẩm có 2 tham số là id sản phẩm và mảng sản phẩm, khi gọi hàm thì xóa sản phẩm đó trong mảng.

// Hàm tính giá có tham số là mảng sản phẩm và kết quả trả về là tổng giá các sản phẩm trong mảng.

console.log(cart);
changeQuantity(1,50);
changeQuantity(2,30);
console.log("new products",products);
console.log("new cart",cart);

// tính giá
let total =cart.reduce((sum,cartItem)=>sum+cartItem.pro.price*cartItem.quantity,0)
console.log(total);