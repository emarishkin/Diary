import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/home.module.css';

export const HomePage:FC = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
            <Link to={`/roadmap`}>
               Roadmap
            </Link>

            <Link to={`/calendar`}>
               Календарь 
            </Link>

            <Link to={`/learnJS`}>
               Задания JS
            </Link>
            </div>
        </div>
    )
}