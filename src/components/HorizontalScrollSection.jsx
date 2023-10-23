import styles from "../styles/horizontalScrollSection.module.css";
import useDrag from "../hooks/useDrag";
import CircleImg from './CircleImg';

const HorizontalScrollSection = ({ data }) => {

    const { draggableRef, handleDragStart, handleDragEnd, handleDrag } = useDrag();

    return (
        <div 
            className={styles.container} 
            ref={draggableRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
        >
            <div className={styles.createStoryBtnContainer}>
                <CircleImg 
                    imgAlt={`Add new Story`}
                    isCreateBtn={true}
                />  
            </div>
            {
                data.map((message, index)=>(
                    <div
                        key={index}
                        className={styles.circleImgContainer}
                    >
                        <CircleImg 
                            imgPath={message.image}
                            imgAlt={`Icon of ${message.name}`}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default HorizontalScrollSection;