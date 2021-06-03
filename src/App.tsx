import Card from './Card';

// Styles
import { Wrapper } from './App.styles';

// Images
const logo1 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png';
const logo2 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png';
const logo3 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png';
const logo4 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png';
const logo5 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png';
const logo6 =
  'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE893BCDD6264C4A876C03A0DE5004D9F394BE1E8388F085431318CDCEC9A598/scale?width=640&aspectRatio=1.78&format=png';

// Videos
const video1 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4';
const video2 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4';
const video3 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4';
const video4 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4';
const video5 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4';
const video6 =
  'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608170098-brand-star.mp4';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Card logo={logo1} video={video1} />
      <Card logo={logo2} video={video2} />
      <Card logo={logo3} video={video3} />
      <Card logo={logo4} video={video4} />
      <Card logo={logo5} video={video5} />
      <Card logo={logo6} video={video6} />
    </Wrapper>
  );
};

export default App;
