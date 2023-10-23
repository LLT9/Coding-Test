import { FiPlus } from "react-icons/fi";
import camera from "../materials/camera.png";
import styles from "../styles/circleImg.module.css";

const CircleImg = ({ imgPath, imgAlt, isCreateBtn }) => (
    <div className={styles.container} >
        {
            isCreateBtn ? 
                <img
                    src={camera} 
                    alt={imgAlt}
                    className={styles.createBtn}
                />
                :
                <img
                    src={imgPath} 
                    alt={imgAlt}
                    className={styles.img}
                />
        }
        {
            isCreateBtn &&
                <div 
                    className={styles.plusIconContainer}
                >
                    <FiPlus />
                </div>
        }
        </div>
)



export default CircleImg