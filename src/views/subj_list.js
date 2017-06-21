import React, {Component} from 'react';
import {Page, Toolbar,Button, ListHeader,
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
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';

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
const tilesData = [
    {
        img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];
class SubjList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render(){
        return <Page renderToolbar={() =>
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
            </Toolbar> }
        >
            <div style={{height:'40vh', width:'100vw', backgroundColor:'#00bcd4', display:'flex',
                flexDirection:'column',  justifyContent:'center', alignItems: 'center'}}>
                <img style={{width:120, height:120, borderRadius:50}} src={'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg'} />
            </div>
            <div style={{height:'30vh', width:'100vw', paddingLeft:20, paddingBottom:40}}>
                <List>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar src="http://material-ui.com/images/uxceo-128.jpg" />
                        }
                    >
                        Image Avatar
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar
                                src="http://material-ui.com/images/uxceo-128.jpg"
                                size={30}
                                style={style}
                            />
                        }
                    >
                        Image Avatar with custom size
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
                        }
                    >
                        FontIcon Avatar
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar
                                icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
                                color={blue300}
                                backgroundColor={indigo900}
                                size={30}
                                style={style}
                            />
                        }
                    >
                        FontIcon Avatar with custom colors and size
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar icon={<FileFolder />} />
                        }
                    >
                        SvgIcon Avatar
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar
                                icon={<FileFolder />}
                                color={orange200}
                                backgroundColor={pink400}
                                size={30}
                                style={style}
                            />
                        }
                    >
                        SvgIcon Avatar with custom colors and size
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={<Avatar>A</Avatar>}
                    >
                        Letter Avatar
                    </ListItem>
                    <ListItem
                        disabled={true}
                        leftAvatar={
                            <Avatar
                                color={deepOrange300}
                                backgroundColor={purple500}
                                size={30}
                                style={style}
                            >
                                A
                            </Avatar>
                        }
                    >
                        Letter Avatar with custom colors and size
                    </ListItem>
                </List>
            </div>
        </Page>
    }
}

SubjList.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default SubjList;