import Button from "@/components/ui/button/Button";

export default function UITest() {
    return (<div style={{backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', gap: '50px'}}>
        <div style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
            <h2 style={{color: 'white'}}> default</h2>
            <Button type={'button'} size={'sm'} colorStyle={'default'}>버튼 sm</Button>
            <Button type={'button'} size={'md'} colorStyle={'default'}>버튼 md</Button>
            <Button type={'button'} size={'lg'} colorStyle={'default'}>버튼 lg</Button>
            <Button type={'button'} size={'xlg'} colorStyle={'default'}>버튼 xlg</Button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <h2 style={{color: 'white'}}> primary</h2>
            <Button type={'button'} size={'sm'} colorStyle={'primary'}>버튼 sm</Button>
            <Button type={'button'} size={'md'} colorStyle={'primary'}>버튼 md</Button>
            <Button type={'button'} size={'lg'} colorStyle={'primary'}>버튼 lg</Button>
            <Button type={'button'} size={'xlg'} colorStyle={'primary'}>버튼 xlg</Button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <h2 style={{color: 'white'}}> error </h2>
            <Button type={'button'} size={'sm'} colorStyle={'error'}>버튼 sm</Button>
            <Button type={'button'} size={'md'} colorStyle={'error'}>버튼 md</Button>
            <Button type={'button'} size={'lg'} colorStyle={'error'}>버튼 lg</Button>
            <Button type={'button'} size={'xlg'} colorStyle={'error'}>버튼 xlg</Button>
        </div>
    </div>)
}