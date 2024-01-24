import styles from './BottomNavigation.module.scss';

export default function BottomNavigation() {
    const addTodo = () => {
        console.log('Add Todo Popup');
    }

    return <nav className={`${styles['bottom-nav-container']}`}>
        <div role='presentation'>홈</div>
        <div role='presentation' onClick={addTodo}>등록</div>
        <div role='presentation'>랭킹</div>
    </nav>
}