import React from "react"

//icon
import AllCall from "../../../static/assets/images/call 1.svg"
import Emergency from "../../../static/assets/images/emergency 1.svg"
import Call from "../../../static/assets/images/call.svg"
import Accessory from "../../../static/assets/images/accessory 1.svg"
import Attendance from "../../../static/assets/images/attendance  1.svg"
import Assistance from "../../../static/assets/images/assistance 1.svg"

interface CallStatusBarProps {}

function CallStatusBar(props: CallStatusBarProps) {
    const callStatusData = [
        {
            type: "all",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#4CC1BE",
            icon:AllCall
        },
        {
            type: "Emergency",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#ED1849",
            icon:Emergency
        },
        {
            type: "Call",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#F5814E",
            icon:Call
        },
        {
            type: "Accessory",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#904499",
            icon:Accessory
        },
        {
            type: "Attendance",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#94CA66",
            icon:Attendance
        },
        {
            type: "Assistance",
            totalCall: 100,
            averageCall: "00.00.00",
            color: "#F8DA3C",
            icon:Assistance
        },
    ];

    return (
        <div style={{ padding: "16px" }}>
            <div
                className="statusContainer"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <table width="100%">
                    <thead>
                        <tr>
                            <th></th>
                            <th style={{fontSize:'22px',fontWeight:'400'}}>Total Calls</th>
                            <th style={{fontSize:'22px',fontWeight:'400'}}>Average calls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {callStatusData.map(
                            (singleStatusData: any, index: number) => (
                                <tr
                                    key={index}
                                    style={{
                                        borderRadius: "4px",
                                        height: "60px",
                                        background: singleStatusData.color,
                                    }}
                                >
                                    <td className="typeIcon"><img width={24} height={24} src={singleStatusData.icon} alt=""/><div className="typeStatus">{singleStatusData.type}</div></td>
                                    <td className="typeStatus">{singleStatusData.totalCall}</td>
                                    <td className="typeStatus">{singleStatusData.averageCall}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CallStatusBar;
