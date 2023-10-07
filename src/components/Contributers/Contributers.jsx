import {
  Card,
  Col,
  DatePicker,
  Divider,
  Row,
  Select,
  Table,
  Tag,
  Typography,
} from "antd";
import React from "react";
import AppLayout from "../../AppLayout";

const Contributers = () => {
  const columns = [
    {
      title: "Sr.No.",
      key: "_id",
      align: "center",
      //   render: (text, object, index) => index + 1 + (page - 1) * limit,
    },
    // {
    //   title: "Estimate Id",
    //   align: "center",

    //   key: "estimateId",
    //   render: (data) => {
    //     return <span>{data?.estimateNumber ? data?.estimateNumber : "-"}</span>;
    //   },
    // },
    // {
    //     title: "Prepared By",
    //     dataIndex: "name",
    //     key: "name",
    // },
    {
      title: "Person Name",
      key: "name",
      align: "center",

      //   render: (data) => {
      //     return <span>{data?.shop ? data?.shop?.shopName : "-"}</span>;
      //   },
    },
    // {
    //   title: "Customer Name",
    //   key: "customer",
    //   render: (data) => {
    //     return <span>{data?.customer ? data?.customer?.fullName : "-"}</span>;
    //   },
    // },
    {
      title: "Has Done",
      key: "name",
      align: "center",

      //   render: (data) => {
      //     return (
      //       <span>
      //         {data?.vehicle
      //           ? data?.vehicle?.vehicleMake?.name +
      //             " " +
      //             data?.vehicle?.vehicleModel?.name
      //           : "-"}
      //       </span>
      //     );
      //   },
    },

    {
      title: "Issue Name",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "On Date",
      key: "estimateDate",
      align: "center",
      sorter: true,
      //   render: (data) => {
      //     return (
      //       <span>
      //         {data?.estimateDate
      //           ? new Date(data?.estimateDate).toLocaleDateString()
      //           : "-"}
      //       </span>
      //     );
      //   },
    },
    // {
    //   title: "Created At",
    //   key: "createdAt",
    //   align: "center",
    //   sorter: true,

    //   render: (data) => {
    //     return (
    //       <span>
    //         {data?.createdAt
    //           ? new Date(data?.createdAt).toLocaleDateString()
    //           : "-"}
    //       </span>
    //     );
    //   },
    // },
    {
      title: "Reputation",
      key: "fee",
      align: "center",
      render: (data) => {
        return <span>{data} ✨</span>;
      },

      //   render: (data) => {
      //     return <span>{data?.shop ? data?.shop?.estimateFees : "-"}</span>;
      //   },
    },
    // {
    //   title: "Total Estimate ($)",
    //   key: "total",
    //   align: "center",

    //   render: (data) => {
    //     return <span>{data?.Total ? data?.Total : "-"}</span>;
    //   },
    // },
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
      //   render: (record) => (
      //     <div style={{ display: "flex" }}>
      //       <Button
      //         type="primary"
      //         onClick={() => {
      //           // console.log("data", record);
      //           navigate("/shopEstimate/" + record._id);
      //         }}
      //       >
      //         Detail
      //       </Button>
      //     </div>
      //   ),
    },
  ];

  const newcolumns = [
    {
      title: "Sr.No.",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (text, object, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Contributed To",
      dataIndex: "ContributedTo",
      key: "ContributedTo",
      align: "center",
    },
    {
      title: "On Date",
      dataIndex: "ondate",
      key: "ondate",
      align: "center",
    },
    {
      title: "Reputation",
      dataIndex: "reputation",
      key: "reputation",
      align: "center",
      render: (data) => {
        return <span>{data} ✨</span>;
      },
    },
  ];

  const dummyData = [
    {
      _id: "1",
      name: "Faizan",
      ContributedTo: "Fixing Classroom Benches",
      ondate: "25-06-2023",
      reputation: "50",
    },
    {
      _id: "2",
      name: "John",
      ContributedTo: "Planting Trees",
      ondate: "30-06-2023",
      reputation: "45",
    },
    {
      _id: "3",
      name: "Alice",
      ContributedTo: "Community Cleanup",
      ondate: "22-07-2023",
      reputation: "60",
    },
    {
      _id: "4",
      name: "Bob",
      ContributedTo: "Donating Food",
      ondate: "15-08-2023",
      reputation: "40",
    },
    {
      _id: "5",
      name: "Sara",
      ContributedTo: "Teaching Children",
      ondate: "10-09-2023",
      reputation: "55",
    },
    {
      _id: "6",
      name: "Michael",
      ContributedTo: "Repairing Playgrounds",
      ondate: "05-10-2023",
      reputation: "48",
    },
    {
      _id: "7",
      name: "Emily",
      ContributedTo: "Supporting Local Businesses",
      ondate: "02-11-2023",
      reputation: "58",
    },
    {
      _id: "8",
      name: "David",
      ContributedTo: "Providing Clean Water",
      ondate: "18-11-2023",
      reputation: "43",
    },
    {
      _id: "9",
      name: "Sophia",
      ContributedTo: "Organizing Health Camps",
      ondate: "23-12-2023",
      reputation: "52",
    },
    {
      _id: "10",
      name: "Olivia",
      ContributedTo: "Educational Support",
      ondate: "12-01-2024",
      reputation: "47",
    },
    {
      _id: "11",
      name: "Liam",
      ContributedTo: "Community Garden",
      ondate: "08-02-2024",
      reputation: "62",
    },
    {
      _id: "12",
      name: "Ava",
      ContributedTo: "Youth Empowerment",
      ondate: "04-03-2024",
      reputation: "53",
    },
    {
      _id: "13",
      name: "Noah",
      ContributedTo: "Emergency Relief",
      ondate: "20-03-2024",
      reputation: "49",
    },
    {
      _id: "14",
      name: "Isabella",
      ContributedTo: "Environmental Cleanup",
      ondate: "15-04-2024",
      reputation: "56",
    },
    {
      _id: "15",
      name: "Mia",
      ContributedTo: "Supporting Animal Shelters",
      ondate: "11-05-2024",
      reputation: "46",
    },
    {
      _id: "16",
      name: "James",
      ContributedTo: "Promoting Education",
      ondate: "07-06-2024",
      reputation: "54",
    },
    {
      _id: "17",
      name: "Sophia",
      ContributedTo: "Health and Sanitation",
      ondate: "03-07-2024",
      reputation: "57",
    },
    {
      _id: "18",
      name: "Ethan",
      ContributedTo: "Cultural Exchange",
      ondate: "29-07-2024",
      reputation: "41",
    },
    {
      _id: "19",
      name: "Charlotte",
      ContributedTo: "Building Homes",
      ondate: "25-08-2024",
      reputation: "61",
    },
    {
      _id: "20",
      name: "William",
      ContributedTo: "Supporting Senior Citizens",
      ondate: "21-09-2024",
      reputation: "44",
    },
  ];

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
                <h1 className="cardTitle">Contributors</h1>
              </div>
            </Col>
            {/* </Col> */}

            <Col md={6} xs={24}></Col>
          </Row>
          <Divider></Divider>
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
                  Total <Tag>10</Tag>
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
                  placeholder="Select Shop"
                  allowClear
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
                  placeholder="Select Customer"
                  showSearch
                  allowClear
                  // options={customerListData?.map(function (item) {
                  //   return {
                  //     label: item.firstName + " " + item.lastName,
                  //     value: item._id,
                  //   };
                  // })}
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
                  // disabledDate={(current) => current.isBefore(dayjs())}
                  format={"DD/MM/YYYY"}
                  allowClear={true}
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
              columns={newcolumns}
              size="small"
              dataSource={dummyData}
              //   dataSource={
              //     loading ? [] : Array.isArray(list?.data) ? list?.data : []
              //   }

              scroll={{ x: "auto" }}
            />
          </Card>
        </div>
      </AppLayout>
    </>
  );
};

export default Contributers;
