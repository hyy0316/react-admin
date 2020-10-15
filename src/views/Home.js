import React,{Component,Fragment} from 'react';
import {Button} from 'antd';
import './aaa.scss';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    submit =()=>{
        alert(1212)
    }
    render(){
        return (
            <Fragment>
                首页
                <Button onClick={this.submit}>sdf</Button>
                <ul>
                    <li>ad</li>
                    <li>fg</li>
                    <li>asef</li>
                </ul>
            </Fragment>
        );
    }
}

export default Home;
