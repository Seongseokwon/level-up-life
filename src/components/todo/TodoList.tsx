import DivisionLayout from "@/components/layout/DivisionLayout";

interface TodoListProps {
    toggleViewMode: () => void;
}

export default function TodoList({toggleViewMode}: TodoListProps) {
    const viewChange = () => {
        toggleViewMode();
    }
    return (<div>
        <button type='button' onClick={viewChange}>달력 보기</button>
    </div>)
}