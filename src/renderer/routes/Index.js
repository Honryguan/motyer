import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import styles from '../components/Layout/main.less';
const BgElement = Element.BgElement;


class Banner extends React.Component {
  render(){
    return (
      <div className='banner'>
        <BannerAnim autoPlay>
          <Element key="0" prefixCls="bg1"></Element>
          <Element key="1" prefixCls="bg2"></Element>
          <Element key="2" prefixCls="bg3"></Element>
          <Element key="3" prefixCls="bg4"></Element>
          <Element key="4" prefixCls="bg5"></Element>
        </BannerAnim>
        <div className="content">
          <div className="slogan">
            <p>为世界带来更多平等的机会 </p>
          </div>
            <div className="group-summary">
              <div className="title">
                <hr/>
                <p>企业简介</p>
              </div>
              <div className="summary">
                <p>蚂蚁金服是一家旨在为世界带来普惠金融服务的科技企业。
                <br/>蚂蚁金服起步于&nbsp;2004&nbsp;年成立的支付宝。2014&nbsp;年&nbsp;10&nbsp;月，蚂蚁金服正式成立。</p>
                <p>蚂蚁金服以“为世界带来更多平等的机会”为使命，致力于通过科技创新能力，搭建一个开放、共享的信用体系和金融服务平台，</p>
                <p>为全球消费者和小微企业提供安全、便捷的普惠金融服务。</p>
              </div>
            </div>
        </div>
      </div>
      );
	}
}


export default Banner;

