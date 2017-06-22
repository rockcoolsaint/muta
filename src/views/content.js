import React, {Component} from 'react';
import {Page, Toolbar,Button, ListHeader, List, ListItem,
    Icon, ToolbarButton, Input, Modal, notification, BackButton} from 'react-onsenui';
import store from '../redux/store';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import List from 'material-ui/List/List';
//import ListItem from 'material-ui/List/ListItem';

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

class Content extends Component {
    renderToolbar() {
        return (
            <Toolbar style={{backgroundColor:'#00bcd4'}}>
                <div className="left" style={{backgroundColor:'#00bcd4'}}>
                    <BackButton>Back</BackButton>
                </div>
                <div className="center"></div>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon="md-menu" />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    renderRow(row, index) {
        const x = 40 + Math.round(5 * (Math.random() - 0.5)),
            y = 40 + Math.round(5 * (Math.random() - 0.5));

        const names = ['Financial freedom', 'Finance and Time management', 'Finance and risks', 'Finance and Politics', 'Finance and Stocks', 'Finance and Integrity', 'Finance and the Law', 'Finance and Family'];
        const name = names[Math.floor(names.length * Math.random())];

        return (
            <ListItem key={index}>
                <div className='left'>
                    <img src={`http://placekitten.com/g/${x}/${y}`} className='list-item__thumbnail' />
                </div>
                <div className='center'>
                    {name}
                </div>
            </ListItem>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <div style={{height:'40vh', width:'100vw', backgroundColor:'#00bcd4', display:'flex',
                    flexDirection:'column',  justifyContent:'center', alignItems: 'center'}}>
                    <img style={{width:120, height:120, borderRadius:50}} src={'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg'} />
                </div>
                <List
                    dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    renderRow={this.renderRow}
                    renderHeader={() => <ListHeader>Finance Topics</ListHeader>}
                />
            </Page>
        );
    }
};
Content.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default Content;