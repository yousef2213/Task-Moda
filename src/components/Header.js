import React from 'react'
import Station from "../assets/header/station.svg"
import { BiRightArrow } from "react-icons/bi";
import { BsSquareFill } from "react-icons/bs";


export default function Header() {
    return (
        <div className="container-fluid header py-3">
            <div className="row">
                <div className="col-2 py-2">
                    <div className="d-flex align-items-center">
                        <span className="activePoint"></span>
                        <img src={Station} className="img-header ml-2" alt={Station} />
                        <div className="d-flex align-items-center ml-3">
                            <p className="mb-0 pb-0 num text-muted">2/3</p> 
                            <p className="mb-0 pb-0 ml-2 text-left font-main text-muted last-text">Monitored <br /> Stations</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 py-2">
                    <div className="d-flex align-items-center">
                        <span className="activePoint"></span>
                        <img src={Station} className="img-header ml-2" alt={Station} />
                        <div className="d-flex align-items-center ml-3">
                            <p className="mb-0 pb-0 num text-muted">20s</p> 
                            <p className="mb-0 pb-0 ml-2 text-left font-main text-muted last-text">Last <br /> Update</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 py-2 align-self-center">
                    <ul className="nav nav-tabs nav-tabs-header" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">TODAY</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">YESTERDAY</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">LAST WEEK</a>
                        </li>
                    </ul>
                </div>
            
                <div className="col-12 col-md-5 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center w-50">
                        <BiRightArrow className="arrow-date mr-2" />
                        <input type="date" className="date-input w-75" placeholder="Start date - time" />
                    </div>

                    <div className="d-flex align-items-center w-50">
                        <BsSquareFill className="arrow-date mr-2" />
                        <input type="date" className="date-input w-75" placeholder="Start date - time" />
                    </div>

                </div>
            </div>
        </div>
    )
}
