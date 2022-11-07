import { useState } from 'react';
import Sphere from './Sphere';
import Cube from './Cube';
import Pyramid from './Pyramid';
import { nanoid } from 'nanoid';

export const App = () => {
  const [figure, setFigure] = useState('');
  const [scale, setScale] = useState('');
  const [figures, setFigures] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const selectedFigure = e.currentTarget.elements.figure.value;
    const selectedScale = e.currentTarget.elements.scale.value;
    if (selectedFigure === '' || selectedScale === '') {
      alert('Please, fill inputs');
      return;
    }
    setFigures(prevState => [
      ...prevState,
      { name: selectedFigure, scale: selectedScale },
    ]);
    setFigure('');
    setScale('');
  };

  const handleChange = e => {
    if (e.target.name === 'figure') {
      setFigure(e.target.value);
    } else if (e.target.name === 'scale') {
      setScale(e.target.value);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          list="figures"
          type="list"
          name="figure"
          value={figure}
          onChange={handleChange}
        />
        <datalist id="figures">
          <option value="Cube" />
          <option value="Pyramid" />
          <option value="Sphere" />
        </datalist>
        <input
          type="number"
          placeholder="scale"
          name="scale"
          value={scale}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
      {figures.length > 0 &&
        figures.map(figure => {
          console.log();
          return (
            <li key={nanoid()}>
              {figure.name === 'Cube' && <Cube scale={figure.scale} />}
              {figure.name === 'Pyramid' && <Pyramid scale={figure.scale} />}
              {figure.name === 'Sphere' && <Sphere scale={figure.scale} />}
            </li>
          );
        })}
    </>
  );
};
