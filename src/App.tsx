import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Files } from './pages/Files/Files';
import { PrivateRoute } from './PrivateRoute';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/files" element={
            <PrivateRoute redirectTo="/" component={<Files />} />
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App;
