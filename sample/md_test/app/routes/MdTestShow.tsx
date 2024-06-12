import {useState, useEffect}  from 'react';
import type { MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { marked } from 'marked';
import CrudShow from './MdTest/CrudShow';
//value
let itemId = 0;
//let mdContent = "";
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
/**
* 
* @param
*
* @return
*/
export const loader = async (
  { request }: LoaderFunctionArgs
) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const id = searchParams.get("id");
  itemId = Number(id);
console.log("id=", id);
  const resulte = await CrudShow.get(itemId);
//console.log(resulte);
  const s = marked.parse(resulte.content);
//console.log(s);
  return json({
    data: resulte, id: itemId, mdContent: s,
  });
};
/**
* 
* @param
*
* @return
*/ 
export default function Index() {
  const [updatetime, setUpdatetime] = useState<string>("");  
  const { data, id, mdContent } = useLoaderData<typeof loader>();
console.log(data);
console.log("id=", id);
  itemId = id;
  /**
   *
   * @param
   *
   * @return
   */
  const deleteProc = async function(){
    try{    
console.log("itemId=", itemId);
      const resulte = await CrudShow.delete(itemId);
      if(resulte) {
        alert("OK, delete");
        location.href= "/mdtest";
      }
    } catch (e) {
      console.error("Error, deleteProc");
      console.error(e);
      throw new Error('Error , deleteProc');
    }
  }
  //
  return (
    <div className="container mx-auto my-2 px-8 bg-white" >
      <h1 className="text-4xl font-bold">ApiTestShow.tsx!!</h1>
      <hr className="my-2" />
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <hr className="my-2" />
      <p>id: {data.id}, {data.createdAt}</p>
      <hr className="my-2" />
      Content :<br />
      {mdContent ? (
        <div className="bg-sky-100 p-2 rounded"
        dangerouslySetInnerHTML={{ __html: mdContent}} />
      ) : null}
      <hr className="my-4" />
      <button onClick={()=>deleteProc()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
      >Delete</button>
      <hr />
    </div>
  );
}
/*
*/

