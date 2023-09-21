import React from "react";
import PowerImg from "../images/powerIcon.png";
function Tor() {
    return (
        <>
            SLD/Specification Details
            <div className="div100 d-flex">
                <div className="div40 d-flex fdc">
                    <div className="divUpper shadow">
                        <div className="Machine d-flex sa">
                            <div className="Specification">Machine Specification</div>
                            <div className="sts_machine">Status : On</div>
                        </div>
                        <div className="data fdc">
                            <div className="divice">Device</div>
                            <div className="Manufacturer">Manufacturer</div>
                            <div className="Device Code">Device Code</div>
                            <div className="Model">Model</div>
                            <div className="Rated Power">Rated Power</div>
                        </div>
                    </div>
                    <div className="divlower shadow">lower</div>
                </div>
                <div className="div60 d-flex fdc">
                    <div className="firstRowcard d-flex sCard">
                        <div className="stdcard card">1</div>
                        <div className="stdcard card">2</div>
                        <div className="stdcard card power-card">
                            <div className="power-box">
                                <h5>Power</h5>
                                <span><img src={PowerImg} alt="" /></span>
                            </div>
                            <div className="power-box-1">
                                <h1>0.35</h1>
                                <h2>Kw</h2>
                            </div>
                        </div>
                    </div>
                    <div className="secondRowcard d-flex sCard">
                        <div className="EConsumption card">1</div>
                        <div className="alertCard card">
                            <div className="alert-box">
                                <h5>Alerts</h5>
                                <button type="button" class="btn btn-dark all-button">All()</button>
                            </div>
                            <div className="Alert-box-1">
                                <h2>No Alerts</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tor;