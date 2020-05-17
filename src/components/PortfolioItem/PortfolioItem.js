import React from 'react';
import styles from './PortfolioItem.scss';

export default function PortfolioItem({ href, projectAvatar, avatarAlt, projectName, projectInfo, hashtags} ) {
    return(
        <a href={href} target={'_blank'} className={styles.block}>
            <div className={styles.block_img_box}>
                <img className={styles.block_img} src={projectAvatar} alt={avatarAlt}/>
            </div>

            <div className={styles.block_text_content}>
                <h2 className={styles.block_title}>{projectName}</h2>
                {projectInfo}

                <p className={styles.block_hashtags}>
                    <span className={styles.block_hashtag}>{hashtags}</span>
                </p>
            </div>
        </a>
    )
}