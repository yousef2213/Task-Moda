import React from 'react';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { RadarChart } from '../Charts/RadarChart';
import SalesComponent from './SalesComponent';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default function TotalValues() {
    return (
        <div className="container-fluid px-4">
            <div className="row my-5">

                <div className="col-12 col-md-9">
                    <div className="row">
                        
                        <div className="col-12 col-md-3 text-center my-2">
                            <div className="total-item total-item-one py-4">
                                <div className="d-flex align-items-center">
                                    <h3 className="mr-2">71,028</h3> 
                                    <span>EGP</span>
                                </div>
                                <p className="mb-0 pb-0 text-capitalize font-weight-bold text-station">total value</p>
                                <p className="mb-0 pb-0 text-orange"> <BiDownArrow />  2%</p>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-3 text-center my-2">
                            <div className="total-item  py-4">
                                <div className="d-flex align-items-center">
                                    <h3 className="mr-2">20,000</h3> 
                                    <span>m<sup>3</sup> </span>
                                </div>
                                <p className="mb-0 pb-0 text-capitalize font-weight-bold text-station">Total Sales</p>
                                <p className="mb-0 pb-0 text-lab"> <BiUpArrow /> 50 m<sup>3</sup> </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 text-center my-2">
                            <div className="total-item  py-4">
                                <div className="d-flex align-items-center">
                                    <h3 className="mr-2">20,000</h3> 
                                    <span>m<sup>3</sup> </span>
                                </div>
                                <p className="mb-0 pb-0 text-capitalize font-weight-bold text-station">Avg Sales</p>
                                <p className="mb-0 pb-0 text-orange"> <BiDownArrow /> 50 m<sup>3</sup> </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 text-center my-2">
                            <div className="total-item  py-3">
                                <div className="d-flex align-items-center">
                                    <h3 className="mr-2">71,028</h3> 
                                    <span>EGP</span>
                                </div>
                                <p className="mb-0 pb-0 text-capitalize font-weight-bold text-station">Total Transaction Count</p>
                                <p className="mb-0 pb-0 text-lab"> <BiUpArrow /> 20</p>
                            </div>
                        </div>
                    
                    </div>
                
                    <div className="row my-5">
                        <div className="col-12">
                            <ul className="nav nav-pills navbar-graph mb-3 flex-row-reverse" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">LIST</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">GRAPH</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    {/* Tab1 */}
                                    <Tab1/>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    {/* jsonData */}
                                    <Tab2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tabs */}
                <div className="col-12 col-md-3">

                    <h4 className="text-muted mb-4">Hourly Sales</h4>
                    <RadarChart />
                    <SalesComponent />

                </div>
            </div>
        </div>
    )
}