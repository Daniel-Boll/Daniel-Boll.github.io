import { AspectRatio } from "../../components/AspectRatio";
import "./index.css";

function Embed() {
  return (
    <AspectRatio width={1} height={1} className="game-embed-wrapper">
      <iframe
        src={`farewell.html`}
        allow="fullscreen; gamepad; autoplay"
        frameBorder="0"
        className="game-embed"
      ></iframe>
    </AspectRatio>
  );
}

export const GamesPage = () => {
  return (
    <div className="games-page">
      <h1>Games</h1>
      <h2>Farewell</h2>
      <Embed />
    </div>
  );
};
