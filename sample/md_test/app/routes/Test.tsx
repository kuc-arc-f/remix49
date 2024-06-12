import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
//
export default function Index() {

  //
  const testProc = async function (){
    try{
console.log("testProc" + new Date().toString());
      const item = { param1: 1111 };
      const body: any = JSON.stringify(item);		
      const res = await fetch("/api/test/test1", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json();
console.log(json);
      if(json.ret && json.ret === 'OK') {
        alert("OK, api POST")
     }
    } catch (e) {
      console.error(e);
    }
  }
  //
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Test.tsx!</h1>
      <hr />
      <button onClick={()=>testProc()}>[ Test ]</button>

    </div>
  );
}
