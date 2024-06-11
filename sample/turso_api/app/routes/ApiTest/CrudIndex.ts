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
      const json = await HttpCommon.post(postItem, "/todos/get_list");
//      const json = await HttpCommon.serverPost(postItem, "/todos/get_list");
console.log(json);      
      let items: any[] = [];
      items = json;
/*
*/
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
        "userId": 0
      };            
console.log(item);
      const json = await HttpCommon.serverPost(item, "/todos/create");
      if (json.ret ===  LibConfig.OK_CODE) {
          ret = true;
      }
      //console.log(json);
      return ret;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
    }
  },

}

export default CrudIndex;
