function fetchNumberFromAPI() {   //function การยิง request ไปเอาค่าจากด้านนอกกลับมา โดยไม่สามารถกำหนดค่าได้
  return Math.random() * 100;
}

export {fetchNumberFromAPI}
