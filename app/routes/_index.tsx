import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Counter from "~/components/Counter";
import Wait from "~/components/Wait";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const x: any = (
    <div style={style}>
      <Counter />
      <Wait />
    </div>
  );
  let y: any;
  useEffect(() => {
    // y = createPortal(x, document.body);
  }, []);

  return (
    <>
      {x}
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
