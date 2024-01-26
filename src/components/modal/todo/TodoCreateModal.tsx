import Input from "@/components/ui/input/Input";
import Circle from "@/components/circle/Circle";
import styles from './TodoModal.module.scss';

export default function TodoCreateModal() {
    return <div className={`${styles['todo-modal-container']}`}>
        <Input type='text' placeholder='할 일' id='title' name='title'/>
        <textarea name="description" id="description"></textarea>
        <section className={`${styles['priority-box']}`}>
            <h3 className={`${styles['priority-box__title']}`}>중요도</h3>
            <div className={`${styles['priority-box__content']}`}>
                <Circle circleStatus='low' size='lg'></Circle>
                <Circle circleStatus='medium' size='lg'></Circle>
                <Circle circleStatus='high' size='lg'></Circle>
            </div>
        </section>

    </div>
}