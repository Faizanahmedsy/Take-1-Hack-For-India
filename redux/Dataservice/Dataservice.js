// import axios from "axios";
// import { getItem } from "../localstorage";
// import { message } from "antd";

// const API_ENDPOINT = `http://172.105.58.76:4504/v1/api/`;
// const imageUrl = `http://172.105.58.76:4504/storage/`;

// const authHeader = () => ({
//   Authorization: `Bearer ${getItem("apex_token")}`,
// });

// const client = axios.create({
//   baseURL: API_ENDPOINT,
//   headers: {
//     Authorization: `Bearer ${getItem("apex_token")}`,
//     "Content-Type": "application/json",
//   },
// });

// class DataService {
//   //GET API SETUP
//   static get(path = "") {
//     return client({
//       method: "GET",
//       url: path,
//       headers: { ...authHeader() },
//     });
//   }

//   //POST API SETUP
//   static post(path = "", data = {}, optionalHeader = {}) {
//     return client({
//       method: "POST",
//       url: path,
//       data,
//       headers: { ...authHeader(), ...optionalHeader },
//     });
//   }

//   //PATCH API SETUP
//   static patch(path = "", data = {}) {
//     return client({
//       method: "PATCH",
//       url: path,
//       data,
//       headers: { ...authHeader() },
//     });
//   }

//   //PUT API SETUP
//   static put(path = "", data = {}, optionalHeader = {}) {
//     return client({
//       method: "PUT",
//       url: path,
//       data,
//       headers: { ...authHeader(), ...optionalHeader },
//     });
//   }

//   //DELETE API SETUP
//   static delete(path = "", data = {}) {
//     return client({
//       method: "DELETE",
//       url: path,
//       data,
//       headers: { ...authHeader() },
//     });
//   }
// }

// /**
//  * axios interceptors runs before and after a request, letting the developer modify req,req more
//  * For more details on axios interceptor see https://github.com/axios/axios#interceptors
//  */

// client.interceptors.request.use((config) => {
//   // do something before executing the request
//   // For example tag along the bearer access token to request header or set a cookie
//   const requestConfig = config;
//   const { headers } = config;
//   requestConfig.headers = {
//     ...headers,
//     Authorization: `Bearer ${getItem("apex_token")}`,
//   };

//   return requestConfig;
// });

// client.interceptors.response.use(
//   (response) => {
//     // if (!response.data.error) {
//     //   if (!response.data.message.includes("List Found")) {
//     //     message.success(response.data.message);
//     //   }
//     return response;
//     // }
//   },
//   (error) => {
//     /**
//      * Do something in case the response returns an error code [3**, 4**, 5**] etc
//      * For example, on token expiration retrieve a new access token, retry a failed request etc
//      */
//     const { response } = error;
//     const originalRequest = error.response;
//     if (response) {
//       if (response.status === 500) {
//         // do something here
//         message.error("Internal Server Error");
//       } else {
//         message.error(response.data.message);
//         return originalRequest;
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export { DataService, API_ENDPOINT, imageUrl };
