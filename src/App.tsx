import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleSetSelectedGenreId(id:number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onSetSelectedGenreId={handleSetSelectedGenreId} selectedGenreId={selectedGenreId}/>

      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}