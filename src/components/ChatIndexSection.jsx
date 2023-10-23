import moment from "moment"
import styles from "../styles/chatIndexSection.module.css"
import CircleImg from "./CircleImg";

const ChatIndexSection = ({ message }) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.circleImgContainer}>
                    <CircleImg imgPath={message.image} imgAlt={`Icon of ${message.name}`} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.title}>{message.name}</div>
                    <div className={styles.message}>{message.message}</div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.date}>
                    { moment(message.receive_time).format("DD/MM") }
                </div>
                {
                    message.unread_message > 0 &&
                        <div className={styles.unreadMsgContainer}>
                            <div className={styles.unreadMsg}>
                                {message.unread_message }
                            </div>
                        </div>
                }
            </div>
        </div>
    )

}

export default ChatIndexSection