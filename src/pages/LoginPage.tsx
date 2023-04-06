import { FC, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchAuthData } from "../Redux/actionCreators";
import style from "./LoginPage.module.scss";
import Preloader from "../common/Preloader/Preloader";

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { error, isLoading } = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    const submitAuthData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchAuthData({ login, password }))
    }

    return (
        <div className={style.loginBlock} data-testid="loginPage">
            {isLoading ? <Preloader /> :
                <form className={style.loginForm} onSubmit={e => submitAuthData(e)}>
                    <label className={style.label}>
                        Имя:
                        <input className={style.input}
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Введите имя"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)} required />
                    </label>
                    <label className={style.label}>
                        Пароль:
                        <input className={style.input}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button className={style.btn} type="submit">Войти</button>
                </form>
            }
            {error && <p className={style.error}>{error}</p>}
        </div>
    )
}