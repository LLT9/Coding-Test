import './ProfilePicture.css';

export const ProfilePicture = (props) => {
  const { imgUrl } = props;

  return (
    <img src={imgUrl} alt="img loading..." />
  )
}