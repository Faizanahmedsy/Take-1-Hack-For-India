// const API = {
//   auth: {
//     login: "superAdmin/login",
//     logout: "superAdmin/logout",
//     forgetpass: "superAdmin/forgotPassword",
//     verifyotp: "superAdmin/verifyForgotPasswordOtp",
//     resetpassword: "superAdmin/resetPassword",
//     changepassword: "superAdmin/change-password",
//   },
//   problem: {
//     list: "/api/problem/list",
//   },
//   dashboard: {
//     get: "dashboardForAdmin/get",
//   },
//   admin: {
//     get: "superAdmin/get",
//     update: "superAdmin/update",
//   },
//   mechanic: {
//     list: "user/userList",
//     add: "mechanic/register",
//     approve: "user/approveRequest/",
//   },
//   shop: {
//     // get: "shop/getShops",
//     get: "shop/list-for-web",
//     add: "shop/createShopProfile",
//     delete: "shop/delete/",
//     detail: "shop/detail-for-web",
//     edit: "shop/update/",
//     approve: "user/approveRequest/",
//     getDraft: "shop/shopDraftList",
//     addDraft: "shop/createShopProfileDraft",
//     defaultServices: "serviceSubCategory/listOfCommonServiceCategory",
//     getShopServiceCategory: "shopService/ShopServiceCategory",
//     getShopServiceSubCategory: "shopService/ShopServiceSubCategory",
//   },
//   shopRequest: {
//     list: "signUp/requestList",
//     reject: "signUp/shopRequestRejected/",
//     // delete: "shopRequest/delete",
//     detail: "signUp/detail/",
//   },
//   make: {
//     list: "vehicleMake/list",
//     add: "vehicleMake/create",
//     update: "vehicleMake/update",
//     delete: "vehicleMake/delete",
//   },
//   guideLine: {
//     list: "ontarioGuidelineMaster/list",
//     add: "ontarioGuidelineMaster/create",
//     update: "ontarioGuidelineMaster/update/",
//     delete: "ontarioGuidelineMaster/delete/",
//   },
//   model: {
//     list: "vehicleModel/list",
//     add: "vehicleModel/create",
//     update: "vehicleModel/update",
//     delete: "vehicleModel/delete",
//   },
//   trim: {
//     list: "vehicleModelTrim/list",
//     add: "vehicleModelTrim/create",
//     update: "vehicleModelTrim/update",
//     delete: "vehicleModelTrim/delete",
//   },
//   customer: {
//     list: "user/userList",
//     delete: "user/delete",
//     decodeVIN: "user/decode/",
//   },
//   customerDetails: {
//     get: "user/get",
//     getCustomerVehicle: "vehicle/list?userId",
//     card: "paymentMethod/list?cardHolder=",
//   },
//   service: {
//     list: "serviceCategory/list",
//     add: "serviceCategory/create",
//     update: "serviceCategory/update",
//     delete: "serviceCategory/delete",
//   },
//   notification: {
//     list: "",
//   },
//   category: {
//     list: "serviceSubCategory/list",
//     add: "serviceSubCategory/create",
//     update: "serviceSubCategory/update",
//     delete: "serviceSubCategory/delete",
//     getServiceById: "serviceSubCategory/get",
//   },

//   amenities: {
//     list: "amenities/list",
//     add: "amenities/add",
//     update: "amenities/update",
//     delete: "amenities/delete",
//   },

//   feedback: {
//     list: "feedBack/list",
//     nsWWFAQList: "thumbsWWFAQ/list",
//   },
//   subcategory: {
//     list: "vehicleServiceSubCategory/list",
//     add: "vehicleServiceSubCategory/create",
//     update: "vehicleServiceSubCategory/update",
//     delete: "vehicleServiceSubCategory/delete",
//   },
//   cancellation: {
//     list: "cancellationType/list",
//     add: "cancellationType/create",
//     update: "cancellationType/update",
//     delete: "cancellationType/delete",
//   },
//   cancellationpolicy: {
//     list: "/cancellationPolicy/list",
//     add: "cancellationPolicy/add",
//     update: "cancellationPolicy/update",
//     delete: "cancellationPolicy/delete",
//   },
//   faq: {
//     list: "faq/getAll",
//     add: "faq/askQue",
//     update: "faq/update",
//     delete: "faq/delete",
//   },

//   termscondition: {
//     get: "termsAndCondition/get",
//     update: "termsAndCondition/update",
//   },
//   settings: {
//     get: "settings/get-setting",
//     addHoliday: "holidayMaster/create",
//     editHoliday: "holidayMaster/update/",
//     deleteHoliday: "holidayMaster/delete/",
//     getHolidays: "holidayMaster/list",
//     getShopHoliday: "holidayMaster/list",
//     edit: "settings/update/",
//   },
//   privacypolicy: {
//     get: "privacyPolicy/get",
//     add: "privacyPolicy/add",
//     update: "privacyPolicy/update",
//     delete: "privacyPolicy/delete",
//   },
//   createcustomer: {
//     add: "superAdmin/createCustomer",
//   },
//   updatecustomer: {
//     update: "superAdmin/updateCustomer",
//   },
//   shopmechanic: {
//     list: "mechanic/mechanicList",
//     add: "mechanic/addMechanic",
//     update: "mechanic/updateMechanic/",
//     delete: "mechanic/deleteMechanic/",
//   },

//   customerVehicle: {
//     update: "vehicle/update",
//     delete: "vehicle/delete",
//     add: "vehicle/create",
//   },
//   parts: {
//     list: "parts/list",
//   },

//   whatswrong: {
//     whatWrong: {
//       list: "whatsWrongFaq/whatsWrongFaqDetails",
//       add: "whatsWrongFaq/add",
//       update: "whatsWrongFaq/update",
//       delete: "whatsWrongFaq/delete",
//     },

//     whatsWrongMain: {
//       list: "whatsWrongMainFaq/list",
//       add: "whatsWrongMainFaq/add",
//       update: "whatsWrongMainFaq/update",
//       delete: "whatsWrongMainFaq/delete",
//     },
//     whatsWrongSub: {
//       list: "whatsWrongSubFaq/getByMainFaq",
//       add: "whatsWrongSubFaq/add",
//       update: "whatsWrongSubFaq/update",
//       delete: "whatsWrongSubFaq/delete",
//       subList: "whatsWrongSubFaq/list",
//     },
//   },
//   aboutus: {
//     get: "aboutUs/get",
//     update: "aboutUs/update",
//   },

//   estimate: {
//     list: "estimate/list",
//     add: "estimate/create",
//     update: "estimate/updateEstimate/",
//     getById: "estimate/get/",
//     createAsCustomer: "estimateRequest/createEstimateRequest",
//     createAsShop: "estimate/createEstimateAsMechanic",
//     DraftAsCustomer: "estimateRequest/createDraftEstimateAsCustomer",
//     DraftAsShop: "estimate/createDraftEstimateAsMechanic",
//     shopDetails: "estimate/get",
//     getRequest: "estimateRequest/list",
//     getEstimateCustomerById: "estimateRequest/get-admin",
//     updateStatus: "estimate/estimateRequestStatusManage-admin/",
//     editAsShop: "estimate/updateEstimate-admin/",
//   },
//   subscriptionList: {
//     list: "subscriptionUserMaster/list",
//     delete: " ",
//     add: " ",
//     update: " ",
//   },
//   subscriptionPlans: {
//     list: "subscriptionProductsMaster/list",
//     delete: " ",
//     add: "subscriptionProductsMaster/create",
//     update: " ",
//   },
//   subscriptionPrice: {
//     list: "subscriptionPriceMaster/list",
//   },
//   appointment: {
//     get: "appointments/list-for-web",
//     getDates: "shop/get-dates",
//     getTimes: "shop/get-slots",
//     customerRequest: "appointments/request-appointment",
//     shopCreate: "appointments/create-appointment",
//     getDetails: "appointments/details-for-web/",
//     apporvalList: "appointments/approval-list-web",
//     shopAction: "appointments/respond-to-request-by-admin/",
//     shopProposeNewTime: "appointments/propose-new-time-by-admin/",
//   },
//   invoice: {
//     list: "invoice/invoiceList-admin",
//     add: "invoice/createInvoiceAsAdmin",
//     update: "invoice/updateInvoice/",
//     getById: "invoice/invoiceDetail-admin/",
//     addDraft: "invoice/draftInvoiceAsAdmin",
//   },
//   invoiceDetails: {
//     get: "invoice/invoiceDetail-admin",
//   },

//   stripeCard: {
//     // list: "paymentMethod/list?cardHolder=",
//     // add: "paymentMethod/add",
//     // update: "paymentMethod/update/",
//     delete: "paymentMethod/delete/",
//   },

//   vehicleYear: {
//     list: "user/getYearList",
//   },
// };

// export { API };
