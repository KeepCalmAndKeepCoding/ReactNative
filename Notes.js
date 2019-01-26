Header:
  - Content-Type: "application/json", //What form?
  - Accept: "application/json",       //What form u want?
  - X-Api-Key: "??????"               //Our key code?
  - Authorization: "Bearer ??????"    //Your ID?
Body:
  RESP
      status: "SUCCESS|ERROR"
      code: "???"
        "message" => message....

  timestamp: 6576576678
  signature: BJSGjhbKHKHSHuyoaudo


username: "abc",
password: :password,

- sort DESC
- concat              passwordabc
- concat secretcode   passwordabcJKT48
- reverse             ....
- concattimeme        ......
- hash

HTTP METHOD

GET:  api/v1/products
GET:  api/v1/products/detail/1
POST: api/v1/products/create
POST: api/v1/products/update/1
POST: api/v1/products/delete/1

GET:  api/v1/products
GET:  api/v1/products/1
POST:  api/v1/products
PUT:  api/v1/products/1
DELETE:  api/v1/products/1


RESPONSE
HTTP STATUS CODE

200 Success
201 Created
400 Bad Request
404 Not Found
401 Unauthorized
403 Forbidden
500 Internal Server Error

RESPONSE JSON

{
  status: "SUCCESS" | "ERROR",
  code: "000"
  ...
  error => message: ... "username.not_match"

  success: ... data: {
                user: {
                  ...
                },
                history: [

                ],
              }
}

should_relogin
