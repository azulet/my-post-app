import styles from './Bio.module.scss';

const Bio = ({headshot, name, tagline, role}) => {

    return (
        
        <div className = {styles.bio}>
             <div className = {styles.bioImage}>
            <img src= {"https://i.pinimg.com/564x/c0/fc/f1/c0fcf164efd9a75a5f7d8065d4365451.jpg"} alt = {`Headshot of ${name}`} />

            </div> 
   
            <div className = {styles.bioContent}>
            <p className = {styles.bioContentName}>
            {name}
            </p>
            <p className = {styles.bioContentTag}>
                {tagline}
            </p>
            <p className = {styles.bioContentRole}>
                {role}
            </p>
            </div> 
       </div>
       
    );
    
}

export default Bio;


