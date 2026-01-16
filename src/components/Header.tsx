import styles from '../styles/App.module.css';
import logo from '../public/logo.png';
import logoBook from '../public/book.png'
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROURES } from '../utils/roures';

export const Header: FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={`${styles.container} ${styles.flexBetween}`}>
                <div className={styles.flexRow} style={{ alignItems: 'center', gap: '20px' }}>
                    <NavLink to={ROURES.HOME}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '20px',
                            background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
                            boxShadow: '2px 2px 4px #d9d9d9, -4px -4px 8px #ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            padding: '12px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                background: 'radial-gradient(circle at 30% 30%, rgba(67, 97, 238, 0.1) 0%, transparent 70%)',
                                borderRadius: '20px'
                            }} />
                            
                            <img 
                                src={logo} 
                                alt="Логотип" 
                                style={{ 
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    position: 'relative',
                                    zIndex: 1,
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                        </div>
                    </NavLink>
                    
                    <div>
                        <h3 style={{ 
                            margin: 0, 
                            fontSize: '1.8rem', 
                            fontWeight: 900,
                            color: 'var(--text-primary)',
                            letterSpacing: '1px'
                        }}>
                            KORSIS
                        </h3>
                        <p style={{ 
                            margin: 0, 
                            fontSize: '0.9rem', 
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                            letterSpacing: '0.5px'
                        }}>
                            Learning Platform
                        </p>
                    </div>
                </div>

                <NavLink to={ROURES.TRAINING} className={styles.headerLink}>
                    <img src={logoBook} alt="Логотип книжки" />
                    <span>Мое обучение</span>
                </NavLink>
            </div>
        </header>
    );
}