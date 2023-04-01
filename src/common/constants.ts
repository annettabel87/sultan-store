import { FC } from "react";
import { AdminPage } from "../pages/AdminPage";
import { BasketPage } from "../pages/BasketPage";
import { CardPage } from "../pages/CardPage";
import { CatalogPage } from "../pages/CatalogPage";
import { LoginPage } from "../pages/LoginPage";

export const DATA_URL = "/data.json";
export const AUTH_URL = "/admins.json";

export enum ROUTE {
    ADMIN = "/admin",
    LOGIN = "/login",
    CATALOG = "/catalog/",
    CARD = "/catalog/card/:cardId",
    BASKET = "/basket/",
    ALL = "*",
}

export interface IRoute {
    path: string;
    element: FC;
}

export const publicRoutes: IRoute[] = [
    { path: ROUTE.LOGIN, element: LoginPage },
    { path: ROUTE.CATALOG, element: CatalogPage },
    { path: ROUTE.CARD, element: CardPage },
    { path: ROUTE.BASKET, element: BasketPage },
]

export const privateRoutes: IRoute[] = [
    { path: ROUTE.ADMIN, element: AdminPage },
    { path: ROUTE.CATALOG, element: CatalogPage },
]

export enum LOCAL_STORAGE_KEYS {
    PRODUCTS = "products",
    USERNAME = "username",
    AUTH = "auth",
}

export enum FILTERSNAME {
    BODY = "body",
    HAND = "hand",
    FOOT = "foot",
    FACE = "face",
    HAIR = "hair",
    SUNTAN = "suntan",
    SHAVING = "shaving",
    PRESENT = "present",
    HYGIENE = "hygiene",
    ORAL = "oral",
    PAPER = "paper",
}

export const FILTERS = [
    {
        name: FILTERSNAME.BODY,
        title: "Уход за телом",
    },
    {
        name: FILTERSNAME.HAND,
        title: "Уход за руками",
    },
    {
        name: FILTERSNAME.FOOT,
        title: "Уход за ногами",
    },
    {
        name: FILTERSNAME.FACE,
        title: "Уход за лицом",
    },
    {
        name: FILTERSNAME.HAIR,
        title: "Уход за волосами",
    },
    {
        name: FILTERSNAME.SUNTAN,
        title: "Средства для загара",
    },
    {
        name: FILTERSNAME.SHAVING,
        title: "Средства для бритья",
    },
    {
        name: FILTERSNAME.PRESENT,
        title: "Подарочные наборы",
    },
    {
        name: FILTERSNAME.HYGIENE,
        title: "Гигиеническая продукция",
    },
    {
        name: FILTERSNAME.ORAL,
        title: "Гигиена полости рта",
    },
    {
        name: FILTERSNAME.PAPER,
        title: "Бумажная продукция",
    },
];

export enum SORTNAMES {
    PRICE = "price",
    PRICE_REVERSE = "price_reverse",
    TITLE = "title",
    TITLE_REVERSE = "title_reverse",
}

export const SORTSVALUES = [
    {
        name: SORTNAMES.TITLE,
        title: "Название А-Я",
    },
    {
        name: SORTNAMES.TITLE_REVERSE,
        title: "Название Я-А",
    },
    {
        name: SORTNAMES.PRICE,
        title: "Цена min",
    },
    {
        name: SORTNAMES.PRICE_REVERSE,
        title: "Цена max",
    },
];