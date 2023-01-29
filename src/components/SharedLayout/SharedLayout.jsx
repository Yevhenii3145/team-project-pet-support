import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import scss from "./shared-layout.module.scss";

const SharedLayout = () => {

    return (
        <>
            <div>SharedLayout</div>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;