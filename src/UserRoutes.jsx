
// const UserRoutes = () => {
//     return (
//         <Suspense fallback={<Progress size='xs' isIndeterminate />}>
//             <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route element={<PublicRoute />}>
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                 </Route>
//                 <Route element={<PrivateRoute />}>
//                     <Route path="/contacts" element={<MyContactsPage />} />
//                 </Route>
//                 <Route path="*" element={<NotFoundPage />} />
//             </Routes>
//         </Suspense>
//     );
// };