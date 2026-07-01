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

## Cài lên iPhone như một ứng dụng (PWA)

Ứng dụng hỗ trợ cài lên màn hình chính, chạy toàn màn hình và offline:

1. Đưa dự án lên **GitHub Pages** để có đường link (xem mục dưới).
2. Trên iPhone, mở link bằng **Safari**.
3. Bấm nút **Chia sẻ** (ô vuông có mũi tên) → **Thêm vào MH chính** → **Thêm**.
4. Icon "Điểm danh" xuất hiện ngoài màn hình, bấm vào dùng như app.

## Bật GitHub Pages (miễn phí)

1. Repo → **Settings** → **Pages**.
2. Branch: chọn **main** → thư mục **/(root)** → **Save**.
3. Chờ ~1 phút, link có dạng `https://<tài-khoản>.github.io/diemdanh10c3/`.

## Cấu trúc file

- `index.html` — toàn bộ ứng dụng (giao diện + xử lý + danh sách nhúng sẵn).
- `vendor/xlsx.full.min.js` — thư viện đọc file Excel (chạy offline).
- `manifest.webmanifest` — khai báo để cài thành app (tên, icon…).
- `sw.js` — service worker giúp mở app khi không có mạng.
- `icons/` — bộ icon của app.
