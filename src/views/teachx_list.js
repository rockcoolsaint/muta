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
//#95a5a6
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
                        name : 'How to Forecast Your Retirement Savings',
                        author: 'Get Rich Slowly Editors',
                        description : '',
                        image : 'http://www.getrichslowly.org/images/grs-fb.jpg',
                        link : 'http://www.getrichslowly.org/blog/2016/12/26/retirement-savings-projection/',
                        tag: 1
                    },
                    {
                        name : '7 Ways to Skip the Day Job',
                        author: 'Get Rich Slowly Editors',
                        description : '',
                        image : 'http://www.getrichslowly.org/images/grs-fb.jpg',
                        link : 'http://www.getrichslowly.org/blog/2016/12/22/7-ways-skip-day-job/',
                        tag: 1
                    },
                    {
                        name : 'How to Create Passive Income',
                        author: 'Roderick Kelly',
                        description : '',
                        image : 'http://www.getrichslowly.org/images/grs-fb.jpg',
                        link : 'http://www.getrichslowly.org/blog/2016/12/20/233833/',
                        tag : 2
                    },
                    {
                        name : 'How to Keep Your Small Business Afloat When Cash Runs Low',
                        author: 'Barry Bridges',
                        description : '',
                        image : 'https://www.influenceatwork.com/wp-content/uploads/2012/02/the-simple-dollar-logo.png',
                        link : 'http://www.thesimpledollar.com/how-to-keep-your-small-business-afloat-when-cash-runs-low/',
                        tag : 2
                    },
                    {
                        name : '9 Facts About Retiremment',
                        author: 'Financial Resources USA',
                        description : '',
                        image : 'https://s3.amazonaws.com/static.contentres.com/media/images/e0a0484d-2bab-4073-ac65-74824567a2df.png',
                        link : 'http://www.financialresources-usa.com/resource-center/retirement/9-facts-about-retirement',
                        tag : 3
                    },
                    {
                        name : 'Best side jobs for extra cash',
                        author: 'Megan Wells',
                        description : '',
                        image : 'http://www.getrichslowly.org/images/grs-fb.jpg',
                        link : 'http://www.getrichslowly.org/blog/2015/09/16/top-rated-side-jobs-for-extra-cash/',
                        tag : 3
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
                name: "Emergency",
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
            },
            {
                name: "Management",
                description: "Managerial skills",
                image: "https://static1.squarespace.com/static/555f989ee4b0b9c71e105e02/55625d9be4b0869396ef8423/5565fb5ce4b09867c23bb81e/1432746845061/community-manage.jpg",
                resources : [
                    {
                        name : 'Don\'t Play with Dead Snakes — Kill Projects Before They Kill You',
                        description : '',
                        image : 'https://www.dnanexus.com/images/team/img-richard-daly.png',
                        link : 'http://firstround.com/review/dont-play-with-dead-snakes-kill-projects-before-they-kill-you/',
                        author: 'Richard Daly'
                    },
                    {

                        name : 'How to Lead and Rally a Company Through a Layoff ',
                        description : '',
                        image : 'http://menschventures.com/wp-content/themes/laurels/images/bio.jpg',
                        link : 'http://firstround.com/review/how-to-lead-and-rally-a-company-through-a-layoff/',
                        author:'Beth Steinberg'
                    },
                    {
                        name : 'Lessons in Tenacity from the Co-Founder of Foursquare',
                        description : '',
                        image : 'https://static1.squarespace.com/static/5422fa91e4b09109bad5a2ee/t/58cac67c20099eb73e580abe/1489684110558/',
                        link : 'http://firstround.com/review/lessons-in-tenacity-from-the-co-founder-of-foursquare/',
                        author:'Denis Crowley'
                    },
                    {
                        name : 'To Grow Faster, Hit Pause — and Ask These Questions from Stripe’s COO',
                        description : '',
                        image : 'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/kOZCh3HzQ6WgZ4rcaEu1_Claire%20highres%20%281%29.jpg',
                        link : 'http://firstround.com/review/to-grow-faster-hit-pause-and-ask-these-questions-from-stripes-coo/',
                        author:'Claire Hughes'
                    },
                    {
                        name : 'A Field Guide to Identifying and Integrating Independent Board Members',
                        description : '',
                        image : 'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/oN6WRg1PQ4Ww5DaBPuXf_Michelle-Wilson_085RT%20%281%29.jpg',
                        link : 'http://firstround.com/review/a-field-guide-to-identifying-and-integrating-independent-board-members/',
                        author:'Michelle Wilson'
                    },
                    {
                        name : 'From Burning Millions to Turning Profitable in Seven Months — How HotelTonight Did It',
                        description : '',
                        image : 'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/GXZFSzHCTMSxXpKsrGDc_Sam%20Shank%20Couch.jpg',
                        link : 'http://firstround.com/review/from-burning-millions-to-turning-profitable-in-seven-months-how-hoteltonight-did-it/',
                        author:'Sam Shank'
                    },
                    {
                        name:'PlanGrid\'s Playbook for Startups to Crack Big, Established Industries',
                        description:'',
                        image:'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/0bAp647HRbyeigcJh4OL_MGP_2263.jpg',
                        link :'http://firstround.com/review/plangrids-playbook-for-startups-to-crack-open-big-established-industries/',
                        author:'Tracy Young'
                    },
                    {
                        name:'How to Save Your Company From A Communications Crisis',
                        description:'',
                        image:'http://dw0mufowhkm1s.cloudfront.net/assets/uploads/2016/09/RkuYtG3Z6ZTtR-218x150.jpg',
                        link :'http://firstround.com/review/how-the-u-s-forest-service-can-save-your-company-from-a-crisis/',
                        author:'Krista Berlincourt'
                    },
                    {
                        name:'The Principles of Quantum Team Management',
                        description:'',
                        image:'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/o7l4yLwWTpKTkUdVyuZb_jim%20hero.jpg',
                        link :'http://firstround.com/review/the-principles-of-quantum-team-management/',
                        author:'James Everingham'
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
                name : 'AI',
                description : 'Artificial Intelligence',
                image : 'https://www.ariasystems.com/blog/wp-content/uploads/2016/10/AI-machine-learning.jpg',
                resources : [
                    {
                        name : 'The AI Revolution: The Road to Superintelligence',
                        author: 'Tim Urban',
                        description : '',
                        image : 'https://i1.sndcdn.com/artworks-000167577183-9m4fgp-t500x500.jpg',
                        link : 'https://getpocket.com/explore/item/the-ai-revolution-the-road-to-superintelligence-823279599',
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
                name: "Battery",
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
                        name : 'Part 1',
                        description : '',
                        image : 'http://www.xn--raunalniki-njb.eu/wp-content/uploads/2016/11/Najbolj%C5%A1e-polnilne-baterije.jpg',
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
            <Toolbar style={{backgroundColor:'#2c3e50'}}>

                <div className="center"></div>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon="" />
                    </ToolbarButton>
                </div>
            </Toolbar> }
        >
            <div style={{height:'5vh', width:'100vw', backgroundColor:'#2c3e50', display:'flex',
                flexDirection:'column', paddingBottom:40, paddingTop:30, paddingLeft:20, justifyContent:'center'}}>
                <h2 style={{color:'white', marginBottom:0, paddingBottom:0}}>MUTA</h2>
                <p style={{color:'white', fontSize:'small'}}>Knowledge curated just for you</p>
            </div>

            <div style={{height:'100vh', maxHeight:'100vh', overflow:'scroll', width:'100vw', paddingLeft:20, paddingBottom:40, backgroundColor:'white', color:'white'}}>
                {data.map(item => {
                    return <div>
                        <h4 style={{color: '#2c3e50'}}>{item.name}</h4>
                        <p style={{marginTop:'-3vh', fontSize:'smaller', color: '#95a5a6'}}>{item.description}</p>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                                {item.courses.map(tile => (
                                    <GridTile
                                        style={{borderRadius:4, marginRight:5}}
                                        key={tile.name}
                                    >
                                        <div style={{height:500, width:250
                                        }}>
                                            <img
                                                style={{height:140, width:180}}
                                                onClick={()=>{
                                                this.props.navigator.pushPage({
                                                    component : SubjList,
                                                    props : {
                                                        resources : tile.resources,
                                                        image: tile.image,
                                                        name: tile.name
                                                    }
                                                })
                                            }}
                                                 src={'https://unsplash.it/180/'+(Math.floor(Math.random()*50)+90)+'/?random'} />
                                            <p style={{color:'#2c3e50', margin:0, marginTop:3}}>{tile.name}</p>
                                        </div>
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