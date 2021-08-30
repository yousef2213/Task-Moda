import React from 'react'
import Station from '../assets/header/station.svg';

export default function SalesComponent() {
    return (
        <div>
            <h4 className="text-muted my-5">Sales by Station</h4>
            <div className="sales">
                <div className="sale my-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={Station} className="img-item-station" alt={Station} />
                        <p className="pb-0 mb-0 station-name">Station Name</p>
                        <h6 className="pb-0 mb-0">62,721 m<sup>3</sup></h6>
                    </div>
                    <div className="progress-items">
                        <div className="progress-item"></div>
                    </div>
                </div>

                {/*  */}
                <div className="sale my-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={Station} className="img-item-station" alt={Station} />
                        <p className="pb-0 mb-0 station-name">Station Name</p>
                        <h6 className="pb-0 mb-0">62,721 m<sup>3</sup></h6>
                    </div>
                    <div className="progress-items">
                        <div className="progress-item"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
