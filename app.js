// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = [9, 17, 23, 5];
const array2 = array.filter((arr) => arr > 10);
console.log(array2);
// ค่าที่มากกว่า 10

const array = [1, 2, 3, 4];
const array2 = array.filter((arr) => {
  if (arr % 2 !== 0) {
    return arr;
  }
});
console.log(array2);
// ค่าที่เป็นเลขคี่

const array = [1, "1", 2, {}];
const array2 = array.filter((arr) => {
  if (typeof arr === "number") {
    return arr;
  }
});
console.log(array2);
// ค่าที่ประเภทข้อมูลเป็น Number
