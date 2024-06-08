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
  useSubmit,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import {useState, useEffect}  from 'react';
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
//
export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  let formData = await request.formData();
  let title = formData.get("title");
  const data = {
    title: title
  }
//console.log("title=", title);
console.log(data);
  return json({ ret: 'OK', data: data })
}
//
export default function Index() {
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  //
  useEffect(() => {
console.log("useEffect");
    if(actionData){
      if(actionData.ret){
console.log("#errors=none", new Date().toString());
console.log("ret=", actionData.ret);
        if(actionData.ret === 'OK'){
console.log("ret=OK");
          alert("OK");
        }
      }
      if (actionData?.errors &&
        Object.keys(actionData?.errors).length > 0) {
console.log("#errors.len > 0", new Date().toString());
console.log(actionData?.errors);
      }
    }
  }, [actionData]);
  //
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("#handleSubmit.start");
//alert("handleSubmit");
    submit(event.currentTarget); // フォームの送信をトリガー
  };

  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white" >
    <h1 className="text-4xl font-bold">Form1.tsx</h1>
    <hr className="my-2" />
    <span>onSubmit</span>
    <hr />
    <form method="post" name="form1" id="form1" onSubmit={handleSubmit}>
      <label className="text-2xl font-bold">
        <div>title:</div>
        <input  className="input_text"
        name="title" id="title" type="text" required />
      </label>
      <div>
      <button type="submit" className="btn my-2"
      >Save</button>
    </div>
    </form>
  </div>
  );
}
/*
    <div>
      <button type="submit" className="btn my-2"
      onClick={()=>sendForm()}
      >Save</button>
    </div>
  const sendForm = async function() {
    const form1: any = document.querySelector("#form1") as HTMLInputElement;
    form1.submit();
  }

*/
