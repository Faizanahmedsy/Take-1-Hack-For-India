import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Row,
  Select,
  Spin,
  Table,
  Tag,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
// import MapComponent from "../MapComponent/MapComponent";
import { useNavigate } from "react-router-dom";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from "axios";
import AppLayout from "../../AppLayout";

const dummyData = [
  {
    _id: "1",
    estimateId: "Problem 1",
    name: "Description 1",
    customer: "Locality 1",
    address: "Category 1",
    createdAt: "2023-10-06T10:00:00Z", // Example date
  },
  {
    _id: "2",
    estimateId: "Problem 2",
    name: "Description 2",
    customer: "Locality 2",
    address: "Category 2",
    createdAt: "2023-10-06T11:00:00Z", // Example date
  },
  {
    _id: "3",
    estimateId: "Problem 3",
    name: "Description 3",
    customer: "Locality 3",
    address: "Category 3",
    createdAt: "2023-10-06T12:00:00Z", // Example date
  },
  // Add more rows as needed
];

const Listing = () => {
  let navigate = useNavigate();

  const [votes, setVotes] = useState({});
  const [apiData, setApiData] = useState(null);

  const [loading, setLoading] = useState(true);

  const apiUrl = "https://polished-totally-penguin.ngrok-free.app";

  // const data = useSelector((state) => state);

  // console.log(data);

  // ...

  const ProblemImages = [
    {
      url: "https://images.pexels.com/photos/10911941/pexels-photo-10911941.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1549528/pexels-photo-1549528.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/2967770/pexels-photo-2967770.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1730341/pexels-photo-1730341.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjAwYWY2MjVmNjU3MjljMDgzZGViNSIsInJvbGUiOiJjaXRpemVuIiwiaWF0IjoxNjk2NTk5OTE5fQ.4PK45GhuUgY3IZ1mxds-N8f6G6aVnrDfJpc6--DQHP4", // Example of an Authorization header
      "ngrok-skip-browser-warning": "dummydata", // Example of a Content-Type header
      // Add any other headers you need
    };
    // Make a GET request to the API
    axios
      .get(apiUrl + "/api/problem/list", { headers })
      .then((response) => {
        // Update the state with the API response data
        setLoading(false);
        setApiData(response.data.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  console.log("apiData", apiData);

  // Function to handle upvoting
  const handleUpvote = (itemId) => {
    const payload = {
      vote: "upvote",
    };

    const headers = {
      Authorization: "Bearer token", // Example of an Authorization header
      "ngrok-skip-browser-warning": "dummydata", // Example of a Content-Type header
      // Add any other headers you need
    };
    const upvoteUrl = "/api/problem/vote/";

    axios
      .put(apiUrl + upvoteUrl + itemId, payload, { headers }) // Pass the itemId as a payload
      .then((response) => {
        // Handle the successful upvote response
        axios
          .get(apiUrl + "/api/problem/list", { headers })
          .then((listResponse) => {
            console.log("List Data:", listResponse.data);
          });
        console.log("Upvote Success:", response.data);
      })
      .catch((error) => {
        console.error("Upvote Error:", error);
      });

    console.log("upvote", itemId);
  };

  const handleDownvote = (itemId) => {
    const payload = {
      vote: "downvote",
    };

    const headers = {
      Authorization: "Bearer YourAccessToken", // Example of an Authorization header
      "ngrok-skip-browser-warning": "dummydata", // Example of a Content-Type header
      // Add any other headers you need
    };
    const upvoteUrl = "/api/problem/vote/";

    axios
      .put(apiUrl + upvoteUrl + itemId, payload, { headers }) // Pass the itemId as a payload
      .then((response) => {
        // Handle the successful upvote response
        console.log("Upvote Success:", response.data);
        // Update the local state or perform other actions as needed
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Upvote Error:", error);
      });

    // Make an API request to upvote the item
    // Update the local state to reflect the user's vote
    console.log("upvote", itemId);
    // setVotes({ ...votes, [itemId]: "upvote" });
    // setVotes({ ...votes, [itemId]: "downvote" });
  };

  // const columns = [
  //   {
  //     title: "Sr.No.",
  //     key: "_id",
  //     align: "center",
  //     // render: (text, object, index) => index + 1 + (page - 1) * limit,
  //   },
  //   {
  //     title: "Problem Name",
  //     align: "center",
  //     key: "estimateId",
  //     dataIndex: "estimateId",
  //     // render: (data) => {
  //     //   return <span>{data?.estimateNumber ? data?.estimateNumber : "-"}</span>;
  //     // },
  //   },
  //   // {
  //   //     title: "Prepared By",
  //   //     dataIndex: "name",
  //   //     key: "name",
  //   // },
  //   {
  //     title: "Problem Description",
  //     key: "name",
  //     align: "center",
  //     dataIndex: "name",

  //     // render: (data) => {
  //     //   return <span>{data?.shop ? data?.shop?.shopName : "-"}</span>;
  //     // },
  //   },
  //   {
  //     title: "Locality",
  //     key: "customer",
  //     dataIndex: "customer",
  //     // render: (data) => {
  //     //   return <span>{data?.customer ? data?.customer?.fullName : "-"}</span>;
  //     // },
  //   },
  //   {
  //     title: "Similar Compaints Raised by",
  //     key: "name",
  //     align: "center",
  //     dataIndex: "name",

  //     // render: (data) => {
  //     //   return (
  //     //     <span>
  //     //       {data?.vehicle
  //     //         ? data?.vehicle?.vehicleMake?.name +
  //     //           " " +
  //     //           data?.vehicle?.vehicleModel?.name
  //     //         : "-"}
  //     //     </span>
  //     //   );
  //     // },
  //   },

  //   {
  //     title: "Category",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Status",
  //     key: "estimateDate",
  //     dataIndex: "estimateDate",
  //     align: "center",
  //     // sorter: true,
  //     // render: (data) => {
  //     //   return (
  //     //     <span>
  //     //       {data?.estimateDate
  //     //         ? new Date(data?.estimateDate).toLocaleDateString()
  //     //         : "-"}
  //     //     </span>
  //     //   );
  //     // },
  //   },
  //   {
  //     title: "Created At",
  //     key: "createdAt",
  //     align: "center",
  //     // sorter: true,

  //     // render: (data) => {
  //     //   return (
  //     //     <span>
  //     //       {data?.createdAt
  //     //         ? new Date(data?.createdAt).toLocaleDateString()
  //     //         : "-"}
  //     //     </span>
  //     //   );
  //     // },
  //   },
  //   //   {
  //   //     title: "Estimate Fee ($) ",
  //   //     key: "fee",
  //   //     align: "center",

  //   //     // render: (data) => {
  //   //     //   return <span>{data?.shop ? data?.shop?.estimateFees : "-"}</span>;
  //   //     // },
  //   //   },
  //   //   {
  //   //     title: "Total Estimate ($)",
  //   //     key: "total",
  //   //     align: "center",

  //   //     // render: (data) => {
  //   //     //   return <span>{data?.Total ? data?.Total : "-"}</span>;
  //   //     // },
  //   //   },
  //   // {
  //   //     title: "Status",
  //   //     key: "address",
  //   //     align: "center",

  //   //     render: (data) => {
  //   //         return (
  //   //             <span>
  //   //                 {data?.status ? (
  //   //                     <Tag color={data?.status == "draft" ? "#f9d298" : "#b0bdfc"} style={{ width: "100%", color: "black", fontWeight: "bold" }}>
  //   //                         {data?.status?.charAt(0).toUpperCase() + data?.status?.slice(1)}
  //   //                     </Tag>
  //   //                 ) : (
  //   //                     "-"
  //   //                 )}
  //   //             </span>
  //   //         );
  //   //     },
  //   // },
  //   {
  //     title: "Action",
  //     key: "action",
  //     align: "center",
  //     render: (record) => (
  //       <div style={{ display: "flex" }}>
  //         <Tag
  //           type="primary"
  //           color="blue"
  //           onClick={() => {
  //             console.log("data", record);
  //             navigate("/complaintdetails/" + record._id);
  //           }}
  //         >
  //           Detail
  //         </Tag>

  //         {/* <Tag
  //           color="blue"
  //           style={{
  //             // padding: "10px",
  //             // marginTop: "10px",
  //             // fontSize: "15px",
  //             cursor: "pointer",
  //             userSelect: "none",
  //           }}
  //         >
  //           {" "}
  //           Download{" "}
  //         </Tag> */}
  //         <Tag
  //           color="green"
  //           type="primary"
  //           onClick={() => handleUpvote(record._id)}
  //           icon={<CaretUpOutlined />} // Replace with your upvote icon
  //         ></Tag>
  //         <Tag
  //           color="red"
  //           type="primary"
  //           onClick={() => handleDownvote(record._id)}
  //           icon={<CaretDownOutlined />} // Replace with your downvote icon
  //         ></Tag>
  //       </div>
  //     ),
  //   },
  //   // {
  //   //   // title: "Upvotes",
  //   //   key: "upvotes",
  //   //   align: "center",
  //   //   render: (record) => (

  //   //   ),
  //   // },
  //   // {
  //   //   // title: "Downvotes",
  //   //   key: "downvotes",
  //   //   align: "center",
  //   //   render: (record) => (

  //   //   ),
  //   // },
  // ];

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
        }}
      />
    );
  }

  return (
    <>
      <AppLayout>
        <div
          style={{
            margin: "0px 100px",
          }}
        >
          <Row justify={"space-between"}>
            {/* <Col md={8} xs={24}> */}
            <Col span={12} style={{ marginLeft: "10px" }}>
              <div>
                <h1 className="cardTitle">Complains Raised Public Data</h1>
              </div>
            </Col>

            {/* </Col> */}

            <Col md={6} xs={24}></Col>
          </Row>
          {/* <Divider /> */}

          {/* <MapComponent /> */}

          <Divider />

          <Card>
            <Row
              gutter={[16, 16]}
              style={{
                marginBottom: "20px",
              }}
            >
              <Col span={6}>
                <span>Issues Resolved So Far</span>
                <Tag
                  style={{
                    margin: "10px",
                  }}
                >
                  <strong>1001</strong>
                </Tag>
              </Col>
              <Col span={6}>
                <span>Number of people contributed</span>
                <Tag
                  style={{
                    margin: "10px",
                  }}
                >
                  <strong>200</strong>
                </Tag>
              </Col>
              <Col span={6}>
                <span>Complains recived</span>
                <Tag
                  style={{
                    margin: "10px",
                  }}
                >
                  <strong>1001</strong>
                </Tag>
              </Col>
              <Col span={6}>
                {" "}
                <span>Reached Localities</span>
                <Tag
                  style={{
                    margin: "10px",
                  }}
                >
                  <strong>2001</strong>
                </Tag>
              </Col>
            </Row>

            <Row
              style={{
                marginBottom: "20px",
              }}
              gutter={[16, 16]}
            >
              <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={24}>
                <Typography.Text
                  strong
                  style={{
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                >
                  Total
                </Typography.Text>
                <Tag color="blue">10</Tag>
              </Col>

              <Col
                xxl={5}
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={24}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Select Shop"
              // onPopupScroll={handlePopupScrollShop}
              allowClear
              onChange={(e) => handleSelectShop(e)}
            >
              {console.log(shopListData)}
              {Array.isArray(shopListData) &&
                shopListData?.map((shop) => {
                  return (
                    <Select.Option value={shop._id} key={shop?._id}>
                      {shop?.shopName}
                    </Select.Option>
                  );
                })}
              {shopLoading && (
                <Select.Option
                  value="loading"
                  style={{ cursor: "none" }}
                  disabled
                >
                  <Spin />
                </Select.Option>
              )}
            </Select> */}

                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select Location"
                  //   onPopupScroll={handlePopupScrollShop}
                  //   allowClear
                  //   onChange={(e) => handleSelectShop(e)}
                  //   optionFilterProp="children"
                  //   filterOption={(input, option) => {
                  //     if (option.value === "loading") {
                  //       return true;
                  //     } else {
                  //       return (option?.label ?? "")
                  //         .toLowerCase()
                  //         .includes(input.toLowerCase());
                  //     }
                  //   }}
                  // options={shopListData?.map(function (item) {
                  //   return {
                  //     label: item.shopName,
                  //     value: item._id,
                  //   };
                  // })}
                  //   options={[
                  //     ...shopListData?.map((item) => ({
                  //       label: item.shopName,
                  //       value: item._id,
                  //     })),
                  //     ...(shopLoading
                  //       ? [
                  //           {
                  //             label: (
                  //               <div style={{ cursor: "none" }} disabled>
                  //                 <Spin />
                  //               </div>
                  //             ),
                  //             value: "loading",
                  //           },
                  //         ]
                  //       : []),
                  //   ]}
                />
              </Col>
              <Col
                xxl={5}
                xl={5}
                lg={5}
                md={12}
                sm={12}
                xs={24}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* <Select
              style={{ width: "100%" }}
              placeholder="Select Customer"
              showSearch
              onPopupScroll={handlePopupScrollCustomer}
              // allowClear
              onChange={(e) => handleSelectCustomer(e)}
              // onSearch={(e) => {
              //   console.log(e, "tgt");
              // }}
              filterOption={(input, option) =>
                (option?.firstName ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {console.log("customerListData", customerListData)}
              {Array.isArray(customerListData) &&
                customerListData?.map((customer) => {
                  return (
                    <Select.Option value={customer._id} key={customer?._id}>
                      {customer?.firstName + " " + customer?.lastName}
                    </Select.Option>
                  );
                })}
              {customerLoading && (
                <Select.Option
                  value="loading"
                  style={{ cursor: "none" }}
                  disabled
                >
                  <Spin />
                </Select.Option>
              )}
            </Select> */}

                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Category"
                  showSearch
                  allowClear
                  //   onPopupScroll={handlePopupScrollCustomer}
                  //   onChange={(e) => handleSelectCustomer(e)}
                  //   optionFilterProp="children"
                  //   filterOption={(input, option) => {
                  //     if (option.value === "loading") {
                  //       return true;
                  //     } else {
                  //       return (option?.label ?? "")
                  //         .toLowerCase()
                  //         .includes(input.toLowerCase());
                  //     }
                  //   }}
                  // options={customerListData?.map(function (item) {
                  //   return {
                  //     label: item.firstName + " " + item.lastName,
                  //     value: item._id,
                  //   };
                  // })}
                  //   options={[
                  //     ...customerListData?.map((item) => ({
                  //       label: item.firstName + " " + item.lastName,
                  //       value: item._id,
                  //     })),
                  //     ...(customerLoading
                  //       ? [
                  //           {
                  //             label: (
                  //               <div style={{ cursor: "none" }} disabled>
                  //                 <Spin />
                  //               </div>
                  //             ),
                  //             value: "loading",
                  //           },
                  //         ]
                  //       : []),
                  //   ]}
                />
              </Col>
              <Col
                xxl={10}
                xl={10}
                lg={10}
                md={12}
                sm={12}
                xs={24}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  //   defaultValue={[fromDate, toDate]}
                  // disabledDate={(current) => current.isBefore(dayjs())}
                  format={"DD/MM/YYYY"}
                  allowClear={true}
                  //   onChange={handleDateChange}
                />
              </Col>
              {/* <Col
            xxl={5}
            xl={5}
            lg={5}
            md={12}
            sm={12}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select Status"
              allowClear
              onChange={(e) => handleSelectStatus(e)}
            >
              <Select.Option key={"sent"} value="sent">
                <Tag
                  color="#b0bdfc"
                  style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Sent
                </Tag>
              </Select.Option>
              <Select.Option key={"draft"} value="draft">
                <Tag
                  color="#f9d298"
                  style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Draft
                </Tag>
              </Select.Option>
              {/* <Select.Option key={"request"} value="request">
                                <Tag color="#febbc3" style={{ width: "100%", color: "black", fontWeight: "bold" }}>
                                    Request
                                </Tag>
                            </Select.Option> */}
              {/* </Select>
          </Col> */}
            </Row>
            {/* <Table columns={columns} dataSource={dummyData} /> */}

            <Row>
              {apiData?.map((record) => (
                <Col span={12} key={record._id}>
                  <Card>
                    <Row>
                      <Col span={12}>
                        {/* {ProblemImages.map((item) => ( */}
                        <img
                          // src="https://images.pexels.com/photos/1730341/pexels-photo-1730341.jpeg?auto=compress&cs=tinysrgb&w=600"
                          src={record.images[0]}
                          alt="Image"
                          width={"150px"}
                          height={"150px"}
                        />
                        {/* ))} */}
                      </Col>
                      <Col span={12}>
                        {/* {record?.complaintRaisedByData?.map((item) => ( */}
                        <h3 key={record?._id}>{record?.problemName}</h3>
                        {/* ))} */}
                        <p>
                          <strong>Problem Description:</strong>{" "}
                          {record.problemDescription}
                        </p>
                        <Row gutter={8}>
                          <Col span={8}>
                            <Tag
                              style={{ cursor: "pointer" }}
                              color="green"
                              type="primary"
                              onClick={() => handleUpvote(record?._id)}
                              icon={<CaretUpOutlined />} // Replace with your upvote icon
                            >
                              Upvote
                            </Tag>
                          </Col>
                          <Col span={8}>
                            <Tag
                              style={{ cursor: "pointer" }}
                              color="red"
                              type="primary"
                              onClick={() => handleDownvote(record?._id)}
                              icon={<CaretDownOutlined />} // Replace with your downvote icon
                            >
                              Downvote
                            </Tag>
                          </Col>
                          <Col span={8}>
                            <Tag
                              type="primary"
                              color="blue"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                // Navigate to the complaint details page with the record ID
                                navigate(`/complaintdetails/${record._id}`);
                              }}
                            >
                              Detail
                            </Tag>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </div>
      </AppLayout>
    </>
  );
};

export default Listing;
