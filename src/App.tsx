import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Files } from './pages/Files/Files';
import { Photos } from './pages/Photos/Photos';
import { DeletedFiles } from './pages/DeletedFiles/DeletedFiles';

const App:FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/files" element={<Files />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/deleted-files" element={<DeletedFiles />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
