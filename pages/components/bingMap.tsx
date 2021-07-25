import Script from "next/experimental-script";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

interface BingMapProps {
    attendances_detail: any,
    office_lat?:any,
    office_lng?:any
};

const getMap = (props) => {
    const { check_in_lat, check_in_lng, check_out_lat, check_out_lng } = props.attendances_detail
    const me = JSON.parse(localStorage.getItem("me") || "{}")

    // @ts-ignore
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: "AhkL3-tgHzlKs49gq7u_ZYfINXlkiPlkUGT619tCypvojRcZYNV7MrptnjZ8dR4z",
        // @ts-ignore
        center: new Microsoft.Maps.Location(0.4990459556379193, 122.07178492724702),
        zoom: 17
    });
    // @ts-ignore

    // @ts-ignore
    const office_location = new Microsoft.Maps.Pushpin({
        latitude: 0.4990459556379193,
        longitude: 122.07178492724702
    }, {
        title: 'Kantor',
        color: 'red',
    })

    // @ts-ignore
    const check_in = new Microsoft.Maps.Pushpin({
        latitude: check_in_lat,
        longitude: check_in_lng
    }, {
        title: "check in",
        color: 'blue',
    })

    if (check_out_lat) {
        // @ts-ignore
        const check_out = new Microsoft.Maps.Pushpin({
            latitude: check_out_lat,
            longitude: check_out_lng
        }, {
            title: "check out",
            color: 'green',
        })
        map.entities.push(check_out)

    }

    // console.log(map)
    map.entities.push(office_location)
    map.entities.push(check_in)
}

const BingMap = (props: BingMapProps) => {
    const [isReferesh, setRefresh] = useState(false)
    useEffect(() => {
        if(isReferesh){
            setTimeout(() => {
                getMap(props);
            },1900)
        }
    })
    useEffect(() => {
        setTimeout(() => {
            try {
                getMap(props)
            } catch (error) {
                setRefresh(true);
            }
        })
    },[])

   
    return (
        <div className="relative">
            <div id="myMap" className="flex" style={{ width: "40vw", height: 400 }}></div>
            <Script 
            onLoad={() => {
                getMap(props);
            }}
            src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AhkL3-tgHzlKs49gq7u_ZYfINXlkiPlkUGT619tCypvojRcZYNV7MrptnjZ8dR4z' async defer />
        </div>
    )
}

const mapStateToProps = (props) => {
    return {
        attendances_detail: props.workers.attendances_detail,
        worker_detail: props.workers.worker_detail
    }
}

export default connect(mapStateToProps)(BingMap)