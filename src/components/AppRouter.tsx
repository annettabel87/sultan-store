import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE, privateRoutes, publicRoutes } from "../common/helpers";

export const AppRouter: FC = () => {
    const isAuth = false;

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element />} />

                )}
                <Route
                    path={ROUTE.ALL}
                    element={<Navigate to={ROUTE.ADMIN} />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(item => <Route path={item.path} element={<item.element />} />
                )}
                <Route
                    path={ROUTE.ALL}
                    element={<Navigate to={ROUTE.CATALOG} />}
                />
            </Routes>
    )
}