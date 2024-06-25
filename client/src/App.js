import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';

import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';

// Немного по папкам

// pages содержит страницы сайта

// components содержит в себе шаблоны тегов. Например есть navbar мы создаём в components директорию navbar в ней файл Navbar.jsx (navbar.css при необходимости) 
// и в этом файле прописываем все элементы которые мы должны видеть в навигационке. После этого мы возврощаемся в данный файл и просто используем созданый нами тег Navbar
// со всей вёрсткой которую мы прописывали для этого кастомного тега.

// UI содержит элементы (теги) для html например button input div и проче прочее

// Ваш Евгений

function App() {
  return (
    <BrowserRouter>

    {/* Участок для шаблонизации всего сайта */}
    <h1>Шаблон</h1>
    <Navbar></Navbar>

      {/* Прописаные пути для каждого роута для всего сайта */}
      <Routes>
        <Route path='/' Component={ Home }/>
        <Route path='/profile' Component={ Profile }/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
