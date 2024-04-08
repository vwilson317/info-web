import { useEffect, useState } from 'react';
import Api from '../dataAccess/api';

export default function Counter() {
    const [count, setCount] = useState(0);

    const getCount = async () => {
        const result = await Api.getCountAsync();
        setCount(result);

    }
    useEffect(() => {
        getCount();
    }, []);


    return (
        <div>
            <h1 style={style}>{count}</h1>
        </div>
    );
}

const style = {
    fontSize: '6em',
}