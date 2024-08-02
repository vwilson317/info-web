import type { MetaFunction } from "@vercel/remix";
import { useEffect } from "react";
import Counter from "~/components/Counter";
import Api from "~/dataAccess/api";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return await Api.getCountAsync();
}

export default function Index() {
  // const z = useLoaderData<typeof loader>();
  // debugger
  const x: any = (
    <div style={style}>
      <Counter />
      {/* <Wait /> */}
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
