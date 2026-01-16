import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/home.module.css';

export const HomePage:FC = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>

            <Link to={`/learnJS`}>
               Задачи
            </Link>

            <Link to={`/learnJS`}>
               Лекарства
            </Link>

            <Link to={`/learnJS`}>
               Привычки
            </Link>

            <Link to={`/learnJS`}>
               Питомец
            </Link>
            </div>
        </div>
    )
}