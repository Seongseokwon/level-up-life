
interface ButtonStyleProps {}
interface ButtonOptionProps {
    id?: string,
    type: 'button'| 'reset' | 'submit',
    name?: string,
}
interface ButtonProps extends ButtonOptionProps, ButtonStyleProps {}
export default function Button() {
    return (
        <button type='button'>버튼</button>
    )
}