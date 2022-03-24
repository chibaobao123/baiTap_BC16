import { ThongTin } from "../models/ThongTin.js";

document.querySelector("#signup-form .actions ul li:last-child a").onclick =
  () => {
    let arrInp = document.querySelectorAll(
      "#signup-form input, #signup-form select"
    );
    // console.log(arrInp)

    let info = new ThongTin();
    //Duyệt các thẻ input

    for (let input of arrInp) {
      let { value, id } = input;
      info[id] = value;
    }

    // console.log(info);

    let html = "";
    let htmlBody = "";
    for (let key in info) {
      html += `
            
                <th scope="col" style="padding:10px">${key}</th>
            
        `;
      htmlBody += `
        
            <td>${info[key]}</td>
        
        `;
    }

    // console.log(html);
    document.querySelector("#thongTinCuaBan #thead").innerHTML = '<tr>'+ html +'</tr>';
    document.querySelector("#thongTinCuaBan #tbody").innerHTML = '<tr>'+ htmlBody +'</tr>';
  };
