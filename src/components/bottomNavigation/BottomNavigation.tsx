import styles from './BottomNavigation.module.scss';
import useModal from "@/hooks/useModal";

export default function BottomNavigation() {
    const {open, close} = useModal();
    const addTodo = () => {
        console.log('Add Todo');

        open();
    }

    return <nav className={`${styles['bottom-nav-container']}`}>
        <div role='presentation'>홈</div>
        <div role='presentation' onClick={addTodo}>등록</div>
        <div role='presentation'>랭킹</div>
        <div role='presentation'>마이페이지</div>
    </nav>
}