import { useEffect, useState } from 'react';
// import Api from '../dataAccess/api';
import { useLoaderData } from '@remix-run/react';
import loader from '../routes/_index';

// export async function loader(): Promise<number> {
//     debugger
//     console.log(process.env.API_URL);
//     return Api.getCountAsync();
// }

// const loader = async () => {
//         debugger
//     const x = process.env.API_URL;
//     return Api.getCountAsync();
// }

export default function Counter() {
    const [count, setCount] = useState(0);
    const data = useLoaderData<typeof loader>();

    return (
        <div>
            {/* @ts-ignore */}
            <h1 style={style}>{data.count}</h1>
        </div>
    );
}

const style = {
    fontSize: '6em',
}