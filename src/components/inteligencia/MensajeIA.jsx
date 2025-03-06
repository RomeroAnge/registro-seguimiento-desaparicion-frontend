import { useState, useEffect, useRef } from 'react';

function GeminiAIComponent() {
  const [text, setText] = useState("");
  const [conversation, setConversation] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    fetch('http://127.0.0.1:8000/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    })
      .then(res => res.json())
      .then(data => {
        const message = data.message || "Error: No se recibió respuesta válida.";
        setConversation(prev => [
          ...prev,
          { type: 'user', message: text },
          { type: 'bot', message: message }
        ]);
        setText('');
      })
      .catch(err => {
        console.error('Error al generar el contenido:', err);
        setConversation(prev => [
          ...prev,
          { type: 'bot', message: `Error: ${err.message}` }
        ]);
      });
  };

  return (
    <div className="bg-gray-100  flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
        <div ref={chatContainerRef} className="h-96 overflow-y-scroll p-4 space-y-4">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-500 text-white self-end text-right' : 'bg-gray-200 text-black self-start text-left'}`}
            >
              <strong>{msg.type === 'user' ? 'Tú' : 'Bot'}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex p-4 border-t">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe algo..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default GeminiAIComponent;