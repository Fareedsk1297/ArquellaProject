import React from "react";

interface LiveCallBarProps {}

function LiveCall(props: LiveCallBarProps) {
    const LiveCallData = [
        {
            roomType: "Bedroom",
            roomNo: 21 ,
            zoneType: 'zone',
            zoneNo:1,
            averageCall: "00.00.00",
            color: "0px 4px 0px 0px #ED1849",
        },
        {
            roomType: "Bedroom",
            roomNo: 21 ,
            zoneType: 'zone',
            zoneNo:1,
            averageCall: "00.00.00",
            color: "0px 4px 0px 0px #904499",
        },
        {
            roomType: "Bedroom",
            roomNo: 21 ,
            zoneType: 'zone',
            zoneNo:1,
            averageCall: "00.00.00",
            color: "0px 4px 0px 0px #904499",
        },
        {
            roomType: "Bedroom",
            roomNo: 21 ,
            zoneType: 'zone',
            zoneNo:1,
            averageCall: "00.00.00",
            color: "0px 4px 0px 0px #904499",
        }
    ];

    return (
        <div style={{ padding: "4px" }}>
            <div
                className="statusContainer"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                    <div style={{fontSize:'22px',fontWeight:'400',marginLeft:'101px'}}>
                    Live Call
                    </div>
                        {LiveCallData.map(
                            (singleLiveCallData: any, index: number) => (
                                <div key={index} style={{
                                    background:'#E4E4E4',
                                    width:'297px',
                                    height:'100px',
                                    padding:'17px',
                                    boxShadow: singleLiveCallData.color,
                                    borderRadius: '4px 4px 0px 0px',
                                }}>
                                    <div style={{marginBottom:'16px'}} className="dFlexLiveBedroom">
                                        <span style={{fontSize:'22px',fontWeight:'400'}}>
                                        {singleLiveCallData.roomType}
                                        </span>
                                        <span style={{fontSize:'22px',fontWeight:'400'}}>
                                        {singleLiveCallData.roomNo}        
                                        </span>
                                    </div>
                                    <div className="dFlexLiveCall">
                                        <span style={{fontSize:'22px',fontWeight:'400'}}>
                                        {singleLiveCallData.zoneType}
                                        </span>
                                        <span style={{fontSize:'22px',fontWeight:'400'}}>
                                        {singleLiveCallData.zoneNo}
                                        </span>
                                        <span style={{fontSize:'22px',fontWeight:'400'}}>
                                        {singleLiveCallData.averageCall}
                                        </span>
                                    </div>
                                </div>
                            )
                        )} 
                        

            </div>
        </div>
    );
}

export default LiveCall;
