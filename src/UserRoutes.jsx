import {Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(()=>import('./pages/HomePage/HomePage'));
const LoginPage = lazy(()=>import('./pages/LoginPage/LoginPage'));
const NewsPage = lazy(()=>import('./pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(()=>import('./pages/NotFoundPage/NotFoundPage'));
const NoticesPage = lazy(()=>import('./pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(()=>import('./pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(()=>import('./pages/RegisterPage/RegisterPage'));
const UserPage = lazy(()=>import('./pages/UserPage/UserPage'));
const SharedLayout = lazy(()=>import('./components/SharedLayout/SharedLayout'));
const NoticesCategoryList = lazy(()=>import('./pages/NoticesCategoryList/NoticesCategoryList'));
const Public = lazy(()=>import('./components/Public/Public'));
const Private = lazy(()=>import('./components/Private/Private'));

const UserRoutes = () => {
    return (
        <>
            <Suspense fallback={null} >
                <Routes>
                    <Route path="/" element={<SharedLayout />} />
                    <Route index element={<HomePage />} />

                    <Route element={<Public />}>
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/notices" element={<NoticesPage />}>
                            <Route path="/:categoryName" element={<NoticesCategoryList/>} />
                        </Route>
                        <Route path="/friends" element={<OurFriendsPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>


                    <Route element={<Private />}>
                        <Route path="/user" element={<UserPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </ >
    );
};

export default UserRoutes;