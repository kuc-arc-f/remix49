import LibConfig from '../../lib/LibConfig';
import { z } from 'zod';

/**
 *
 * @param
 *
 * @return
 */
export const actionType1 = async (formData: any) => {
  const retObj = { ret: LibConfig.NG_CODE, data: "",  errors: {} };
  try {
    let title = formData.get("title");
    const item = {
      title: title,
    }
    const zodFormData = z.object({
      title: z
        .string()
        .min(1, { message: '1文字以上入力してください。' }),
    });
    zodFormData.parse(item);
//console.log(text);
    retObj.ret = LibConfig.OK_CODE;
    return retObj;
  } catch (e) {
    console.error(e.flatten().fieldErrors);
    retObj.errors = e.flatten().fieldErrors;
    return retObj;
  }
}
/**
 *
 * @param
 *
 * @return
 */
export const actionType2 = async (formData: any) => {
  const retObj = { ret: LibConfig.NG_CODE, data: "",  errors: {} };
  try {
    let title2 = formData.get("title2");
    const item = {
      title2: title2,
    }
    const zodFormData = z.object({
      title2: z
        .string()
        .min(1, { message: '1文字以上入力してください。' }),
    });
    zodFormData.parse(item);
//console.log(text);
    retObj.ret = LibConfig.OK_CODE;
    return retObj;
  } catch (e) {
    console.error(e.flatten().fieldErrors);
    retObj.errors = e.flatten().fieldErrors;
    return retObj;
  }
}