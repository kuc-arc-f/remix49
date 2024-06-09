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
//import CrudIndex from './ApiTest/CrudIndex';
import CrudShow from './ApiTest/CrudShow';
//import LibConfig from '../lib/LibConfig';
//value
let itemId = 0;
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
//
export const loader = async (
  { request }: LoaderFunctionArgs
) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const id = searchParams.get("id");
  itemId = Number(id);
console.log("id=", id);
  const resulte = await CrudShow.get(itemId);
console.log(resulte);
  return json({
    data: resulte, id: itemId
  });
};
//
export default function Index() {
  const { data, id } = useLoaderData<typeof loader>();
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
        location.href= "/apitest";
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
      <h1 className="text-4xl font-bold">ApiTestShow.tsx</h1>
      <hr className="my-2" />
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <hr className="my-2" />
      <p>id: {data.id}, {data.createdAt}</p>
      <hr className="my-2" />
      <button onClick={()=>deleteProc()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
      >Delete</button>
      <hr />
    </div>
  );
}
/*
*/
