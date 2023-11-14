export default function Chat({ image, name, message, receive_time, unread_message }) {
  
  const tunrNumtoHour = (receive_time) =>{
    let secs = receive_time*1000
    let date = new Date(secs)
    let hours = String(date.getHours()).padStart(2, '0')
    let mins = String(date.getMinutes()).padStart(2, '0')
    let result = hours + ' : ' + mins
    return result
  }
  
  return (
    <div className="chat">
        <img className="image" src={image} alt={name} />

        <div className="chat_Info">
            <span className="username">{name}</span>
            {unread_message === 0 
              ? <span className="message_Read">{message}</span> 
              : <span className="message_Unread">{message}</span>}
        </div>

        <div className="chat_Time">
            <span className="receive_Time">
              {tunrNumtoHour(receive_time)}
            </span>

            {unread_message === 0 
              ? null 
              : <span className="unread_Message">{unread_message}</span>}
        </div>
    </div>
  );
}
