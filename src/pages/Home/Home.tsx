import { Button } from 'antd'

interface Props {
    onLogout: Function
}
export function Home({ onLogout }: Props) {

    const handleLogout = () => {
        sessionStorage.removeItem('appToken')
        onLogout()

    }

    return <>
        <h1>Home</h1>
        <Button onClick={handleLogout}>Logout</Button>
    </>

}