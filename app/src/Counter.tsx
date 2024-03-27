import { useEffect, useState } from 'react';
import Api from './api';

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
            <h1>{count}</h1>
        </div>
    );
}