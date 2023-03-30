import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE, privateRoutes, publicRoutes } from "../common/helpers";
import { useAppSelector } from "../hooks/hooks";

export const AppRouter: FC = () => {
    const isAuth = useAppSelector(state=> state.authReducer.isAuth);

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route  key={route.path} path={route.path} element={<route.element />} />

                )}
                <Route
                    path={ROUTE.ALL}
                    element={<Navigate to={ROUTE.ADMIN} />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(item => <Route key={item.path} path={item.path} element={<item.element />} />
                )}
                <Route
                    path={ROUTE.ALL}
                    element={<Navigate to={ROUTE.CATALOG} />}
                />
            </Routes>
    )
}