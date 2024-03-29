import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ErrorPage,
  HomePage,
  NotFoundPage,
  LoginPage,
  RegisterPage,
  CollectionResponsesPage,
} from './pages';
import {
  ERROR_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  COLLECTION_RESPONSES_ROUTE,
} from './constant/routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={ERROR_ROUTE} element={<ErrorPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
          <Route
            path={COLLECTION_RESPONSES_ROUTE}
            element={<CollectionResponsesPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
