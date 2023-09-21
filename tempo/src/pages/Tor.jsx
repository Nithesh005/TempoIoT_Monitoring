import React from "react";
// import { Pie } from "react-chartjs-2";
import PieChart from "../charts/piechart";
import Radarpie from "../charts/Radarpie";
import BarChart from "../charts/barchart";
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
                        <div className="data fdc Specification">
                            <div className="divice">Device : <span>hello</span></div>
                            <div className="Manufacturer">Manufacturer : <span>Quantanics</span></div>
                            <div className="Device Code">Device Code : <span>30580001-1</span></div>
                            <div className="Model">Model : <span>2022</span></div>
                            <div className="Rated Power">Rated Power : <span>0</span></div>
                        </div>
                    </div>
                    <div className="divlower shadow d-flex fdc gap-4">
                        <div className="one d-flex gap-4">
                            <div className="valuseCard shadow">R Phase Voltage</div>
                            <div className="valuseCard shadow">Y Phase Voltage</div>
                            <div className="valuseCard shadow">B Phase Voltage</div>
                        </div>
                        <div className="two d-flex gap-4">
                            <div className="valuseCard shadow">R Phase Current</div>
                            <div className="valuseCard shadow">Y Phase Current</div>
                            <div className="valuseCard shadow">B Phase Current</div>
                        </div>
                        <div className="three d-flex gap-4">
                            <div className="valuseCard shadow">VTHD R Phase</div>
                            <div className="valuseCard shadow">VTHD Y Phase</div>
                            <div className="valuseCard shadow">VTHD B Phase</div>
                        </div>
                        <div className="four d-flex gap-4">
                            <div className="valuseCard shadow">CTHD R Phase</div>
                            <div className="valuseCard shadow">CTHD Y Phase</div>
                            <div className="valuseCard shadow">CTHD B Phase</div>
                        </div>
                    </div>
                </div>
                <div className="div60 d-flex fdc">
                    <div className="firstRowcard d-flex sCard">
                        <div className="stdcard card">
                            <Radarpie />
                        </div>
                        <div className="stdcard card">
                            <PieChart />
                        </div>
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
                        <div className="EConsumption card">
                            <BarChart />
                        </div>
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