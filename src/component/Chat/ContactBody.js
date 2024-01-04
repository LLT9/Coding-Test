import './ContactBody.css'

const ContactName = ({ name }) => {
  return (
    <span className="contact-name"> { name } </span>
  )
}

const ContactMessage = ({ message }) => {
  return (
    <span className="contact-message"> { message } </span>
  )
}

const ReceiveTime = ({ receiveTime }) => {
  const dateTime = new Date(receiveTime);

  const hour = `${dateTime.getHours()}`.padStart(2, "0");
  const minute = `${dateTime.getMinutes()}`.padStart(2, "0");

  const dateTimeStr = `${hour}:${minute}`

  return (
    <span className="receive-time"> { dateTimeStr }</span>
  )
}

const UnreadMessage = ({ unreadMessage }) => {
  if (!unreadMessage) return null;
  return (
    <span className="unread-message"> { unreadMessage } </span>
  )
}

const TypingMessage = () => {
  return (
    <div className="typing-message">
      
      <div className="animation">
        <span> Typing </span>
        <span style={{"--i": "1"}}>.</span>
        <span style={{"--i": "2"}}>.</span>
        <span style={{"--i": "3"}}>.</span>
      </div>
    </div>
  )
}

export const ContactBody = (props) => {
  const { 
    name, 
    message, 
    status, 
    unread_message: unreadMessage, 
    receive_time: receiveTime 
  } = props;

  const isTyping = status === "Typing...";

  return (
    <div className="contact-container">
      <div className="contact-header">
        <ContactName name={name}/>
        <ReceiveTime receiveTime={receiveTime}/>
      </div>
      <div className="contact-info">
        { isTyping 
          ? <TypingMessage/> 
          : <ContactMessage message={message}/>
        }
        <UnreadMessage unreadMessage={unreadMessage}/>
      </div>
    </div>
  )
}