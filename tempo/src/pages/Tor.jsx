import React from "react";
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
                    <div className="divlower shadow">
                        <div className="one">
                            <div className="valuseCard">R Phase Voltage</div>
                            <div className="valuseCard">Y Phase Voltage</div>
                            <div className="valuseCard">B Phase Voltage</div>
                        </div>
                        <div className="two">
                            <div className="valuseCard">R Phase Current</div>
                            <div className="valuseCard">Y Phase Current</div>
                            <div className="valuseCard">B Phase Current</div>
                        </div>
                        <div className="three">
                            <div className="valuseCard">VTHD R Phase</div>
                            <div className="valuseCard">VTHD Y Phase</div>
                            <div className="valuseCard">VTHD B Phase</div>
                        </div>
                        <div className="four">
                            <div className="valuseCard">CTHD R Phase</div>
                            <div className="valuseCard">CTHD Y Phase</div>
                            <div className="valuseCard">CTHD B Phase</div>
                        </div>
                    </div>
                </div>
                <div className="div60 d-flex fdc">
                    <div className="firstRowcard d-flex sCard">
                        <div className="stdcard card">1</div>
                        <div className="stdcard card">2</div>
                        <div className="stdcard card">3</div>
                    </div>
                    <div className="secondRowcard d-flex sCard">
                        <div className="EConsumption card">1</div>
                        <div className="alertCard card">2</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tor;