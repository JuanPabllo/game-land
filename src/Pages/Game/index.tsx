import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/types';

import ReactToHTML from '../../Utils/ReactToHtml';

function Game() {
  const { Games } = useSelector((state: RootState) => state);

  return (
    <div>
      <h1>{Games.data.name}</h1>
      <img src={Games.data.photo} alt={Games.data.name} />
      <p dangerouslySetInnerHTML={ReactToHTML(Games.data.description)} />
      <h3>Categoria:</h3>
      {Games.data.category.map((item: string) => (
        <li>{item}</li>
      ))}

      <h3>Plataformas:</h3>
      {Games.data.platforms.map((item: string) => (
        <li>{item}</li>
      ))}

      <h3>Desenvolvedora:</h3>
      {Games.data.company.map((item: string) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default Game;
