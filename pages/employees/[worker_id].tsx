import React from "react";
import { connect } from "react-redux";
import { ViewsDetail } from "./views";
import { withRouter, NextRouter} from "next/router";
import { store } from "../../redux/store";
import { getWorkerDetail } from "../../redux/thunk/workers";
import Auth from "../../config/auth";
import Unauthorized from "../unauthorized";

interface DetailProps {
    router:NextRouter,
    authorized:any, 
    worker_detail:any
}

class Detail extends React.Component<DetailProps>{

    async componentDidMount(){
        await Auth(['company']);
        const query = this.props.router.query;
        const token = localStorage.getItem("token");
        store.dispatch(getWorkerDetail(query.worker_id,token));
    }

    render = () => {
        if(!this.props.authorized) return <Unauthorized/>
        return  <ViewsDetail
            workerDetail={this.props.worker_detail}
        />
    }
}


const mapStateToProps = (props) => {
    return {
        authorized: props.auth.authorized,
        worker_detail:props.workers.worker_detail
    }
}

export default connect(mapStateToProps)(withRouter(Detail))