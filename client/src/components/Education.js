import React, { Component } from 'react';
import styles from './componentsStyles';
import Slider from 'react-slick';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';

import certificates from './educationData';
import IconFullPanel from './common/IconFullPanel';
import InfoModal from './common/InfoModal';

class Education extends Component {
  render() {
    const certificates = [
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/CodeCampFrontEndDevProgram500h650w.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/fe-dev.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/AngularRxJsReactive650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/angularrxjs.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/AdvancedReactAndRedux500h650w.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/reactredux.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/GitComplete650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/git.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/CompleteDevelopersGuideToMongoDB650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/mongodb.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/CompleteReactNativeAndRedux650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/reactnative.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/AngularDeepDive650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/angular.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/CompleteReactWebAppDeveloper500x650.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/react.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/ExpressJSFundamentals650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/nodejs.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/GraphQLWithReact650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/graphqlandreact.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/JavaScriptAndES650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/js3s6.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/RxjsInPractice650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/rxjs.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/GitlabCIPipelinesCICD650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/gitlabcicd.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/JavaScriptUnderstandingTheWeirdParts650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/jslogo.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/JavaScriptUnderstandingTheWeirdParts650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/nodejs.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/NodeWithReactFullstackWeb650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/mern+(2).png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/MasterTestandBehaviorDrivenDevelopment650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/reacttest.png',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/ModernReactWithRedux650x500.jpg',
      'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/reactredux.png'
      // 'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/JavaScriptEssentials650x500.jpg',
      // 'https://davidjwall-dev-images.s3-ap-northeast-1.amazonaws.com/jslogo.png',
    ];
    let settings = {};
    if (window.innerWidth > 599) {
      settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: 'slides'
      };
    } else {
      settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
      };
    }
    // const { color, textColor } = this.props.muiTheme.appBar;

    return (
      <section className="education">
        <FontAwesome
          name="university"
          size="5x"
          className="education__icon"
          // style={{ color: this.props.iconColor }}
        />
        <ul className="education__grid">
          {certificates.map((item, i) => {
            if (!i % 2) {
              return (
                <li key={i}>
                  <img src={item} />
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <div>
                    <img src={item} />
                  </div>
                </li>
              );
            }
          })
        }
        </ul>
        <div className="info-block">
          <InfoModal
            title="Front-end, back-end and everything in between."
            description="The certificates displayed in this section represent a portion of the content I've covered on my path to becoming a competent, well rounded full-stack web developer. Web development is an ever changing industry and I look forward to continuing my education as new and better libraries, frameworks, and languages emerge."
            iconName="fa fa-info"
          />
        </div>
      </section>
      // <Card
      // 	className="row"
      // 	style={{
      // 		...styles.fullPanelCard,
      // 		backgroundColor: color,
      // 		color: textColor,
      // 		position: 'relative'
      // 	}}
      // >
      // 	<IconFullPanel
      // 		iconName="school"
      // 		panelTitle="Education"
      // 		color={textColor}
      // 	/>

      // 	<div className="col s12" style={{ paddingLeft: 46, paddingRight: 46 }}>
      // 		<Slider {...settings} style={{ padding: '10%' }}>
      // 			{certificates.map((certificate, i) => {
      // 				return (
      // 					<div key={i}>
      // 						<img
      // 							src={certificate.URL}
      // 							alt={certificate.name}
      // 							className="img-responsive"
      // 						/>
      // 						<p
      // 							className="textCenter"
      // 							style={{
      // 								fontSize: '1.1em',
      // 								marginTop: -10
      // 							}}
      // 						>
      // 							{certificate.name}
      // 						</p>
      // 					</div>
      // 				);
      // 			})}
      // 		</Slider>
      // 	</div>
      // 	<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
      // 		<InfoModal
      // 			title="Front-end, back-end and everything in between."
      // 			description="The certificates displayed in this section represent a portion of the content I've covered on my path to becoming a competent, well rounded full-stack web developer. Web development is an ever changing industry and I look forward to continuing my education as new and better libraries, frameworks, and languages emerge."
      // 			iconName="fa fa-info"
      // 		/>
      // 	</div>
      // </Card>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Education);
