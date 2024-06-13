//import {useState, useEffect}  from 'react';
import React, { useEffect, useState, useRef } from 'react';
import mermaid from 'mermaid';

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
import CrudShow from './MdTest/CrudShow';
//value
let itemId = 0;
//
type Props = {
  src: string;
  className?: string;
};
//
export function Mermaid({ src, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  //  
  useEffect(() => {
    if (src && ref.current) {
      mermaid.init({}, ref.current);
    }
  }, [ref.current, src]);
  //
  return (
    <div className={className} ref={ref}>
      {src}
    </div>
  );
}
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
  return json({
    data: resulte, id: itemId, mdContent: resulte.content,
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
  //const chartRef = useRef(null);
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
      <h1 className="text-4xl font-bold">MdTestShow.tsx!!</h1>
      <hr className="my-2" />
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <hr className="my-2" />
      <p>id: {data.id}, {data.createdAt}</p>
      <hr className="my-2" />
      Content :<br />
      <Mermaid src={mdContent} className={'mermaid1'} />
      
      <hr className="my-4" />
      <button onClick={()=>deleteProc()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
      >Delete</button>
      <hr />
      {/* script */}
    </div>
  );
}
/*
{mdContent ? (
  <pre className="mermaid">{mdContent}</pre>
) : null}
<hr className="my-4" />
<div ref={chartRef} />
*/

