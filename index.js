// Bài 1
/** Mô hình 3 khối
 *
 * đầu vào:
 * + Lương 1 ngày
 * + Số ngày làm
 *
 * xử lí:
 * - Công thức: Lương 1 ngày (100.000) * Số ngày làm
 *
 * đầu ra:
 * - Số tiền lương nhân viên dựa trên công thức trên
 *
 */
document.getElementById("tinhTienLuong").onclick = function () {
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let = tongTienLuong = 0;
  tongTienLuong = soNgayLam * 100000;

  document.getElementById(
    "ketQuaBaiTap1"
  ).innerHTML += `Tiền lương tháng này của bạn là ${tongTienLuong.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "vnd",
    }
  )}`;
};

// Bài 2
/** Mô hình 3 khối
 *
 * đầu vào:
 * + Số thứ 1
 * + Số thứ 2
 * + Số thứ 3
 * + Số thứ 4
 * + Số thứ 5
 *
 * xử lí:
 * - Công thức: (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
 *
 * đầu ra:
 * - Số trung bình của 5 số trên
 */
document.getElementById("tinhGiaTriTrungBinh").onclick = function () {
  let soThu1 = document.getElementById("soThu1").value * 1;
  let soThu2 = document.getElementById("soThu2").value * 1;
  let soThu3 = document.getElementById("soThu3").value * 1;
  let soThu4 = document.getElementById("soThu4").value * 1;
  let soThu5 = document.getElementById("soThu5").value * 1;
  let giaTriTrungBinh = 0;

  giaTriTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

  document.getElementById(
    "ketQuaBaiTap2"
  ).innerHTML += `Giá trị trung bình của các số trên là: ${giaTriTrungBinh}`;
};

// Bài 3
/** Mô hình 3 khối
 *
 * đầu vào:
 * - Số tiền giá trị USD
 *
 * xử lí:
 * - Gắn hàm toLocalString vô để biến đổi về giá trị tiền VND
 *
 * đầu ra:
 * - Số tiền giá trị VND
 *
 */
document.getElementById("doiRaTien").onclick = function () {
  let doiTien = document.getElementById("doiTien").value * 1;
  let luuTruKetQua = 0;

  luuTruGiaTri = (doiTien * 23500).toLocaleString("vi", {
    style: "currency",
    currency: "vnd",
  });

  document.getElementById(
    "ketQuaBaiTap3"
  ).innerHTML += `Số tiền ${doiTien}$ đổi ra tiền Việt là: ${luuTruGiaTri}`;
};

// Bài 4
/** Mô hình 3 khối
 *
 * đầu vào:
 * + Chiều dài
 * + Chiều rộng
 *
 * xử lí:
 * + Công thức chu vi: (dai + rong) * 2
 * + Công thức diện tích: dai * rong
 *
 * đầu ra:
 * - Giá trị chu vi và diện tích
 *
 */
document.getElementById("tinh").onclick = function () {
  let dai = document.getElementById("dai").value * 1;
  let rong = document.getElementById("rong").value * 1;
  let chuVi = 0;
  let dienTich = 0;

  chuVi = (dai + rong) * 2;
  dienTich = dai * rong;

  document.getElementById(
    "ketQuaBaiTap4"
  ).innerHTML += `Diện tích: ${dienTich}, Chu vi: ${chuVi}`;
};

// Bài 5
/** Mô hình 3 khối
 *
 * đầu vào:
 * - Nhập số có 2 chữ số
 *
 * xử lí:
 * + Lấy ra chữ số hàng đơn vị và hàng chục
 * + Công thức: hangDonVi + hangChuc
 *
 * đâù ra:
 * - Xuất ra tổng của 2 ký số trên
 *
 */
document.getElementById("tinhTong2KySo").onclick = function () {
  let nhap2ChuSo = document.getElementById("nhap2ChuSo").value * 1;
  let soHangDonVi = nhap2ChuSo % 10;
  let soHangChuc = Math.floor(nhap2ChuSo / 10);
  let tong = 0;

  tong = soHangDonVi + soHangChuc;

  document.getElementById(
    "ketQuaBaiTap5"
  ).innerHTML += `Tổng ký số của số trên là: ${tong}`;
};
