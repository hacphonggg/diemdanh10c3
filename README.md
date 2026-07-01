# Điểm danh lớp 10C3

Trang web giúp giáo viên điểm danh học sinh nhanh, tự động tạo báo cáo gửi nhà trường (dán vào Zalo).

## Cách dùng

1. Mở file **`index.html`** bằng trình duyệt (Chrome, Cốc Cốc, Safari... trên máy tính hoặc điện thoại).
   - Không cần internet, không cần cài đặt gì thêm.
2. Danh sách lớp 10C3 đã có sẵn. Mặc định tất cả **Có mặt**.
3. Ở cột **Điểm danh** bên phải: học sinh nào **vắng** thì **gạt tắt** công tắc (chuyển sang màu xám / "Vắng"). Học sinh có mặt để nguyên (màu xanh).
4. Kéo xuống mục **Bảng tổng hợp** để xem: sĩ số, số vắng theo từng chế độ (NT / BT / 2B), và số suất **Ăn trưa**.
5. Mục **Báo cáo gửi nhà trường**: nội dung tự động cập nhật. Bấm **📋 Copy nội dung** rồi dán vào Zalo.

## Các nút tiện ích

- **📥 Import Excel**: tải danh sách lớp khác từ file Excel (định dạng giống file gốc: cột STT, họ tên, và cột chế độ NT/BT/2B). Danh sách import sẽ được ghi nhớ cho lần sau.
- **✔️ Tất cả có mặt** / **Bỏ hết**: đặt nhanh trạng thái cho cả lớp.
- **🔍 Tìm học sinh**: lọc theo tên.
- **📅 Ngày**: đổi ngày điểm danh. Trạng thái điểm danh được lưu tự động theo từng ngày trên máy.

## Quy tắc tính toán

- **Vắng**: học sinh bị gạt tắt (không có mặt).
- **Ăn trưa**: chỉ tính học sinh **Nội trú (NT)** và **Bán trú (BT)** đang **có mặt** (học sinh 2 buổi và học sinh vắng không tính suất ăn).
- Tên trong báo cáo hiển thị rút gọn (tên đệm cuối + tên) kèm chế độ, ví dụ `Phúc An BT`.

## Ví dụ báo cáo

```
Lớp 10C3
SS: 33/39
Vắng: 6 (Phúc An BT, Bảo Long BT, Gia Huy NT, Thiên Phú BT, Trường Thịnh BT, Gia Khiêm BT)
Ăn trưa: 32
```

## Cấu trúc file

- `index.html` — toàn bộ ứng dụng (giao diện + xử lý + danh sách lớp nhúng sẵn).
- `vendor/xlsx.full.min.js` — thư viện đọc file Excel (chạy offline).
