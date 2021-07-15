import React from "react";
import { connect } from "react-redux";
import { ViewsDetail } from "./views";
import { withRouter, NextRouter} from "next/router";
import { store } from "../../redux/store";
import { getWorkerDetail, getWorkerAttendances } from "../../redux/thunk/workers";
import Auth from "../../config/auth";
import Unauthorized from "../unauthorized";
import { openMapModal } from "../../redux/reducers/workers";

interface DetailProps {
    router:NextRouter,
    authorized:any, 
    worker_detail:any,
    worker_attendances:Array<any>,
    open_map_modal:boolean,
    attendances_lat:number,
    attendances_lng: number
}



class Detail extends React.Component<DetailProps>{

    static async getInitialProps(ctx){
        return {}
    }


    async componentDidMount(){
        await Auth(['company']);
        const query = this.props.router.query;
        const token = localStorage.getItem("token");
        store.dispatch(getWorkerDetail(query.worker_id,token));
        store.dispatch(getWorkerAttendances(query.worker_id,token))
    }

    openMapModal(){
        store.dispatch(openMapModal(true));
    }

    closeMapModal(){
        store.dispatch(openMapModal(false));
    }

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            
        }
    }

    render = () => {
        if(!this.props.authorized) return <Unauthorized/>
        return  <ViewsDetail
            onClickShowMap={(worker_id) => this.openMapModal()}
            onClickCloseMap={this.closeMapModal}
            showMap={this.props.open_map_modal}
            workerDetail={this.props.worker_detail}
            workerAttendances={this.props.worker_attendances}
        />
    }
}


const mapStateToProps = (props) => {
    return {
        authorized: props.auth.authorized,
        worker_detail:props.workers.worker_detail,
        worker_attendances:props.workers.worker_attendances,
        open_map_modal: props.workers.open_map_modal,
        attendances_detail:props.workers.attendances_detail
    }
}

export default connect(mapStateToProps)(withRouter(Detail))