import { Button } from 'antd'

interface Props {
    // onLogout: Function
}
export function Home() {

    // const handleLogout = () => {
    //     sessionStorage.removeItem('appToken')
    //     onLogout()

    // }

    return <>
        <h1>Home</h1>
        <Button
        // s onClick={handleLogout}
        >Logout</Button>
    </>

}