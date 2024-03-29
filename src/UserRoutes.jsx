import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Progress } from '@chakra-ui/react';
import Header from 'components/Header/Header';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const VerifyPage = lazy(() => import('./pages/VerifyPage/VerifyPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

const NoticesCategoriesList = lazy(() =>
  import('./components/NoticesCategoriesList/NoticesCategoriesList')
);
const Public = lazy(() => import('./components/Public/Public'));
const Private = lazy(() => import('./components/Private/Private'));

const UserRoutes = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={<Progress colorScheme="green" height="32px" value={20} />}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route path=":categoryName" element={<NoticesCategoriesList />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />

          <Route element={<Public />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify" element={<VerifyPage />} />
          </Route>

          <Route element={<Private />}>
            <Route path="/user" element={<UserPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;
