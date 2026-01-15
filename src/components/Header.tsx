import styles from '../styles/App.module.css';
import logo from '../public/logo.png';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROURES } from '../utils/roures';

export const Header: FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={`${styles.container} ${styles.flexRow}`}>
                <div className={styles.flexRow} style={{ alignItems: 'center', gap: '16px' }}>
                    <NavLink to={ROURES.HOME}>
                        <img 
                            src={logo} 
                            alt="Логотип" 
                            className={styles.glassCard}
                            style={{ 
                                width: '70px', 
                                height: '70px', 
                                borderRadius: '12px',
                                padding: '4px',
                                objectFit: 'contain'
                            }}
                        />
                    </NavLink>
                    <div>
                        <h3 className={styles.heading2} style={{ margin: 0 }}>
                            KORSIS Book
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    );
}