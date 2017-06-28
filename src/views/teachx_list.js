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
//http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg
//https://vatelconnect.com/files/page/21/big_big_1403789152.png
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

const data = [
    {
        name: 'Personal development',
        description: 'Self improvement topics',
        courses: [
            {
                name: "Finance",
                description: "Financial Literacy topics",
                image: "http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg',
                        link : ''
                    },
                    {
                        name : 'Make a budget',
                        description : '',
                        image : 'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg',
                        link : ''
                    },
                    {
                        name : 'Spend your money successfully',
                        description : '',
                        image : 'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg',
                        link : ''
                    },
                    {
                        name : 'Make smart investments',
                        description : '',
                        image : 'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg',
                        link : ''
                    },
                    {
                        name : 'Build your savings',
                        description : '',
                        image : 'http://cdn.publishyourarticles.net/wp-content/uploads/2015/06/7027601297_5e90a918e2_b.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Stage Fright",
                description: "Overcoming Stage Fright",
                image: "https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg',
                        link : ''
                    },
                    {
                        name : 'Relaxing Your Body',
                        description : '',
                        image : 'https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg',
                        link : ''
                    },
                    {
                        name : 'Overcoming Stage Fright for a Speech or Presentation',
                        description : '',
                        image : 'https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg',
                        link : ''
                    },
                    {
                        name : 'General Strategies For Overcoming Stage Fright',
                        description : '',
                        image : 'https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg',
                        link : ''
                    },
                    {
                        name : 'Overcoming Stage Fright for an Acting Performance',
                        description : '',
                        image : 'https://singingmachine.com/wp-content/uploads/2016/11/stage-fright.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Emergencies",
                description: "How To Handle Emergencies At Workplace",
                image: "https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Assessing the Emergency',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Handling the Emergency',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Being Prepared',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Inferiority",
                description: "How To Handle Inferiority Complex at Workplace",
                image: "http://www.universestars.com/wp-content/uploads/2016/10/The-feeling-of-inferiority-Universe-Stars.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Confronting Your Feelings',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Changing The Way You Think',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    },
                    {
                        name : 'Making Positive Steps',
                        description : '',
                        image : 'https://www.usnews.com/cmsmedia/78/80/e6d65a0c4e439d2fbc9181abc626/160115-officeemergency-stock.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Communication Skills",
                description: "Communicating better at Workplace",
                image: "http://www.bestadvice.co.uk/wp-content/uploads/2012/11/listening-feedback-communication.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'http://www.bestadvice.co.uk/wp-content/uploads/2012/11/listening-feedback-communication.jpg',
                        link : ''
                    },
                    {
                        name : 'Understanding the Basics of Communication Skills',
                        description : '',
                        image : 'http://www.bestadvice.co.uk/wp-content/uploads/2012/11/listening-feedback-communication.jpg',
                        link : ''
                    },
                    {
                        name : 'Engaging Your Audience',
                        description : '',
                        image : 'http://www.bestadvice.co.uk/wp-content/uploads/2012/11/listening-feedback-communication.jpg',
                        link : ''
                    },
                    {
                        name : 'Using Your Words',
                        description : '',
                        image : 'http://www.bestadvice.co.uk/wp-content/uploads/2012/11/listening-feedback-communication.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Professionalism",
                description: "Being Professional at Workplace",
                image: "https://vatelconnect.com/files/page/21/big_big_1403789152.png",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://vatelconnect.com/files/page/21/big_big_1403789152.png',
                        link : ''
                    },
                    {
                        name : 'Presenting Your Self in a Professional Manner',
                        description : '',
                        image : 'https://vatelconnect.com/files/page/21/big_big_1403789152.png',
                        link : ''
                    },
                    {
                        name : 'Communicating Effectively',
                        description : '',
                        image : 'https://vatelconnect.com/files/page/21/big_big_1403789152.png',
                        link : ''
                    },
                    {
                        name : 'Interacting Professionally',
                        description : '',
                        image : 'https://vatelconnect.com/files/page/21/big_big_1403789152.png',
                        link : ''
                    }
                ]
            },
            {
                name: "Time Management",
                description: "Making The Most Of Your Time Resource",
                image: "http://businessamongmoms.com/wp-content/uploads/2014/09/time-management-1.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'http://businessamongmoms.com/wp-content/uploads/2014/09/time-management-1.jpg',
                        link : ''
                    },
                    {
                        name : 'Using Your Time Productively',
                        description : '',
                        image : 'http://businessamongmoms.com/wp-content/uploads/2014/09/time-management-1.jpg',
                        link : ''
                    },
                    {
                        name : 'Minimizing Distractions',
                        description : '',
                        image : 'http://businessamongmoms.com/wp-content/uploads/2014/09/time-management-1.jpg',
                        link : ''
                    },
                    {
                        name : 'Adhering to a Daily Schedule',
                        description : '',
                        image : 'http://businessamongmoms.com/wp-content/uploads/2014/09/time-management-1.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Side Business",
                description: "running a small business part-time",
                image: "https://s3.amazonaws.com/mentoring.redesign/s3fs-public/3-2-business-woman-works-coffee-shop.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://s3.amazonaws.com/mentoring.redesign/s3fs-public/3-2-business-woman-works-coffee-shop.jpg',
                        link : ''
                    },
                    {
                        name : 'Demonstrating Qualities Gained Through Your Side Business',
                        description : '',
                        image : 'https://s3.amazonaws.com/mentoring.redesign/s3fs-public/3-2-business-woman-works-coffee-shop.jpg',
                        link : ''
                    },
                    {
                        name : 'Expanding Your Marketability',
                        description : '',
                        image : 'https://s3.amazonaws.com/mentoring.redesign/s3fs-public/3-2-business-woman-works-coffee-shop.jpg',
                        link : ''
                    },
                    {
                        name : 'Improving your skills',
                        description : '',
                        image : 'https://s3.amazonaws.com/mentoring.redesign/s3fs-public/3-2-business-woman-works-coffee-shop.jpg',
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        name: 'Technology and Devices',
        description: 'Information technology topics',
        courses: [
            {
                name: "Build a PCB",
                description: "How to build a PCB",
                image: "http://www.thefrankes.com/wp/wp-content/uploads/2012/02/sanguinololu-pcb-03.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'http://www.thefrankes.com/wp/wp-content/uploads/2012/02/sanguinololu-pcb-03.jpg',
                        link : ''
                    },
                    {
                        name : 'Design',
                        description : '',
                        image : 'http://www.thefrankes.com/wp/wp-content/uploads/2012/02/sanguinololu-pcb-03.jpg',
                        link : ''
                    },
                    {
                        name : 'Etching',
                        description : '',
                        image : 'http://www.thefrankes.com/wp/wp-content/uploads/2012/02/sanguinololu-pcb-03.jpg',
                        link : ''
                    },
                    {
                        name : 'Assembly',
                        description : '',
                        image : 'http://www.thefrankes.com/wp/wp-content/uploads/2012/02/sanguinololu-pcb-03.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Tail lights",
                description: "How to fix your car tail lights",
                image: "https://i.ytimg.com/vi/a2LBahlzR-A/maxresdefault.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'https://i.ytimg.com/vi/a2LBahlzR-A/maxresdefault.jpg',
                        link : ''
                    },
                    {
                        name : 'Finding the Right Bulb and Where It Goes',
                        description : '',
                        image : 'https://i.ytimg.com/vi/a2LBahlzR-A/maxresdefault.jpg',
                        link : ''
                    },
                    {
                        name : 'Removing An Old Turn Signal Bulb',
                        description : '',
                        image : 'https://i.ytimg.com/vi/a2LBahlzR-A/maxresdefault.jpg',
                        link : ''
                    },
                    {
                        name : 'Installing a New Bulb',
                        description : '',
                        image : 'https://i.ytimg.com/vi/a2LBahlzR-A/maxresdefault.jpg',
                        link : ''
                    }
                ]
            },
            {
                name: "Batteries",
                description: "Troubleshooting car batteries",
                image: "http://www.xn--raunalniki-njb.eu/wp-content/uploads/2016/11/Najbolj%C5%A1e-polnilne-baterije.jpg",
                resources : [
                    {
                        name : 'Introduction',
                        description : '',
                        image : 'http://www.xn--raunalniki-njb.eu/wp-content/uploads/2016/11/Najbolj%C5%A1e-polnilne-baterije.jpg',
                        link : ''
                    },
                    {
                        name : 'How to get away with murder',
                        description : '',
                        image : 'http://www.xn--raunalniki-njb.eu/wp-content/uploads/2016/11/Najbolj%C5%A1e-polnilne-baterije.jpg',
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
                        <Icon icon="ion-android-more-vertical" />
                    </ToolbarButton>
                </div>
            </Toolbar> }
        >
            <div style={{height:'5vh', width:'100vw', backgroundColor:'#00bcd4', display:'flex',
                flexDirection:'column', padding:20, justifyContent:'center'}}>
                <h2 style={{color:'white'}}>MUTA</h2>
            </div>

            <div style={{height:'100vh', maxHeight:'100vh', overflow:'scroll', width:'100vw', paddingLeft:20, paddingBottom:40, backgroundColor:'#95a5a6', color:'white'}}>
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
                                                    resources : tile.resources,
                                                    image: tile.image
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