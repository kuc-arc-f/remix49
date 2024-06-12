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
import { z } from 'zod';
import CrudIndex from './MdTest/CrudIndex';
import LibConfig from '../lib/LibConfig';
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
export const loader = async () => {
  const resulte = await CrudIndex.getList();
//console.log(resulte);
  return json({
     contacts: resulte.data, data: resulte
  });
};
/**
* 
* @param
*
* @return
*/ 
export default function Index() {
  const { contacts, data } = useLoaderData<typeof loader>();
//console.log(contacts);
  const actionData = {};
  //
  const addProc = async function(){
    try{
      console.log("testProc" + new Date().toString());
      const ret = await CrudIndex.addItem();
      if(ret){
        location.reload(); 
      }
    } catch (e) {
      console.error(e);
    }
  }
  //
  return (
    <div className="container mx-auto my-2 px-8 bg-white" >
      <h1 className="text-4xl font-bold">Test.tsx!</h1>
      <hr />
      <label>
        <div>Title:</div>
        <input  
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        name="title" id="title" type="text"
        />
      </label>
      {actionData?.errors?.title && (
        <div className="error_message">{actionData?.errors?.title}</div>
      )}
      <label>
        <div>Content:</div>
        <textarea  
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        name="content" id="content"
        />
      </label>
      <div>
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
      onClick={()=>addProc()}
      >Save</button>
      </div>
      <hr />
      <ul>
        {contacts.map(item => (
          <li key={item.id} className="remix__page__resource">
            <h3 className="text-3xl font-bold">{item.title}</h3>
            <p>ID :{item.id}</p>
            <a href={`/mdtestshow?id=${item.id}`}>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ms-2"
              >Show</button>
            </a>
            <hr className="my-2" />
          </li>
        ))}
        </ul>
    </div>
  );
}
/*
*/
