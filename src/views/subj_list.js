import React, {Component} from 'react';
import {Page, Toolbar,Button, ListHeader, List, ListItem,
    Icon, ToolbarButton, Input, Modal, notification, BackButton} from 'react-onsenui';
import store from '../redux/store';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';



const style = {margin: 5};

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};
//dataSource={this.props.resources}
class SubjList extends Component {
    renderToolbar() {
        return (
            <Toolbar style={{backgroundColor:'#00bcd4'}}>
                <div className="left" style={{backgroundColor:'#00bcd4'}}>
                    <BackButton>Back</BackButton>
                </div>
                <div className="center"></div>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon="" />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    renderRow(row, index) {
        const x = 40 + Math.round(5 * (Math.random() - 0.5)),
            y = 40 + Math.round(5 * (Math.random() - 0.5));

        return (
            <ListItem onClick={()=>{
                if(window.formelo){
                    window.formelo().InAppBrowser(row.link);
                }
                window.open(row.link);
            }} key={index}>
                <div className='left'>
                    <img src={row.image} className='list-item__thumbnail' />
                </div>
                <div className='center'>
                    {row.name} <span>by {row.author}</span>
                </div>
            </ListItem>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <div style={{height:'40vh', width:'100vw', backgroundColor:'#00bcd4', display:'flex',
                    flexDirection:'column',  justifyContent:'center', alignItems: 'center'}}>
                    <img style={{width:120, height:120, borderRadius:50}} src={this.props.image} />
                </div>
                <List
                    dataSource={this.props.resources}
                    renderRow={this.renderRow}
                    renderHeader={() => <ListHeader>{this.props.name} Topics</ListHeader>}
                />
            </Page>
        );
    }
}
SubjList.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default SubjList;