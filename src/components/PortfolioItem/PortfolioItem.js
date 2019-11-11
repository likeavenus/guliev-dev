import React, {Component} from 'react';
import styles from './PortfolioItem.scss';

export default class PortfolioItem extends Component {
    render() {

        return(
            <a href={this.props.href} target={'_blank'} className={styles.block}>
                <div className={styles.block_img_box}>
                    <img className={styles.block_img} src={this.props.projectAvatar} alt={this.props.avatarAlt}/>
                </div>

                <div className={styles.block_text_content}>
                    <h2 className={styles.block_title}>{this.props.projectName}</h2>
                    <p className={styles.block_info}>{this.props.projectInfo}</p>

                    <p className={styles.block_hashtags}>
                        <span className={styles.block_hashtag}>{this.props.hashtags}</span>
                    </p>
                </div>
            </a>
        )
    }
}