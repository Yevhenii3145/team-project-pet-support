import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const UserRoutes = () => {
    return (
        <>
            <Suspense fallback={null} >
                <Routes>
                    <Route path="/" element={<SharedLayout />} />
                    <Route index element={<HomePage />} />
                    <Route element={<Public />}>
                        <Route path="news" element={<NewsPage />} />
                        <Route path="notices" element={<NoticesPage />}>
                            <Route path="/:categoryName" element={NoticesCategoryList} />
                        </Route>
                        <Route path="friends" element={<OurFriendsPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Route>


                    <Route element={<Private />}>
                        <Route path="user" element={<UserPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </ >
    );
};

export default UserRoutes;