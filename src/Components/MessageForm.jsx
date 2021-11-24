import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);      
  };

  const handleSubmit = (event) => {
    event.preventDefault();   // Avoid page reloading on submit
      
    const text = value.trim();

    if (text.length > 0) {
     sendMessage(creds, chatId, { text });
     sendMessageAPI({name: localStorage.getItem('username'), message: text})
    }

    setValue('');
  };

  const handleUpload = (event) => {
   sendMessage(creds, chatId, { files: event.target.files, text: '' });
   console.log(localStorage.getItem('username'))
   sendMessageAPI({name: localStorage.getItem('username'), message: ''})
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        // placeholder="Send a message..."
        value={value}
        onChange={handleChange}     // To implement isTyping function
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

function sendMessageAPI(message)
{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
  };
  fetch('https://discusso-app.herokuapp.com/messages', requestOptions)
}
export default MessageForm;