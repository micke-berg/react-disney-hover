import styled from 'styled-components';

export const Wrapper = styled.div`
  --border-radius: 0.7rem;
  --transition-time: 0.3s;

  position: relative;
  padding-top: 56.25%;
  background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all var(--transition-time) cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border-radius: var(--border-radius);

  :hover {
    box-shadow: rgb(0 0 0 / 79%) 0px 20px 30px -10px,
      rgb(0 0 0 / 83%) 0px 30px 30px -10px;
    transform: scale(1.05);

    .border {
      border: 3px solid rgba(255, 255, 255, 0.7);
    }

    video {
      opacity: 1;
      transition: opacity 50ms ease-in-out 0s;
    }
  }

  .border {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #42444f;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    background-clip: border-box;
    z-index: 10;
    transition: all var(--transition-time);
    pointer-events: none;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
  }
  video {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    border-radius: var(--border-radius);
  }
`;
