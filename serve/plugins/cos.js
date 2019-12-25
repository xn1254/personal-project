/*
 * @Author: your name
 * @Date: 2019-12-25 23:44:22
 * @LastEditTime : 2019-12-26 00:49:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\plugins\cos.js
 */
const multer = require('multer');
const multerCOS = require('multer-cos');
 
const cosConfig={
  //id和key是必须
  SecretId: 'AKIDITcbQ3jr11rX4doSgkeMn4C8433yDFi1',
  SecretKey: 'L1Xt8Z1E6ua70jHg0EJEOTb2MZbS9h4G',
  Bucket: 'node-vue-mobo-1257771288',
  Region: 'ap-guangzhou',
};
 
 
//定义仓库
const storage = multerCOS({
  cos:cosConfig,
  //自己会生成个随机16字母的文件名和后缀
  filename:'auto'
});
 
module.exports = opt => {
    return multer({
        storage: storage,
    }).array(opt);
};