import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
const { Panel } = Collapse;
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import AppLayout from "../../AppLayout";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const EventRegistrationForm = () => {
  const [form] = useForm();

  const [isMarried, setIsMarried] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-2",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-3",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-4",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-xxx",
    //   percent: 50,
    //   name: "image.png",
    //   status: "uploading",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-5",
    //   name: "image.png",
    //   status: "error",
    // },
  ]);

  const apiUrl = "https://polished-totally-penguin.ngrok-free.app";

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleChange = (info) => {
    let fileList = [...info.fileList];

    // Remove successfully uploaded files from the list
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === "done";
      }
      return true;
    });

    setFileList(fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  function handleSubmit(payload) {
    console.log(payload);

    let formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      // console.log(`Appending ${key}: ${value}`);
      formData.append(key, value);
    });

    console.log(formData);
    message.success("Complaint Registered Successfully");

    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjAwYWY2MjVmNjU3MjljMDgzZGViNSIsInJvbGUiOiJjaXRpemVuIiwiaWF0IjoxNjk2NTk5OTE5fQ.4PK45GhuUgY3IZ1mxds-N8f6G6aVnrDfJpc6--DQHP4", // Example of an Authorization header
      "ngrok-skip-browser-warning": "dummydata",
      Origin: "Access-Control-Allow-Origin ", // Example of a Content-Type header
      // Add any other headers you need
    };
    const createUrl = "/api/problem/create";

    axios
      .post(apiUrl + createUrl, formData, { headers }) // Pass the itemId as a payload
      .then((response) => {
        console.log("Upvote Success:", response.data);
      })
      .catch((error) => {
        console.error("Upvote Error:", error);
      });

    // console.log("upvote", itemId);

    // Modal.confirm({
    //   title: "Registration Confirmation",
    //   content:
    //     "Are you sure you want to submit this complaint to your local municipal  corporation?",
    //   centered: true,
    //   onOk() {
    //     //
    //     // form.submit();
    //   },
    // });
  }

  // Custom validation function for file uploads
  // const validateFile = (file) => {
  //   const allowedFormats = [
  //     "image/png",
  //     "image/jpeg",
  //     "image/jpg",
  //     "video/hevc",
  //     "application/pdf",
  //   ];

  //   if (!allowedFormats.includes(file.type)) {
  //     message.error(
  //       "Unsupported file format. Please upload PNG, JPEG, JPG, HEVC, or PDF files."
  //     );
  //     return false;
  //   }

  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("File must be smaller than 2MB!");
  //     return false;
  //   }

  //   return true;
  // };

  // Custom validation function for file uploads
  const validateFile = (file) => {
    const allowedExtensions = [".png", ".jpeg", ".jpg", ".hevc", ".pdf"];
    const fileExtension = file.name
      .toLowerCase()
      .slice(file.name.lastIndexOf("."));

    if (!allowedExtensions.includes(fileExtension)) {
      message.error(
        "Unsupported file format. Please upload PNG, JPEG, JPG, HEVC, or PDF files."
      );
      return false;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("File must be smaller than 2MB!");
      return false;
    }

    return true;
  };

  // useEffect(() => {
  //   form.setFieldsValue({
  //     countryCode: "+91",
  //   });
  // }, []);

  return (
    <>
      {/* Title Section */}
      <AppLayout>
        <div
          style={{
            margin: "0px 50px",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col lg={18} md={18} sm={18} xs={18}>
              <h2
                style={{
                  marginLeft: "10px",
                  marginTop: "30px",
                }}
              >
                {/* Report Problems to local government */}
                Raise a issue
              </h2>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div style={{ justifyContent: "end", display: "flex" }}>
                <Space size={"small"}>
                  <Button
                    type="primary"
                    style={{ float: "right", marginTop: "22px" }}
                    htmlType="submit"
                    onClick={() => {
                      form.submit();
                    }}
                  >
                    Submit
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>

          <Divider />

          <Form
            form={form}
            layout={"vertical"}
            onFinish={handleSubmit}
            initialValues={{
              countryCode: "+91",
            }}
          >
            <Collapse
              defaultActiveKey={["1"]}
              accordion
              style={{ background: "#525FE1", borderRadius: "14px" }}
            >
              <Panel
                header={
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      color: "white",
                    }}
                  >
                    Problem Details
                  </span>
                }
                key={"1"}
              >
                <Card>
                  <Row gutter={12}>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"problemName"}
                        label={"Problem Name"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter the make name",
                        //   },
                        //   {
                        //     pattern: new RegExp(/^[A-Za-z\s]+$/),
                        //     message: "Make name can only contain letters",
                        //   },
                        //   {
                        //     pattern: /^\S(.*\S)?$/,
                        //     message:
                        //       "White space is not allowed at the beginning or end",
                        //   },
                        // ]}
                      >
                        <Input placeholder="Enter Problem Name" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"locality"}
                        label={"Locality"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter Venue Name",
                        //   },
                        //   {
                        //     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        //     message: "Please enter valid Venue Name",
                        //   },
                        // ]}
                      >
                        <Select placeholder="Choose Locality">
                          <Select.Option key={1} value={"1"}>
                            Raikhad, Ahmedabad
                          </Select.Option>
                          <Select.Option key={2} value={"2"}>
                            Gandhinagar
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"type"}
                        label={"Category"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter category",
                        //   },
                        //   {
                        //     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        //     message: "Please enter valid category",
                        //   },
                        // ]}
                      >
                        <Input placeholder="Enter category" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"complaint"}
                        label={"Problem Decription"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter Problem Decription",
                        //   },
                        //   {
                        //     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        //     message: "Please enter valid Problem Decription",
                        //   },
                        // ]}
                      >
                        <TextArea />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"complainedBefore?"}
                        label={"Have you complained before?"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please select marital status",
                        //   },
                        // ]}
                      >
                        <Radio.Group>
                          <Radio value={"1"} onClick={() => setIsMarried(true)}>
                            Yes
                          </Radio>
                          <Radio
                            value={"2"}
                            onClick={() => setIsMarried(false)}
                          >
                            No
                          </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    {isMarried && ( // Conditionally render based on isMarried value
                      <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                        <Form.Item
                          name={"prevcomplaindetials"}
                          label={"Enter More Details about previous  complain"}
                          //   rules={[
                          //     {
                          //       required: true,
                          //       message:
                          //         "Please enter Enter More Details about previous  complain",
                          //     },
                          //   ]}
                        >
                          <TextArea placeholder="Enter Enter More Details about previous  complain" />
                        </Form.Item>
                      </Col>
                    )}

                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"address1"}
                        label={"Address 1"}
                        // TODO : VAlidation is pending
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter address",
                        //   },
                        // ]}
                      >
                        <Input placeholder="House number" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"address2"}
                        // TODO : VAlidation is pending

                        label={"Address 2"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter address",
                        //   },
                        // ]}
                      >
                        <Input placeholder="Street Address" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"landmark"}
                        // TODO : VAlidation is pending

                        label={"Landmark"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter address",
                        //   },
                        // ]}
                      >
                        <Input placeholder="Landmark" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"city"}
                        // TODO : VAlidation is pending

                        label={"City"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter city",
                        //   },
                        // ]}
                      >
                        <Input placeholder="Enter City" />
                      </Form.Item>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                      <Form.Item
                        name={"pinCode"}
                        // TODO : VAlidation is pending
                        label={"Pin Code"}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please enter pin code",
                        //     pattern: /^[1-9][0-9]{5}$/, // 6-digit Indian PIN code pattern
                        //   },
                        // ]}
                        onKeyPress={(event) => {
                          if (event.charCode < 48 || event.charCode > 57) {
                            event.preventDefault();
                          }
                        }}
                      >
                        <Input placeholder="Enter Pin Code" />
                      </Form.Item>
                    </Col>

                    {/* <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                  <Form.Item
                    name={"gender"}
                    label={"Gender"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter name",
                      },
                    ]}
                  >
                    <Select placeholder="Select gender">
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                      <Select.Option value="other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                  <Form.Item
                    name={"birthDate"}
                    label={"Birth Date"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter name",
                      },
                    ]}
                  >
                    {" "}
                    <DatePicker
                      style={{ width: "100%" }}
                      format="MM/DD/YYYY"
                      placeholder="Select a date"
                    />
                  </Form.Item>
                </Col> */}
                  </Row>
                </Card>
              </Panel>
            </Collapse>

            <br />

            <Collapse
              accordion
              style={{ background: "#525FE1", borderRadius: "14px" }}
            >
              <Panel
                header={
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      color: "white",
                    }}
                  >
                    Issue Proofs
                  </span>
                }
              >
                <Row gutter={[16, 16]}>
                  <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                    <Form.Item label="Photos" name="photos">
                      {/* <Upload
                      beforeUpload={validateFile}
                      maxCount={2}
                      // accept="image/png, image/jpeg, image/jpg"
                      accept=".png,.jpg,.jpeg, .pdf, .hevc"
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload> */}
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                      >
                        {fileList.length >= 8 ? null : uploadButton}
                      </Upload>
                    </Form.Item>
                  </Col>

                  {/* <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                <Form.Item label="Pan Card" name="panCard">
                  <Upload
                    beforeUpload={validateFile}
                    maxCount={1}
                    accept=".png,.jpg,.jpeg, .pdf, .hevc"
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                <Form.Item label="Election ID Card" name="electionIdCard">
                  <Upload
                    beforeUpload={validateFile}
                    maxCount={2}
                    accept=".png,.jpg,.jpeg, .pdf, .hevc"
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}>
                <Form.Item label="Bank Pass Book" name="bankPassBook">
                  <Upload
                    beforeUpload={validateFile}
                    maxCount={1}
                    accept=".png,.jpg,.jpeg, .pdf, .hevc"
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </Col> */}
                  {/* <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}></Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}></Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}></Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24}></Col> */}

                  {/* Uplaod  Both side of adhar card (front and back) */}

                  {/* <Form.Item label="ATM Card Front Photo" name="atmCardFront">
              <Upload beforeUpload={validateFile} maxCount={1}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item> */}

                  {/* it is reqquried to visible last 6 digitss of your name */}
                </Row>
              </Panel>
            </Collapse>

            <br />
          </Form>
        </div>
      </AppLayout>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default EventRegistrationForm;
