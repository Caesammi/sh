import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import {post, get} from './http'

//我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携带的参数对象。
//而后调用了我们封装的post方法，post方法的第一个参数是我们的接口地址，第二个参数是apiAddress的p参数.
export const apiAddress = p => post('api/xxx', p)

