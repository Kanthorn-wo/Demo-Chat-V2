# ChatBot React TypeScript

## เกี่ยวกับโปรเจค
โปรเจคนี้เป็นการสร้าง ChatBot โดยใช้ React และ TypeScript ซึ่งมีการเชื่อมต่อกับ OpenAI API ผ่าน Axios เพื่อสร้างข้อความตอบกลับตามที่ผู้ใช้ส่งเข้ามา

## คุณสมบัติเด่น
- **พิมพ์ข้อความโต้ตอบได้แบบ Real-time**
- **รองรับการกด Enter เพื่อส่งข้อความ**
- **แสดงข้อความ "กำลังคิด..." ระหว่างที่รอการตอบกลับ**
- **เชื่อมต่อ OpenAI API เพื่อให้บอทตอบกลับอัตโนมัติ**

## เทคโนโลยีที่ใช้
- React (TypeScript)
- Axios
- OpenAI API

## การติดตั้งและใช้งาน
### 1. Clone โปรเจค
```bash
git clone https://github.com/username/repository-name.git
```

### 2. ติดตั้ง dependencies
```bash
cd repository-name
npm install
```

### 3. ตั้งค่า API Key
สร้างไฟล์ `.env` ใน root directory และเพิ่ม API Key ดังนี้
```
VITE_SECRET_KEY_API=your_openai_api_key
```

### 4. รันโปรเจค
```bash
npm run dev
```

## การใช้งาน
1. เปิดโปรเจคผ่านเบราว์เซอร์ (ที่ localhost ตามที่ Dev server กำหนด)
2. พิมพ์ข้อความในช่อง input และกด Enter หรือกดปุ่ม "ส่ง"
3. รอรับข้อความตอบกลับจาก ChatBot

## โครงสร้างไฟล์
```
/
├── src
│   ├── components
│   │   └── ChatBot.tsx  // โค้ดหลักของ ChatBot
│   └── App.tsx          // Main App
├── public
│   └── index.html       // Entry point
└── .env                 // เก็บ API Key
```

## หมายเหตุ
- โปรเจคนี้ออกแบบเพื่อการศึกษาและทดลองการใช้งาน API เท่านั้น
- API Key ควรเก็บเป็นความลับและไม่ควรเปิดเผยในที่สาธารณะ

## ผู้จัดทำ
- [Your Name](https://github.com/username)

หากมีข้อสงสัยหรือข้อเสนอแนะ สามารถเปิด Issue หรือ Pull Request ได้เลยครับ! 😊

