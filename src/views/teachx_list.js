import React, {Component} from 'react';
import {Page, Toolbar,Button, List,ListItem,ListHeader,
    Icon, ToolbarButton, Input, Modal, notification, BackButton} from 'react-onsenui';
import store from '../redux/store';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SubjList from './subj_list';
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

const data = [
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Personal development',
        description: 'Financial Literacy topics',
        courses: [
            {
                name: "Finance",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance2",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/burger-827309_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance3",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/camera-813814_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance4",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            },
            {
                name: "Finance5",
                description: "money matters",
                image: "http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                resources : [
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : '',
                        link : ''
                    }
                ]
            }
        ]
    }
];

class TeachxList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    map(){

    }
    render(){
        return <Page renderToolbar={() =>
            <Toolbar style={{backgroundColor:'#00bcd4'}}>

                <div className="center"></div>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon="md-menu" />
                    </ToolbarButton>
                </div>
            </Toolbar> }
        >
            <div style={{height:'5vh', width:'100vw', backgroundColor:'#00bcd4', display:'flex',
                flexDirection:'column', padding:20, justifyContent:'center'}}>
                <h2 style={{color:'white'}}>MUTA</h2>
            </div>

            <div style={{height:'30vh', width:'100vw', paddingLeft:20, paddingBottom:40}}>
                {data.map(item => {
                    return <div>
                        <h4>{item.name}</h4>
                        <p style={{marginTop:'-2vh'}}>{item.description}</p>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                                {item.courses.map(tile => (
                                    <GridTile
                                        key={tile.name}
                                        title={tile.name}
                                        actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                        titleStyle={styles.titleStyle}
                                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                    >
                                        <img onClick={()=>{
                                            this.props.navigator.pushPage({
                                                component : SubjList,
                                                props : {
                                                    resources : tile.resources
                                                }
                                            })
                                        }} src={tile.image} />
                                    </GridTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                })}
            </div>
        </Page>
    }
}

TeachxList.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default TeachxList;