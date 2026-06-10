import { useState } from "react"

function ChatPage(){

    const [messages,setMessages] = useState([
        {
            sender:"bot",
            text:"Hello Beautiful 💖 How can we help you today?"
        }
    ])

    const [input,setInput] = useState("")

    const sendMessage = ()=>{

        if(input.trim()==="") return

        setMessages([
            ...messages,
            {
                sender:"user",
                text:input
            },
            {
                sender:"bot",
                text:"Our support team will assist you shortly ✨"
            }
        ])

        setInput("")
    }

    return(

        <div className="chat-page">

            <h1>
                GlowCart Support 💬
            </h1>

            <div className="chat-window">

                {

                    messages.map((msg,index)=>(

                        <div
                            key={index}
                            className={
                                msg.sender==="user"
                                ? "user-msg"
                                : "bot-msg"
                            }
                        >

                            {msg.text}

                        </div>

                    ))

                }

            </div>

            <div className="chat-input-area">

                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />

                <button onClick={sendMessage}>
                    Send
                </button>

            </div>

        </div>

    )

}

export default ChatPage