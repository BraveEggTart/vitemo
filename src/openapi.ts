import { generateService } from '@umijs/openapi';

const generateAPI = generateService({
  // openapi地址
  schemaPath: 'http://127.0.0.1/openapi.json',
  // 文件生成目录
  serversPath: './src',
  // 自定义网络请求函数路径
  requestImportStatement: 'import { request } from "../utils/request"',
  // 代码组织命名空间, 例如：Api
  namespace: 'Api',
});

export default generateAPI;
