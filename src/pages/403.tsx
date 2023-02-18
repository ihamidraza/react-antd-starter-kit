import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";

export const NotPermitted: FC = () => {

    const  navigate = useNavigate()

    const  handleClick = () => navigate('/')


    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={handleClick}>Login</Button>}
        />
    );
} 