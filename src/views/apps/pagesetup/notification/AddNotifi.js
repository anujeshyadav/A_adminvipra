import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
export default class AddNotifi extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.state = {
      rowData: [],
      title: "",
      desc: "",
      userid: null,
      selectedValue: null,
      editorState: EditorState.createEmpty(),
    };
    this.state = {
      options: [
        { name: "Option 1️⃣", id: 1 },
        { name: "Option 2️⃣", id: 2 },
        { name: "Abc 2️⃣", id: 3 },
        { name: "B 2️⃣", id: 4 },
        { name: "C 2️⃣", id: 5 },
      ],
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let payload = {
      title: this.state.title,
      desc: this.state.desc,
      userid: this.state.userid,
    };
    axiosConfig
      .post("admin/add_notification", this.state)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/pagesetup/notification/notifiList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onSelect = (selectedList, selectedItem) => {
    debugger;
    let fulname = selectedItem?.fullname.toLowerCase();
    console.log(fulname);

    if (selectedItem && selectedItem.fullname) {
      this.setState({
        selectedValue: fulname,
        // userid: selectedItem._id,
      });
    }

    console.log("object");
  };

  onRemove = (selectedList, removedItem) => {
    // this.setState({ selectedValue: selectedList });

    console.log(removedItem, selectedList);
  };

  componentDidMount = async () => {
    await axiosConfig.get(`/admin/alluser`).then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/pagesetup/notification/notifiList"
                  tag="a"
                >
                  Notification List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Notification</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Notifications
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() =>
                      history.push("/app/pagesetup/notification/notifiList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title *</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder=""
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select One User at a Time *</Label>
                  <Multiselect
                    required
                    // options={this.state.options} // Options to display in the dropdown
                    options={this.state.rowData} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="fullname" // Property name to display in the dropdown options
                    // displayValue="name" // Property name to display in the dropdown options
                  />
                </Col>
                <Row></Row>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
                      inline: {
                        options: [
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "monospace",
                        ],
                        bold: { className: "bordered-option-classname" },
                        italic: { className: "bordered-option-classname" },
                        underline: { className: "bordered-option-classname" },
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
                        code: { className: "bordered-option-classname" },
                      },
                      blockType: {
                        className: "bordered-option-classname",
                      },
                      fontSize: {
                        className: "bordered-option-classname",
                      },
                      fontFamily: {
                        className: "bordered-option-classname",
                      },
                    }}
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
