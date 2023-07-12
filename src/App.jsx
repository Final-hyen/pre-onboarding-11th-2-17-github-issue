import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserContext from './contexts/GitHubContext';
import GetPage from './pages/GetPage.jsx';
import DetailPage from './pages/DetailPage.jsx';

function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          owner: 'facebook',
          repo: 'react',
        }}
      >
        <Title />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetPage />} />
            <Route path="/:issueNumber" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

function Title() {
  const value = useContext(UserContext);
  return (
    <h1>
      {value.owner}/{value.repo}
    </h1>
  );
}
