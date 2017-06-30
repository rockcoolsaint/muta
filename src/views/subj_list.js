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
import {Tabs, Tab} from 'material-ui/Tabs';




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
//backgroundColor:'#00bcd4'
//<img style={{width:120, height:120, borderRadius:50}} src={this.props.image} />
//new, trending, most viewed
class SubjList extends Component {
    constructor(props) {
        super(props);
        const color_codes = ["#1abc9c","#3498db","#7f8c8d","#8e44ad","#c0392b"];
        const colorIndex = Math.floor(Math.random() * color_codes.length);
        this.state = {
            value: 'a',
            color : color_codes[colorIndex]
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };
    renderToolbar() {
        return (
            <Toolbar style={{backgroundColor:this.state.color}}>
                <div className="left">
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
            <ListItem style={{borderBottom:'1px solid #efefef'}} onClick={()=>{
                if(window.formelo){
                    window.formelo().InAppBrowser(row.link);
                }
                else {
                    window.open(row.link);
                }
            }} key={index}>
                <div className='left'>
                    <img src={row.image} className='list-item__thumbnail left' style={{height:50, width:50}}/>
                </div>
                <div className='center' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <p>{row.name}</p>
                    <p style={{fontSize: 'small', color:'#757575', marginTop:-10}}>By {row.author}<span> .100 views</span></p>
                </div>
            </ListItem>
        );
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
        return (
            <Page renderToolbar={this.renderToolbar.bind(this)}>
                <div style={{width:'100vw', backgroundColor:this.state.color, display:'flex',
                    flexDirection:'column',  justifyContent:'center', alignItems: 'center'}}>
                    <p style={{fontSize: '1.5em', color:'white', textAlign:'center'}}>{this.props.name} Resources</p>
                </div>
                <Tabs
                    value={this.state.value}
                    tabItemContainerStyle={{
                        backgroundColor: this.state.color,
                    }}
                    onChange={()=>{this.handleChange()}}
                >
                    <Tab label="New" value="a">
                        <List
                            dataSource={this.props.resources}
                            renderRow={this.renderRow}
                            //renderHeader={() => <ListHeader>{this.props.name} Resources</ListHeader>}
                        />
                    </Tab>
                    <Tab label="Trending" value="b">
                        <List
                            dataSource={this.props.resources}
                            renderRow={this.renderRow}
                            //renderHeader={() => <ListHeader>{this.props.name} Resources</ListHeader>}
                        />
                    </Tab>
                    <Tab label="Most Viewed" value="b">

                    </Tab>
                </Tabs>
            </Page>
        );
    }
}
SubjList.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default SubjList;
