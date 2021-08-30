import React from 'react'
import List from '../Charts/List'

export default function Tab1() {
    return (
        <div>
            <div className="d-flex justify-content-between bg-white py-3 px-3">
            <h6>STATIONS ACTIVATES OVERVIEW</h6>
            <div>
                <nav>
                    <div className="nav nav-tabs nav-tabs-lists" id="nav-tab" role="tablist">
                        <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">SALES</a>
                        <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">TRANSACTION</a>
                        <a className="nav-link" id="nav-value-tab" data-toggle="tab" href="#nav-value" role="tab" aria-controls="nav-value" aria-selected="false">VALUE</a>
                        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">COMPRESSION</a>
                    </div>
                </nav>
            </div>
        </div>
        <List />
        </div>
    )
}
