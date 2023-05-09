import React from "react";
import RechartsExample from "./LineChart";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PieChart from "./PieChart";
function Dashboard({ setLogin }) {
  return (
    <div className="container  align-items-between">
      <div className="dashboard-pd-20 align-items-between">
        <div className="dashboard-left-panel">
          <div>
            <h1
              className="pd-large"
              style={{ cursor: "pointer" }}
              onClick={() => setLogin(true)}
            >
              Board.
            </h1>
            <h4>
              <DashboardCustomizeOutlinedIcon /> Dashboard
            </h4>
            <h4 className="fw-light">
              <SellOutlinedIcon /> Transactions
            </h4>
            <h4 className="fw-light ">
              <PendingActionsOutlinedIcon /> Schedules
            </h4>
            <h4 className="fw-light ">
              <AccountCircleOutlinedIcon /> <span>Users</span>
            </h4>
            <h4 className="fw-light">
              <SettingsOutlinedIcon /> Settings
            </h4>
          </div>
          <div className="pb-20">
            <h4 className="fw-light text-sml">Help</h4>
            <h4 className="fw-light text-sml">Support Us</h4>
          </div>
        </div>
        <div className="dashboard-right-panel mg-20">
          <div className="navbar align-items-between">
            <div>
              <h2 className="no-margin">Dashboard</h2>
            </div>
            <div className="align-items-between">
              <input
                type="text"
                placeholder="Search..."
                className="input-field bg-white"
              />
              <NotificationsActiveOutlinedIcon
                className="input-field"
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div className="body">
            <div className="cards align-items-between">
              <div className="card bg-green">
                <InputOutlinedIcon style={{ float: "right" }} />
                <div style={{ marginTop: "30px" }}>
                  <span className="fs-loto">Total Revenues</span>
                  <br />
                  <h6 className="no-margin fs-sans">$2,129,430</h6>
                </div>
              </div>
              <div className="card bg-pink">
                <SellOutlinedIcon style={{ float: "right" }} />
                <div style={{ marginTop: "30px" }}>
                  <span className="fs-loto">Total Transactions</span>
                  <br />
                  <h6 className="no-margin fs-sans">1,520</h6>
                </div>
              </div>
              <div className="card bg-purple">
                <ThumbUpAltOutlinedIcon style={{ float: "right" }} />
                <div style={{ marginTop: "30px" }}>
                  <span className="fs-loto">Total Likes</span>
                  <br />
                  <h6 className="no-margin fs-sans">9,721</h6>
                </div>
              </div>
              <div className="card bg-blue">
                <PeopleAltOutlinedIcon style={{ float: "right" }} />
                <div style={{ marginTop: "30px" }}>
                  <span className="fs-loto">Total Users</span>
                  <br />
                  <h6 className="no-margin fs-sans">892</h6>
                </div>
              </div>
            </div>
            <div className="line-chart">
              <h4 className="graph-title">Activities</h4>
              <h6 className="graph-sub-title">May - June 2021</h6>
              <RechartsExample />
            </div>
            <div className="align-items-between">
              <div className="pie-chart bottom-card">
                <div className="align-items-between">
                  <h3 className="bottom-card-title">Top Products</h3>
                  <h4 className="fw-light fs-14">May - June 2021</h4>
                </div>
                <div className="align-items-between">
                  <PieChart />
                  <div className="flex-column">
                    <div className="align-items-start mb-10">
                      <div className="green-circle"></div>
                      <div>
                        <p className="schedule-title">Basic Tees</p>
                        <p className="schedule-sub-title">40%</p>
                      </div>
                    </div>

                    <div className="align-items-start mb-10">
                      <div className="pink-circle"></div>
                      <div>
                        <p className="schedule-title">Custom Short Pants</p>
                        <p className="schedule-sub-title">30%</p>
                      </div>
                    </div>

                    <div className="align-items-start mb-10">
                      <div className="yellow-circle"></div>
                      <div>
                        <p className="schedule-title">Super Hoodies</p>
                        <p className="schedule-sub-title">40%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule bottom-card">
                <div className="align-items-between">
                  <h3 className="bottom-card-title">Today’s schedule</h3>
                  <h4 className="fw-light fs-14">See All</h4>
                </div>
                <div>
                  <div className="align-items-start mb-10">
                    <div className="green-bar"></div>
                    <div className="schedule">
                      <p className="schedule-title">
                        Meeting with suppliers from Kuta Bali
                      </p>
                      <p className="schedule-sub-title">14.00-15.00</p>
                      <p className="schedule-sub-title">
                        at Sunset Road, Kuta, Bali
                      </p>
                    </div>
                  </div>
                  <div className="align-items-start">
                    <div className="purple-bar"></div>
                    <div className="schedule">
                      <p className="schedule-title">
                        Check operation at Giga Factory 1
                      </p>
                      <p className="schedule-sub-title">18.00-20.00</p>
                      <p className="schedule-sub-title">at Central Jakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
