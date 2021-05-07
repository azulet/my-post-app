import {FaHeart, FaShareAlt} from "react-icons/fa";

import styles from './Post.module.scss';

const Post = ({content, date}) => {

  return (
      <>
        <p className = {styles.postContent}>
         {content}

        </p>
        <ul>
          <li className = {styles.postMeta}>
          <p className = {styles.postMetaDate}>
            <FaHeart/>
           34
          </p>
          <p className = {styles.postMetaDate}>
            <FaShareAlt/>
           Share
          </p>
          <p className = {styles.postMetaDate}>
           {date}
          </p>
          </li>
        </ul>
        
     </>
  )
}

export default Post;