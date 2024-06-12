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
import CrudIndex from './TursoTest/CrudIndex';
import LibConfig from '../lib/LibConfig';
import HttpTurso from './lib/HttpTurso';
import HttpCommon from './lib/HttpCommon';
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
//  
export const loader = async () => {
//  const resulte = await CrudIndex.getList();
  const resulte = [];
//console.log(resulte);
  return json({
     contacts: resulte, data: resulte
  });
};
//value
let pageItems: any[] = [];
//
export default function Index() {
  const [updatetime, setUpdatetime] = useState<string>("");
  const { contacts, data } = useLoaderData<typeof loader>();
  const actionData = {};
  //
  useEffect(() => {
    (async () => {
      if(typeof(window) !== 'undefined') {
      }
      getList();
    })()
  }, []);
  /**
   *
   * @param
   *
   * @return
   */
  const getList = async function() {
    try{
console.log("#Test4.getList");
      const item  = {
        "userId": 0,
      }      
      const json = await HttpCommon.post(item, "/api/turso/get_list");
      pageItems = json.data;
      console.log(json.data);
      setUpdatetime(new Date().toString());
    } catch (e) {
        console.error(e);
    } 
  }
  /*
  const actionData = useActionData<typeof action>();
  if(actionData){
    console.log(actionData.ret);
    if(actionData.ret === LibConfig.OK_CODE){
      location.reload();
    }
  }
  */
  /**
  *
  * @param
  *
  * @return
  */ 
  const addProc = async function(){
    try{
      console.log("testProc" + new Date().toString());
      const ret = await CrudIndex.addItem();
      console.log("ret=" + ret);
      if(ret) {
        location.reload(); 
      }
    } catch (e) {
      console.error(e);
    }
  }
  //
  return (
    <div className="container mx-auto my-2 px-8 bg-white" >
      <h1 className="text-4xl font-bold">TursoTest.tsx</h1>
      <hr className="my-2" />
      <label>
        <div>Title:</div>
        <input  className="input_text"
        name="title" id="title" type="text" />
      </label>
      {actionData?.errors?.title && (
        <div className="error_message">{actionData?.errors?.title}</div>
      )}
      <button className="" onClick={()=>addProc()}
      >Save</button>
      <hr />
      <ul>
      {pageItems.map(item => (
        <li key={item.id} className="remix__page__resource">
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <p>ID :{item.id}
            <Link to={`/tursotestshow?id=${item.id}`} 
            className="ms-2 btn-outline-purple">Show
            </Link>
          </p>
          <hr className="my-2" />
        </li>
      ))}
        </ul>
    </div>
  );
}
/*
<Link to={`./${item.id}`}>[ Show ]</Link>
<Link to={`edit/${item.id}`}>[ edit ]</Link>
*/
