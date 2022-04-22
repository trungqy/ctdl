// 1. Linked list la gi?
// là 1 dạng cấu trúc dữ liệu trong đó chứa các phần tử liên kết với nhau bằng con trỏ

// 2. Tai sao phai tao ra linked list? No hon gi so voi array?

// 3. Props and cons (Uu nhuoc diem) cua linked list so voi array?
// 4. Stack la gi?
// 5. Queue la gi?
// 6. Tai sao khi xay dung stack & queue nen su dung linked list?


// ## DANH SÁCH LIÊN KẾT
// 1. Xây dựng cấu trúc dữ liệu danh sách liên kết đôi (double-linked list)
function createNode(value) {
    return {
        value : value,
        next : null,
        previous : null
    };
};
// 2. Lưu trữ danh sách các số 1,4,7,8 vào danh sách liên kết

class dbLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    insert(value) {
      this.length++;
      let newNode = createNode(value);
  
      if (this.tail) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        return newNode;
      }
  
      this.head = this.tail = newNode;
      return newNode;
    }

    remove(){
        if (this.tail) {
            this.length--;
      
            const removedTail = this.tail;
            const beforeTail = this.tail.previous;
      
            this.tail = beforeTail;
            if (this.tail) {
              this.tail.next = null;
            } else {
              this.head = null;
            }
      
            return removedTail;
          }
          return undefined;
    }

  

// 5. Viết hàm thêm phần tử vào đầu danh sách 
    insertHead(value) {
        this.length++;
        let newNode = createNode(value);
    
        if (this.head) {
          this.head.previous = newNode;
          newNode.next = this.head;
          this.head = newNode;
          return newNode;
        }
    
        this.head = this.tail = newNode;
        return newNode;
      }
    

      removeHead() {
        if (this.head) {
          this.length--;
          const removedHead = this.head;
          this.head = this.head.next;
          if (this.head) {
            this.head.previous = null;
          } else {
            this.tail = null;
          }
          return removedHead;
        }
        console.log("node xoa :",removedHead);
        return undefined;
      }


      print() {
        let current = this.head;
        while (current) {
          console.log(
            `${current.previous?.value} ${current.value} ${current.next?.value}`
          );
          current = current.next;
        }
      }

}


// 3. Viết hàm thêm một phần tử vào cuối danh sách
let linkedList = new dbLinkedList();
linkedList.insert(1);
linkedList.insert(4);
linkedList.insert(7);
linkedList.insert(8);
// 4. Thêm 9 vào cuối danh sách đã có

// linkedList.insert(9);

console.log(linkedList);

// 6. Thêm 5 vào đầu danh sách đã có
linkedList.insertHead(5);


// 7. Viết hàm xóa phần tử ở đầu danh sách & trả ra giá trị bị xóa
// linkedList.removeHead();
// console.log("giá trị bị xoá :" , linkedList.removeHead());

// 8. Xóa phần tử đầu tiên ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó

// 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
// 10. Xóa phần cuối cùng ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó

// linkedList.remove();
// console.log("giá trị bị xoá :" , linkedList.remove());

// ## STACK & QUEUE
// 11. Xây dựng cấu trúc dữ liẹu queue bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
class Queue{
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
      };
// 12. Viết hàm thêm phần tử vào queue: function enQueue(value)
      enQueue(el){
          let node = createNode(el);
          
          if (this.head== null){
              this.head = this.tail = node; 
          }else{
              this.tail.next = node;
              node.previous = this.tail;
              this.tail = node;
          }
          this.length++;
      }


      dequeue = () => {
        let current = this.head;
    
        if (current) {
          let elm = current.value;
          current = current.next;
          this.head = current;
          this.length--;
          return elm;
        }
    
        return null;
      };

}


// 13. Thêm các phần 1,3,6,7 vao queue
let queue = new Queue();
queue.enQueue(1)
queue.enQueue(3)
queue.enQueue(6)
queue.enQueue(7)
console.log("dequeue :",queue);
// 14. Viết hàm lấy phần tử ra khỏi queue: function deQueue(): value

// console.log("dequeue :",queue.dequeue());

// 1. Viết hàm tính chu vi hình chữ nhật

function chuViHCN(a, b) {
    return (a + b) * 2;
  }
  console.log("chi vi :" + chuViHCN(3, 5));
  
  // 2. Viết hàm tính diện tích hình chữ nhật
  
  function dienTichHCN(a, b) {
    return a * b;
  }
  console.log("dien tich :" + dienTichHCN(3, 3));
  // 3. Viết hàm xuất ra n số lẻ nhỏ nhất
  
  function nSoLeNhoNhat(n) {
    let arr = [];
    let dem = 0;
  
    for (let i = 0; arr.length < n; i++) {
      if (i % 2 != 0) {
        dem++;
        arr.push(i);
        if (dem == n) {
          break;
        }
      }
    }
    return arr;
  }
  
  console.log("n so le nho nhat :" + nSoLeNhoNhat(3));
  // 4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m.
  
  function soLeGanNhatNm(n, m) {
    let arr = [];
  
    for (let i = m; arr.length < n; i++) {
      if (i % 2 != 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  
  console.log("n so le tu m :" + soLeGanNhatNm(3, 7));
  
  // 5. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
  
  function soNguyenTo(n) {
    let dem = 0;
  
    for (let i = 1; i <= n; i++) {
      if (n % i == 0 && n >= 2) {
        dem++;
      }
    }
  
    if (dem == 2) {
      return true;
    } else {
      return false;
    }
  }
  console.log(soNguyenTo(7));
  
  // 6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất.
  
  function nSoNguyenTo(n) {
    let arr = [];
    let i = 0;
  
    while (arr.length < n) {
      if (soNguyenTo(i)) {
        arr.push(i);
      }
      i++;
    }
    return arr;
  }
  
  console.log("n so nguyen to" + nSoNguyenTo(4));
  
  // 7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
  //     - getLessThan(n): number[]
  //     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
  
  function lessThan(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
  console.log("nho hon n :" + lessThan(10));
  // 8. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng
  //     - find(arr, chuoiCanTim): number
  //     - Ví dụ find([1,2,3,2,5], 2) sẽ trả ra vi tri 1
  
  function find(arr, chuoiCanTim) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == chuoiCanTim) {
        return i;
      }
    }
  }
  console.log("find :" + find([1, 2, 4, 5, 6], 1));
  
  // 9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
  //     - filter (arr, chuoiCanTim): number
  //     - Ví dụ filter([1,2,3,2,5], 2) sẽ trả ra vi tri [1, 3]
  
  function filter(arr, chuoiCanTim) {
    let tam = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == chuoiCanTim) {
        tam.push(i);
      }
    }
    return tam;
  }
  
  console.log("filter :" + filter([1, 2, 1, 4, 5, 6], 1));
  // 10. Định nghĩa một mảng nhân viên gồm 2 thông tin: họ tên, tuổi bao gồm 5 nhân viên
  
  let nhanVien = [
    {
      name: "quy",
      age: 19,
    },
    {
      name: "bala",
      age: 10,
    },
    {
      name: "bale",
      age: 20,
    },
    {
      name: "basd",
      age: 22,
    },
    {
      name: "bala",
      age: 18,
    },
  ];
  // 11. Viết hàm sắp xếp tuổi nhân viên giảm dần
  //     - sortDesc(arr): arr
  //     - Ví dụ sortDesc([{name: 'hieu', age: 30}, {name:'tuan', age: 40}]) sẽ trả ra kết quả [{name:'tuan', age: 40}, {name: 'hieu', age: 30}]
  
  const sapXepTuoi = (mang) => {
    let tam = [];
    for (let i = 0; i < mang.length; i++) {
      for (let j = i + 1; j < mang.length; j++) {
        if (mang[i].age < mang[j].age) {
          tam = mang[i];
          mang[i] = mang[j];
          mang[j] = tam;
        }
      }
    }
    return mang;
  };
  
  console.log(`sap xep`, sapXepTuoi(nhanVien));
  
  // 12. Tìm trong mảng nhân viên có tuổi = x
  //     - find(arr, age: number): nhan_vien
  //     - Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}
  
  const timTheoTuoi = (mang, tuoi) => {
    let tam = [];
    for (let i = 0; i < mang.length; i++) {
      if (mang[i].age == tuoi) {
        tam.push(mang[i]);
      }
    }
    return tam;
  };
  
  console.log(`tim nhan vien`, timTheoTuoi(nhanVien, 19));
  


  // 1. (1 điểm) Viết hàm xuất ra số finbonaci tại vị trí n 
//     - finbonaci(n): number
//     - Đầu vào là vị trí n
//     - Đầu ra là giá trị số finbonaci tại vị trí n
//     - Ví dụ: Day finbonaci la: 1 1 2 3 5 8 thì finbonaci(5) = 5

function finbonaci(n) {
    if(n <= 1){
        return n
    }

    return  (finbonaci(n - 1) + finbonaci(n-2))

}
console.log("finbonaci :" +finbonaci(10));

// 2. (1 điểm) Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
//     - giaiThua(n): number

function giaiThua(n) {
    if(n == 1){
        return n
    }
    return (n*giaiThua(n-1))
}
console.log("giai thua : " +giaiThua(3));
    
// 3. (1 điểm) Viết thuật toán sắp xếp bubble sort
//     - function bubbleSort(arr: number[]): number[]
//     - Đầu vào là một mảng các số
//     - Đầu ra là một mảng các số đã được sắp xếp

function bubbleSort(arr) {
    
    for (let i = 0 ; i < arr.length; i++){
        for (let j = i+1; j< arr.length; j++){
            if(arr[i] < arr[j]){
                let tam = 0;
                tam = arr[i];
                arr[i] = arr[j];
                arr[j] = tam
            }
        }
    }
    return arr
}

// 4. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm bubbleSort để sắp xếp lại và trả ra kết quả
let mang = [5,4,2,7,6]
console.log(`bubbleSort `,bubbleSort([5,4,2,7,6]));



// 5. (1 điểm) Viết thuật toán tìm kiếm tuần tự 
//     - function linearSearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

function linearSearch(arr,soCanTim) {
       
       for(let i = 0 ; i < arr.length; i++){
           if(arr[i]==soCanTim){
            return i
           }
       }
}

// 6. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm linearSearch để tìm vị trí số 6 trong mảng
console.log("linearSearch " +linearSearch([5,4,2,7,6],6));

// 7. (2 điểm) Viết thuật toán tìm kiếm nhị phân
//     - function binarySearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

function binarySearch(arr,soCanTim) {
    let left = 0;
    let right = arr.length- 1
    let mid = 0
    let dem = 0
     
    while (left <= right){
        dem++
        mid = Math.floor((right+left)/2)
        if(soCanTim == arr[mid]){
            return mid
        }
        if(soCanTim > arr[mid]){
            left = mid + 1
        }else{
            right= mid - 1 
        }
    }
    return -1

}



// 8. (1 điểm) Cho mang [5,4,2,7,6] 
//     - Sử dụng hàm bubbleSort để sắp xếp lại
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 7 trong mảng

console.log("binary : " +binarySearch([5,4,2,7,6],7));

// 9. (1 điểm) Tạo ra mảng từ 1 -> 1048576 tăng dần từ nhỏ tới lớn. 
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 1048576 trong mảng, in ra màn hình số lần so sánh của thuật toán
//     - 1048576 = 2 ^ 20 => Kiểm tra xem số lần so sánh có phải bằng 20 không?


const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};
console.log(insertSort(array));