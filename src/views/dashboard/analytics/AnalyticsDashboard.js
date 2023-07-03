import React from "react";
import { Row, Col, Card, CardTitle, CardText, CardBody } from "reactstrap";
import SalesCard from "./SalesCard";
import DispatchedOrders from "./DispatchedOrders";
import Notification from "./Notification";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import axios from "axios";
// import { Icon } from "leaflet";
import * as Icon from "react-feather";
import TodayAstrologerList from "../../apps/dashboardlist/TodayAstrologerList";
import TodayCustomerList from "../../apps/dashboardlist/TodayCustomerList";
import TodayRechargeList from "../../apps/dashboardlist/TodayRechargeList";
import TodayCallHistory from "../../apps/dashboardlist/TodayCallHistory";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Allplans: "",
      adminearning: "",
      rechargelist: "",
      packageoffer: "",
      completecall: "",
      failed: "",
      Rejected: "",
      userCount: "",
      AstroCount: "",
      OfflineAstroCount: "",
      busyAstroCount: "",
      ActiveUser: "",
      InActiveUser: "",
    };
  }

  componentDidMount() {
    axiosConfig.get(`/user/userCount`).then((res) => {
      // console.log(res?.data?.count);
      this.setState({ userCount: res?.data?.count });
    });
    axiosConfig.get(`/user/onlineAstroCount`).then((res) => {
      // console.log(res?.data);
      this.setState({ AstroCount: res?.data?.count });
    });
    axiosConfig.get(`/user/offlineAstroCount`).then((res) => {
      // console.log(res?.data);
      this.setState({ OfflineAstroCount: res?.data?.count });
    });
    axiosConfig.get(`/user/busyAstroCount`).then((res) => {
      // console.log(res?.data);
      this.setState({ busyAstroCount: res?.data?.count });
    });
    axiosConfig.get(`/user/inActiveUserCount`).then((res) => {
      // console.log(res?.data);
      this.setState({ InActiveUser: res?.data?.count });
    });
    axiosConfig.get(`/user/activeUserCount`).then((res) => {
      // console.log(res?.data);
      this.setState({ ActiveUser: res?.data?.count });
    });
    axiosConfig.get(`/admin/adminCallHistory`).then((response) => {
      let callhistory = response.data.data;
      const completecall = callhistory.filter(
        (value) => value?.Status === "completed"
      );
      const failed = callhistory.filter((value) => value?.Status === "failed");
      const Rejected = callhistory.filter(
        (value) => value?.Status === "rejected"
      );

      this.setState({ completecall: completecall?.length });
      this.setState({ failed: failed?.length });
      this.setState({ Rejected: Rejected?.length });
    });
    axiosConfig.get("/admin/allplans").then((response) => {
      let Allplans = response.data?.data?.length;
      // console.log(Allplans);
      this.setState({ Allplans });
    });
    axiosConfig.get("/user/recharge_list").then((response) => {
      let rechargelist = response.data?.data?.length;
      // console.log(rechargelist);
      this.setState({ rechargelist });
    });
    axiosConfig.get("/admin/getPackage").then((response) => {
      let packageoffer = response.data?.data?.length;
      // console.log(packageoffer);
      this.setState({ packageoffer });
    });
    axiosConfig.get(`/admin/getAdminEarnings`).then((response) => {
      let adminearning = response.data.data?.total;
      // console.log(adminearning);
      this.setState({ adminearning });
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* <Col lg="12" md="12">
          <SalesCard />
        </Col> */}
        {/* <h3>Menbership Plans</h3> */}

        {/* user Counetr start */}

        <Card>
          <CardTitle className="ast-3">Users</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-t">
                  <span className="ast-1">
                    <Icon.Users size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Users
                    <span className="ast-4">{this.state.userCount}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-s">
                  <span className="ast-1">
                    <Icon.Users size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Active Users
                    <span className="ast-4">{this.state.ActiveUser}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-p">
                  <span className="ast-1">
                    <Icon.Users size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Inactive Users
                    <span className="ast-4">{this.state.InActiveUser}</span>
                  </h2>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* astrologer count */}

        <Card>
          <CardTitle className="ast-3">Astrologer</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="3" className="mt-1 mb-1">
                <div className="bg-t">
                  <span className="ast-1">
                    <Icon.User size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total
                    <span className="ast-4">
                      {this.state.AstroCount +
                        this.state.busyAstroCount +
                        this.state.OfflineAstroCount}
                    </span>
                  </h2>
                </div>
              </Col>
              <Col md="3" className="mt-1 mb-1">
                <div className="bg-s">
                  <span className="ast-1">
                    <Icon.User size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Online
                    <span className="ast-4">{this.state.AstroCount}</span>
                  </h2>
                </div>
              </Col>
              <Col md="3" className="mt-1 mb-1">
                <div className="bg-u">
                  <span className="ast-1">
                    <Icon.User size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Busy
                    <span className="ast-4">{this.state.busyAstroCount}</span>
                  </h2>
                </div>
              </Col>
              <Col md="3" className="mt-1 mb-1">
                <div className="bg-p">
                  <span className="ast-1">
                    <Icon.User size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Offline
                    <span className="ast-4">
                      {this.state.OfflineAstroCount}
                    </span>
                  </h2>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* call management counter */}

        <Card>
          <CardTitle className="ast-3">Call Management</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-s">
                  <span className="ast-1">
                    <Icon.PhoneCall size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Complete Call
                    <span className="ast-4">{this.state.completecall}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-p">
                  <span className="ast-1">
                    <Icon.PhoneCall size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    failed Call
                    <span className="ast-4">{this.state.failed}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-u">
                  <span className="ast-1">
                    <Icon.PhoneCall size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Rejected Call
                    <span className="ast-4">{this.state.Rejected}</span>
                  </h2>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* Earning management counter */}

        <Card>
          <CardTitle className="ast-3">Earning</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-s">
                  <span style={{ fontSize: "25px" }} className="ast-1 mt-1">
                    <b>Rs</b>
                  </span>
                  <h2 className="ast-2">
                    Admin Earning
                    <span className="ast-4">{this.state.adminearning}</span>
                  </h2>
                </div>
              </Col>
              {/* <Col md="4" className="mt-1 mb-1">
                <div className="bg-p">
                  <span className="ast-1">
                    <Icon.DollarSign size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Astrologer Earning
                    <span className="ast-4">07</span>
                  </h2>
                </div>
              </Col> */}
              {/* <Col md="4" className="mt-1 mb-1">
                <div className="bg-u">
                  <span className="ast-1">
                    <Icon.DollarSign size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Minutes Call
                    <span className="ast-4">07</span>
                  </h2>
                </div>
              </Col> */}
            </Row>
          </CardBody>
        </Card>

        {/* package counter */}

        <Card>
          <CardTitle className="ast-3">Package</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-s">
                  <span className="ast-1">
                    <Icon.Gift size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Offer
                    <span className="ast-4">{this.state.packageoffer}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-p">
                  <span className="ast-1">
                    <Icon.CheckCircle size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Recharge
                    <span className="ast-4">{this.state.rechargelist}</span>
                  </h2>
                </div>
              </Col>
              <Col md="4" className="mt-1 mb-1">
                <div className="bg-u">
                  <span className="ast-1">
                    <Icon.Package size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Package
                    <span className="ast-4">{this.state.Allplans}</span>
                  </h2>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* <Row>
          <Col sm="12">
            <TodayAstrologerList />
          </Col>
          <Col sm="12">
            <TodayCustomerList />
          </Col>
          <Col sm="12">
            <TodayRechargeList />
          </Col>
          <Col sm="12">
            <TodayCallHistory />
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
