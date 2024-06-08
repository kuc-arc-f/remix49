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
import LoadBox from '../components/LoadBox';
import {actionType1, actionType2} from './Form3/Action'
//
let pageItems: any[] = [];
let initDisplay = false;
//
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
/**
 * action
 * @param
 *
 * @return
 */
export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  let formData = await request.formData();
  let form_type = formData.get("form_type");
console.log("form_type=", form_type);
  let errors = {};
  if(form_type === "1") {
    const data = await actionType1(formData);
//console.log(data);
    errors = data.errors; 
  }
  if(form_type === "2") {
    const data = await actionType2(formData);
    errors = data.errors;
  }
  // Return
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  return json({ ret: 'OK', data: {} })
}
/**
 * Index
 * @param
 *
 * @return
 */
export default function Index() {
  const [updatetime, setUpdatetime] = useState<string>("");
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  //
  useEffect(() => {
    if(actionData){
      if(actionData.ret){
console.log("ret=", actionData.ret);
        if(actionData.ret === 'OK'){
          initDisplay = false;
          setUpdatetime(new Date().toString() + String(Math.random()));
          alert("OK");
        }
      }
      if (actionData?.errors &&
        Object.keys(actionData?.errors).length > 0) 
      {
        initDisplay = false;
        setUpdatetime(new Date().toString() + String(Math.random()));
console.log("#errors.len > 0", new Date().toString());
        alert("Error, check");
      }
    }
  }, [actionData]);
  /**
   *
   * @param
   *
   * @return
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    initDisplay = true;
    setUpdatetime(new Date().toString() + String(Math.random()));
    console.log("#handleSubmit.start");
//alert("handleSubmit");
    submit(event.currentTarget);
  };

  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white" >
    {initDisplay ? (<LoadBox />) : null}
    <h1 className="text-4xl font-bold">Form3.tsx</h1>
    <hr className="my-2" />
    <span>onSubmit + N-colmn, sample</span>
    <hr className="my-2" />
    <div className="flex flex-row">
      <div className="flex-1 bg-gray-200 text-center p-2 m-1">
        <form method="post" onSubmit={handleSubmit}>
          <label className="text-2xl font-bold">
            <div>title:</div>
            <input  className="d-none" name="form_type" defaultValue="1" type="text"  />
            <input  className="input_text" name="title" id="title" type="text"  />
          </label>
          <div>
            <button type="submit" className="btn-purple my-2"
            >Save</button>
          </div>
        </form>
        {/* error */}
        {actionData?.errors?.title ? (
        <em className="error_message">{actionData?.errors.title}</em>
        ) : null}
      </div>
      <div className="flex-1 bg-gray-200 text-center p-2 m-1">
        <form method="post" onSubmit={handleSubmit}>
          <label className="text-2xl font-bold">
            <div>title2:</div>
            <input  className="d-none" name="form_type" defaultValue="2" type="text"  />
            <input  className="input_text" name="title2" id="title2" type="text"  />
          </label>
          <div>
            <button type="submit" className="btn-purple my-2"
            >Save</button>
          </div>
        </form>
        {/* error */}
        {actionData?.errors?.title2 ? (
        <em className="error_message">{actionData?.errors.title2}</em>
        ) : null}
      </div>
      <div className="flex-1 bg-gray-200 text-center p-2 m-1">3
      </div>
    </div>
    <hr />
  </div>
  );
}
/*
*/
