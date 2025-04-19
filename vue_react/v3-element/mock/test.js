
import pkg from 'jsonwebtoken'
const {sign} = pkg;
// 密钥
const secret = 'g30esx2332';

export default [
    {
        url: '/api/login',
        method: 'post',
        timeout:2000,
        response: (req, res) => {
            let body = req.body;
            // console.log(body)
            if(body.username !== 'admin' && body.password !== '123456'){
                return {
                    code: 5555,
                    message: '用户名或密码错误'
                }
            }

            const token = sign({user:body.name},secret ,{
                expiresIn:60
            })


            return{
                code:200,
                data:token
            }
        }
    }
]