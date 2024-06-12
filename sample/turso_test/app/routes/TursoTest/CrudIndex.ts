import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
import axios from 'axios';
//
const CrudIndex = {
  /**
   * getList
   * @param
   *
   * @return
   */
  getList: async function (): Promise<any>
  {
    try{
      const postItem = {
          userId: 0,
      }
console.log(postItem); 
//post: async function(item: any, path: string): Promise<any>
      const json = await HttpCommon.post(postItem, "/api/torso/get_list");
//console.log(json);      
      let items: any[] = [];
      items = json.data;
console.log(items);
      return items;
    } catch (e) {
        console.error(e);
        throw new Error("Error, getList");
    }
  },  
  /**
   *
   * @param
   *
   * @return
   */
  addItem : async function() : Promise<any>
  {
    try{
      let ret = false;
      const values = Crud.getInputValues();
      const item = {
        "api_key": "",
        "title": values.title,
        "content": "content1",
        "completed": 0,
        "userId": 0,
//        "api_url": "/test/create",
      };            
console.log(item);
      const body: any = JSON.stringify(item);		
      const res = await fetch("/api/turso/create", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json();
console.log(json);
      if (json.ret ===  LibConfig.OK_CODE) {
        ret = true;
      }
      return ret;
    } catch (e) {
        console.error("Error, addItem");
        console.error(e);
        throw new Error('Error , addItem');
    }
  },

}

export default CrudIndex;
