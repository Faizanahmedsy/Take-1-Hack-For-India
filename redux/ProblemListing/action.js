// import { API } from "../../src/API/api";
// import { DataService } from "../Dataservice/Dataservice";

// const API_END_POINT = "https://polished-totally-penguin.ngrok-free.app";

// export const getProblemList = (params) => async (dispatch) => {
//   try {
//     // const queryString = `${params.page ? `?page=${params.page}` : ""}${
//     //   params.limit ? `&limit=${params.limit}` : ""
//     // }${params.status ? `&status=${params.status}` : ""}${
//     //   params.invoiceFromDate ? `&createAtFrom=${params.invoiceFromDate}` : ""
//     // }${params.invoiceToDate ? `&createdAtTo=${params.invoiceToDate}` : ""}`;

//     // const queryString = `${params.page ? `?page=${params.page}` : ""}${
//     //   params.limit ? `&limit=${params.limit}` : ""
//     // }${params.status ? `&status=${params.status}` : ""}${
//     //   params.key ? `&key=${params.key}` : ""
//     // }${params.value ? `&value=${params.value}` : ""}${
//     //   params.invoiceFromDate ? `&createdAtFrom=${params.invoiceFromDate}` : ""
//     // }${params.invoiceToDate ? `&createdAtTo=${params.invoiceToDate}` : ""}`;

//     const response = await DataService.get(API.problem.list);
//     if (response.data?.status) {
//       dispatch({
//         type: API.problem.list,
//         data: response.data,
//       });
//       return response.data;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

// // export const createInvoice = (payload) => {
// //   return async (dispatch) => {
// //     try {
// //       const resp = await DataService.post(API.invoice.add, payload);
// //       if (resp.data.status) {
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     } catch (err) {
// //       return false;
// //     }
// //   };
// // };

// // export const createInvoiceDraft = (payload) => {
// //   return async (dispatch) => {
// //     try {
// //       const resp = await DataService.post(API.invoice.addDraft, payload);
// //       if (resp.data.status) {
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     } catch (err) {
// //       return false;
// //     }
// //   };
// // };

// // export const createInvoice = (params) => async (dispatch) => {
// //   try {
// //     let queryParameter = `?page=${params.page}&limit=${params.limit}`;

// //     const response = await DataService.post(API.invoice.add + queryParameter);
// //     if (!response.data.status) {
// //       return response.data;
// //     } else {
// //       return false;
// //     }
// //   } catch (err) {
// //     return false;
// //   }
// // };

// // export const updateInvoice = (id, payload) => {
// //   return async () => {
// //     try {
// //       const resp = await DataService.put(API.invoice.update + id, payload);
// //       if (resp.data.status) {
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     } catch (err) {
// //       return false;
// //     }
// //   };
// // };

// // export const getInvoiceById = (id) => async (dispatch) => {
// //   try {
// //     const response = await DataService.get(API.invoice.getById + id);
// //     if (!response.data.status) {
// //       return response.data;
// //     } else {
// //       return false;
// //     }
// //   } catch (err) {
// //     return false;
// //   }
// // };
