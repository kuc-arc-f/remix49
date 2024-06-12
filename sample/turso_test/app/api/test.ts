import express from 'express';
const router = express.Router();

/**
*
* @param
*
* @return
*/
router.post('/test1', async function(req: any, res: any) {
  try {
    const body = req.body;
console.log(body);
    res.json({ret: "OK", data: body });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
