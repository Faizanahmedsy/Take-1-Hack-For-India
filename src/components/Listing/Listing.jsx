import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import React, { useState } from "react";
import MapComponent from "../MapComponent/MapComponent";
import { useNavigate } from "react-router-dom";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

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

  // ...

  // Function to handle upvoting
  const handleUpvote = (itemId) => {
    // Make an API request to upvote the item
    // Update the local state to reflect the user's vote
    setVotes({ ...votes, [itemId]: "upvote" });
  };

  // Function to handle downvoting
  const handleDownvote = (itemId) => {
    // Make an API request to downvote the item
    // Update the local state to reflect the user's vote
    setVotes({ ...votes, [itemId]: "downvote" });
  };

  const columns = [
    {
      title: "Sr.No.",
      key: "_id",
      align: "center",
      // render: (text, object, index) => index + 1 + (page - 1) * limit,
    },
    {
      title: "Problem Name",
      align: "center",
      key: "estimateId",
      dataIndex: "estimateId",
      // render: (data) => {
      //   return <span>{data?.estimateNumber ? data?.estimateNumber : "-"}</span>;
      // },
    },
    // {
    //     title: "Prepared By",
    //     dataIndex: "name",
    //     key: "name",
    // },
    {
      title: "Problem Description",
      key: "name",
      align: "center",
      dataIndex: "name",

      // render: (data) => {
      //   return <span>{data?.shop ? data?.shop?.shopName : "-"}</span>;
      // },
    },
    {
      title: "Locality",
      key: "customer",
      dataIndex: "customer",
      // render: (data) => {
      //   return <span>{data?.customer ? data?.customer?.fullName : "-"}</span>;
      // },
    },
    {
      title: "Similar Compaints Raised by",
      key: "name",
      align: "center",
      dataIndex: "name",

      // render: (data) => {
      //   return (
      //     <span>
      //       {data?.vehicle
      //         ? data?.vehicle?.vehicleMake?.name +
      //           " " +
      //           data?.vehicle?.vehicleModel?.name
      //         : "-"}
      //     </span>
      //   );
      // },
    },

    {
      title: "Category",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "estimateDate",
      dataIndex: "estimateDate",
      align: "center",
      // sorter: true,
      // render: (data) => {
      //   return (
      //     <span>
      //       {data?.estimateDate
      //         ? new Date(data?.estimateDate).toLocaleDateString()
      //         : "-"}
      //     </span>
      //   );
      // },
    },
    {
      title: "Created At",
      key: "createdAt",
      align: "center",
      // sorter: true,

      // render: (data) => {
      //   return (
      //     <span>
      //       {data?.createdAt
      //         ? new Date(data?.createdAt).toLocaleDateString()
      //         : "-"}
      //     </span>
      //   );
      // },
    },
    //   {
    //     title: "Estimate Fee ($) ",
    //     key: "fee",
    //     align: "center",

    //     // render: (data) => {
    //     //   return <span>{data?.shop ? data?.shop?.estimateFees : "-"}</span>;
    //     // },
    //   },
    //   {
    //     title: "Total Estimate ($)",
    //     key: "total",
    //     align: "center",

    //     // render: (data) => {
    //     //   return <span>{data?.Total ? data?.Total : "-"}</span>;
    //     // },
    //   },
    // {
    //     title: "Status",
    //     key: "address",
    //     align: "center",

    //     render: (data) => {
    //         return (
    //             <span>
    //                 {data?.status ? (
    //                     <Tag color={data?.status == "draft" ? "#f9d298" : "#b0bdfc"} style={{ width: "100%", color: "black", fontWeight: "bold" }}>
    //                         {data?.status?.charAt(0).toUpperCase() + data?.status?.slice(1)}
    //                     </Tag>
    //                 ) : (
    //                     "-"
    //                 )}
    //             </span>
    //         );
    //     },
    // },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (record) => (
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            onClick={() => {
              console.log("data", record);
              navigate("/complaintdetails/" + record._id);
            }}
          >
            Detail
          </Button>

          {/* <Tag
            color="blue"
            style={{
              // padding: "10px",
              // marginTop: "10px",
              // fontSize: "15px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {" "}
            Download{" "}
          </Tag> */}
        </div>
      ),
    },
    {
      // title: "Upvotes",
      key: "upvotes",
      align: "center",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => handleUpvote(record._id)}
          icon={<CaretUpOutlined />} // Replace with your upvote icon
        ></Button>
      ),
    },
    {
      // title: "Downvotes",
      key: "downvotes",
      align: "center",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => handleDownvote(record._id)}
          icon={<CaretDownOutlined />} // Replace with your downvote icon
        ></Button>
      ),
    },
  ];

  return (
    <>
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
                }}
              >
                {/* Total {list?.totalCount} */}
                {/* {total} */}
              </Typography.Text>
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
          <Table
            columns={columns}
            dataSource={dummyData}
            //   dataSource={
            //     loading ? [] : Array.isArray(list?.data) ? list?.data : []
            //   }
            //   onChange={handleTableChange}
            //   size="small"
            //   pagination={{
            //     style: {
            //       height: "140px",
            //       display: "flex",
            //     },
            //     current: page,
            //     pageSize: limit,
            //     total: list?.totalCount,
            //     showSizeChanger: true,
            //     // onChange: handlePageChange,
            //   }}
            //   loading={loading}
            //   scroll={{ x: "auto" }}
          />
        </Card>
      </div>
    </>
  );
};

export default Listing;
