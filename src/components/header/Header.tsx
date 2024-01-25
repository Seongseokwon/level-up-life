import styles from './Header.module.scss';

export default function Header() {
    return (<header className={`${styles['header']}`}>
        <h1>Level Up Life</h1>
        <div>page title ?</div>
    </header>)
}