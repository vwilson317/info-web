import Counter from "./Counter";
import Wait from "./Wait";
import { createPortal } from 'react-dom';

export default function Home() {
    const x: any = (
        <div style={style}>
            <Counter />
            <Wait />
        </div>
    );

    return (
        <>
            {createPortal(x, document.body)}
        </>
    );
}

const style = {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
};