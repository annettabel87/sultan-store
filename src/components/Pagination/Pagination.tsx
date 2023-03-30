import { FC } from "react";
import prev from "../../assets/icon/left.svg";
import next from "../../assets/icon/right.svg";
import style from "./Pagination.module.scss";

export interface IPaginationProps {
	currentPage: number,
	countPerPage: number,
	totalCountItems: number,
	onSetPage: (value: number) => void
}
export const Pagination: FC<IPaginationProps> = ({ currentPage, countPerPage, totalCountItems, onSetPage }) => {

	const countPages = Math.ceil(totalCountItems / countPerPage);
	const Pages = Array(countPages < 5 ? countPages : 5).fill(0).map((a, i) => i + 1);

	const setPageHandler = (page: number) => {
		onSetPage(page)
	}
	const setPrevPageHandler = () => {
		if ((currentPage - 1) < 1) return
		onSetPage(currentPage - 1)
	}
	const SetNextPageHandler = () => {
		if ((currentPage + 1) > countPages) return
		onSetPage(currentPage + 1)
	}

	const mappedPages = Pages.map(page => {
		return (page === currentPage) ? <div key={page} className={`${style.paginationItem} ${style.active}`}>{page}</div> :
			<div key={page} className={style.paginationItem} onClick={() => setPageHandler(page)}>{page}</div>
	})
	return (
		<div className={style.pagination}>
			<button className={style.paginationBtn} onClick={setPrevPageHandler}><img src={prev} alt="prev" /></button>
			<div className={style.paginationItems}>
				{mappedPages}
			</div>
			<button className={style.paginationBtn} onClick={SetNextPageHandler}><img src={next} alt="next" /></button>
		</div>
	)
}
