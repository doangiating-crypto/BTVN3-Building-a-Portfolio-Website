# Danh Sách Các Câu Lệnh Prompt Sử Dụng Trong Dự Án Portfolio (AI_PROMPTS.md)

Tài liệu này tổng hợp toàn bộ các câu lệnh prompt (yêu cầu) đã sử dụng trong suốt quá trình xây dựng dự án Portfolio cá nhân bằng ReactJS và Vite. Các yêu cầu được phân loại chi tiết theo từng bước phát triển để nộp kèm bài tập.

---

## 📌 Bước 1: Khởi Tạo Cấu Trúc Thư Mục & Tệp Gốc
*   **Mục tiêu**: Xây dựng khung thư mục chuẩn Component cho dự án ReactJS (Vite) và viết mã nguồn cơ bản cho `App.jsx`.
*   **Prompt sử dụng**:
    > "Tôi đang làm bài tập ReactJS bằng Vite. Hãy tạo cấu trúc thư mục chuẩn Component cho dự án Portfolio bao gồm các thư mục con trong src: components, hooks, styles, assets. Viết mã nguồn cho file src/App.jsx cấu trúc cơ bản gọi các Component: Header, Hero, About, Projects, Contact. Đảm bảo đặt tên hàm và file theo chuẩn camelCase và PascalCase."

---

## 📌 Bước 2: Thiết Kế Custom Hook Quản Lý Đổi Giao Diện (Dark/Light Mode)
*   **Mục tiêu**: Triển khai logic lưu trữ theme được chọn vào `localStorage` và cập nhật trực tiếp class `dark` lên thẻ `body` để đổi màu giao diện.
*   **Prompt sử dụng**:
    > "Tính năng Dark/Light Mode
    > Viết một custom hook useTheme hoặc xử lý trực tiếp trong App.jsx bằng useState và useEffect để quản lý chế độ Sáng/Tối. Khi người dùng click nút đổi chế độ ở Header, hệ thống sẽ thêm/xóa class dark ở thẻ body và lưu trạng thái vào localStorage. Đảm bảo khi reload trang, chế độ đã chọn vẫn được giữ nguyên"

---

## 📌 Bước 3: Phát Triển Component Header (Thanh Điều Hướng)
*   **Mục tiêu**: Thiết kế Header cố định trên đỉnh trang khi cuộn, có logo thương hiệu, liên kết cuộn mượt và nút bấm đổi giao diện.
*   **Prompt sử dụng**:
    > "Hãy viết component Header.jsx. Sử dụng position: sticky hoặc fixed để cố định ở đỉnh trang khi cuộn. 
    > Giao diện gồm: Bên trái: Tên thương hiệu/Logo hiển thị chữ 'Đoàn Gia Tiến'. Bên phải: Menu điều hướng (Home, About, Projects, Contact) sử dụng hiệu ứng cuộn mượt mà (smooth scroll) và một nút bấm chuyển đổi chế độ Dark/Light Mode"

---

## 📌 Bước 4: Xây Dựng Component Hero & About (Bản Sơ Khởi)
*   **Mục tiêu**: Tạo thông tin cá nhân cơ bản và danh sách các kỹ năng dưới dạng thẻ badge bằng cách sử dụng các cú pháp ES6 tiên tiến.
*   **Prompt sử dụng**:
    > "Create Hero.jsx and About.jsx components. The Hero section should include my name, a professional Frontend Developer slogan, a profile picture, and a 'Download CV' button. The About section should contain a short self-introduction and a list of skills displayed as small badges (HTML, CSS, ReactJS, Tailwind CSS). Use ES6 Arrow Functions and Destructuring syntax throughout the components"

---

## 📌 Bước 5: Triển Khai Danh Sách Dự Án Với Bộ Lọc Tìm Kiếm (Projects Component)
*   **Mục tiêu**: Tạo grid danh sách dự án kèm ô tìm kiếm theo tiêu đề và ô chọn (dropdown) lọc theo ngôn ngữ công nghệ.
*   **Prompt sử dụng**:
    > "Create a Projects.jsx component. Define an array of project data containing the following fields: image, title, short description, technologies used, and GitHub link. Use useState to implement a search bar that filters projects by title and a filter dropdown that filters by technology. Display the projects in a responsive Grid Layout using cards, and update the displayed results dynamically as the user types or selects a filter"

---

## 📌 Bước 6: Xây Dựng Biểu Mẫu Liên Hệ Theo Chuẩn Controlled Component (Contact Component)
*   **Mục tiêu**: Tạo form thu thập ý kiến người dùng với các ràng buộc bắt buộc nhập và đúng định dạng email, đồng thời hiển thị thông báo thành công.
*   **Prompt sử dụng**:
    > "Create a Contact.jsx component using the Controlled Component pattern. The form should include the following input fields: Full Name, Email, and Message. Use the onChange event to update the component state and onSubmit together with e.preventDefault() to prevent page reload. Implement form validation to ensure that all fields are required and the email address follows a valid format. Display a success message using either an alert() or a modern popup after successful validation"

---

## 📌 Bước 7: Thiết Kế Layout Responsive & Giao Diện Dark Mode (Bản Sơ Khởi)
*   **Mục tiêu**: Kết hợp Flexbox và CSS Grid tạo layout co giãn đa thiết bị, bổ sung hiệu ứng neon và chuyển cảnh mượt.
*   **Prompt sử dụng**:
    > "Create a global.css file that uses a combination of Flexbox and CSS Grid to build a fully responsive layout for all components across mobile, tablet, and desktop devices. Use CSS Variables to define the color palette for Dark Mode. Design the interface with a modern, creative, and elegant style by adding smooth hover transitions, subtle neon box shadows for project cards, and fade-in animations as elements appear while scrolling"

---

## 📌 Bước 8: Tối Ưu Hóa & Cập Nhật Nội Dung Cho Hero & About (Bản Hoàn Thiện)
*   **Mục tiêu**: Điều chỉnh lại slogan nghề nghiệp, tích hợp hình minh họa lập trình dạng Vector (SVG), đổi nút tải CV thành liên kết cuộn tới phần liên hệ, và cập nhật tiểu sử sinh viên cùng kỹ năng nòng cốt.
*   **Prompt sử dụng**:
    > "Completely rewrite the code for Hero.jsx and About.jsx using ES6 Arrow Function syntax.
    > 
    > Hero:
    > 
    > Change the name to Đoàn Gia Tiến.
    > Use the following slogan:
    > 'Aspiring Software Engineer Student | Learning by Building Real Projects | Code. Learn. Improve. Repeat.'
    > Replace the profile picture with a visually appealing programming-themed placeholder image.
    > Remove the 'Download CV' button entirely and replace it with a 'Contact Me' button that smoothly scrolls to the Contact section.
    > 
    > About:
    > 
    > Replace the introduction with the following paragraph:
    > 
    > 'I'm a first-year Software Engineering student passionate about software development and web technologies. I enjoy learning by building real projects and continuously improving my programming skills. Currently, I'm exploring frontend development while strengthening my foundation in computer science, algorithms, and modern web technologies. I'm always eager to learn, collaborate, and take on new challenges that help me grow as a future software engineer.'
    > 
    > Display only the following four skill badges:
    > C++
    > HTML
    > CSS
    > ReactJS."

---

## 📌 Bước 9: Thiết Lập Danh Sách Dự Án Đơn & Địa Chỉ Email Nhận Tin Mới
*   **Mục tiêu**: Giới hạn danh sách dự án thành 1 bài tập môn học duy nhất và điều chỉnh biểu mẫu liên hệ thông báo gửi về địa chỉ gmail cá nhân.
*   **Prompt sử dụng**:
    > "Completely rewrite Projects.jsx and Contact.jsx.
    > 
    > Projects:
    > 
    > Remove all existing projects.
    > Create a single project with the following information:
    > Title: Building a Portfolio Website
    > Description: 'This project is part of the Web Programming course assignment at WebDev Studio.'
    > Technologies: HTML, CSS, ReactJS
    > Keep the existing search functionality (using useState) and technology filter.
    > 
    > Contact:
    > 
    > Keep the Controlled Component pattern and form validation logic.
    > After successful form submission, display a modern popup notification informing the user that the message has been successfully sent to doangiating@gmail.com."

---

## 📌 Bước 10: Tái Cấu Trúc CSS Theo Xu Hướng Bento Grid & Tone Màu tajmirul.site (Bản Hoàn Thiện)
*   **Mục tiêu**: Thiết kế lại toàn bộ CSS với giao diện tối tối giản (Deep Black #030014), chữ trắng xám dịu mắt, dải màu gradient tím neon sang xanh cyan, các thành phần kính mờ (Glassmorphism) và sắp đặt khối kiểu Bento Grid thời thượng.
*   **Prompt sử dụng**:
    > "Completely rewrite the global.css file using Flexbox and CSS Grid to create a fully responsive layout.
    > 
    > Design the interface with a modern dark minimalist aesthetic inspired by tajmirul.site.
    > 
    > Color Scheme:
    > 
    > Background: Deep black (#030014)
    > Primary text: Soft off-white (#f3f4f6)
    > Accent: Gradient from Neon Purple (#a855f7) to Cyan (#06b6d4)
    > 
    > Visual Effects:
    > 
    > Apply a Glassmorphism design (semi-transparent blurred background with subtle borders) to the header and all cards.
    > Add a soft purple/cyan glow effect when hovering over cards and buttons.
    > 
    > Layout:
    > 
    > Build the About and Projects sections using an asymmetrical Bento Grid layout to create a premium, modern appearance.
    > Ensure the design is fully responsive across mobile, tablet, and desktop devices.
    > Include smooth transitions, subtle animations, and consistent spacing to achieve a polished user experience."
