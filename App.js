import { NavBar } from './components/UI/NavBar/NavBar';
import { Form } from './components/UI/Form/Form';
import { useState } from 'react';
import { ImageChange } from './components/Content/ImageChange/ImageChange';

export default function App() {
  const [isLoged, setIsLoged] = useState(false);
  return (
    isLoged ?
        (
        <>
          <NavBar isLoged={isLoged} setIsLoged={setIsLoged}/>
          <ImageChange/>
        </>
        ):
      (<>
        <NavBar isLogin={isLoged}/>
        <Form setIsLoged={setIsLoged}/>
      </>)  
  );
}
