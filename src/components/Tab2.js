import React, { useState } from 'react'
import { jsonData } from '../data/jsonData';
import Station from "../assets/station.svg"
import { CgBorderStyleDashed } from 'react-icons/cg'

export default function Tab2() {
    const [data, setData] = useState(jsonData);
    return (
        <div>
            <div className="row items">
                {data.map(({ id, totalSales, compressionState, totalTransactionCount, status }) => {
                    return (
                        <div key={id} className="col-12 item my-3">
                            <div className="header-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <span className={`${status ? 'start-point start-point-t': 'start-point start-point-f'}`}></span>
                                    <img src={Station} className="img-item ml-3" alt={Station} />
                                    <h5 className="mb-0 pb-0 ml-3">STATION NAME DUMMY</h5>
                                </div>
                                <div>
                                    <div className="dropdown item-dropdown">
                                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <CgBorderStyleDashed />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mr-5 mb-0">Total Sales</h6>
                                    <p className="mb-0 pb-0"> {totalSales}  m<sap>3</sap> </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mr-5 mb-0">Compression State</h6>
                                    <p className="mb-0 pb-0"> {compressionState} </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mr-5 mb-0">Max Transaction / hour</h6>
                                    <p className="mb-0 pb-0"> {totalTransactionCount} </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
