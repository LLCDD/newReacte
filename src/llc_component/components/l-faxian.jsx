import React from 'react'
import { Upload, Icon, Modal } from 'antd';
import Left from '../components/l-left'

class Faxian extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
        
    }
    render(){
        <div>
            <Left />
        </div>
    }
}
export default Faxian