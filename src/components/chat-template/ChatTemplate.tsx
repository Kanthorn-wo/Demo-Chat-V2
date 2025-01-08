import React, { useState } from 'react';
import axios from 'axios';

// เก็บ API Key ไว้ที่ .env หรือ Config
const apiKey = import.meta.env.VITE_SECRET_KEY_API;
console.log(apiKey);
const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([
        "สวัสดีครับ! 😊 ถามอะไรได้เลย"
    ]);
    const [userInput, setUserInput] = useState<string>("");

    // ส่งข้อความ
    const sendMessage = async () => {
        if (!userInput.trim()) return;

        // เพิ่มข้อความของผู้ใช้ลงใน chat
        const newMessages = [...messages, userInput];
        setMessages(newMessages);
        setUserInput("");

        // เพิ่มข้อความรอ
        setMessages((prev) => [...prev, "กำลังคิด..."]);

        // เรียก API ของ OpenAI
        const response = await getGPTResponse(userInput);

        // ลบข้อความ "กำลังคิด..." และเพิ่มข้อความของบอท
        setMessages((prev) => {
            const updatedMessages = [...prev];
            updatedMessages.pop(); // ลบข้อความ "กำลังคิด..."
            return [...updatedMessages, response];
        });
    };

    // เรียก API ของ OpenAI ผ่าน Axios
    const getGPTResponse = async (message: string): Promise<string> => {
        const apiUrl = "https://api.openai.com/v1/chat/completions";
        const requestBody = {
            model: "gpt-4o-mini",
            store: true,
            messages: [{ role: "user", content: message }]
        };

        try {
            const response = await axios.post(apiUrl, requestBody, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                }
            });

            return response.data.choices[0]?.message.content.trim() || "ไม่มีการตอบกลับจากบอท";
        } catch (error) {
            console.error("Error:", error);
            return "ขอโทษครับ เกิดข้อผิดพลาดในการเชื่อมต่อ 😢";
        }
    };

    // กด Enter เพื่อส่งข้อความ
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box" id="chat-box">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            index % 2 === 0 ? "bot-message" : "user-message"
                        }
                    >
                        {msg}
                    </div>
                ))}
            </div>
            <div className="input-box">
                <input
                    type="text"
                    id="user-input"
                    placeholder="พิมพ์ข้อความที่นี่..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={sendMessage}>ส่ง</button>
            </div>
        </div>
    );
};

export default ChatBot;
