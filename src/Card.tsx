// Styles
import { Wrapper } from './Card.styles';

type Props = {
  logo: string;
  video: string;
};

const Card: React.FC<Props> = ({ logo, video }) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <Wrapper>
      <div className="border" />
      <img src={logo} alt="logo" />
      <video
        loop
        preload="none"
        muted
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        src={video}></video>
    </Wrapper>
  );
};

export default Card;
