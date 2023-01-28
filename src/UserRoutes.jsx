import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const UserRoutes = () => {
    return (
        <Routes>
            {/* Зразок роутів від Ані */}

            {/* <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="friends" element={<OurFriendsPage />} />
                <Route path="news" element={<NewsPage />} />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}

                />
                <Route
                    path="/contacts"
                    element={<UserPage />} />

            </Route> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};