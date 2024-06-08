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
  <div className="container mx-auto my-2 px-8 bg-white">
    <div>{/* link_div */}
      Link:
      <a href="/testvalid1" className="ms-2">[ TestValid1 ]</a>
      <a href="/testvalid2" className="ms-2">[ TestValid2 ]</a>
      <a href="/testvalid3" className="ms-2">[ TestValid3 ]</a>
      <a href="/form1" className="ms-2">[ Form1 ]</a>
      <a href="/form2" className="ms-2">[ Form2 ]</a>
      <a href="/form3" className="ms-2">[ Form3 ]</a>
    </div>
    {/* */}
    <h1 className="text-4xl font-bold">Test.tsx!</h1>
    <hr />
    <button onClick={()=>testProc()}>[ Test ]</button>

  </div>
  );
}
