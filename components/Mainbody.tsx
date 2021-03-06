import styles from '../styles/mainbody.module.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Session from "C://PurpleNetwork/PurpleNetwork/types.d";


function Mainbody({session, posts}: Session){
    return (
      <div className={styles.mainBody}>
        <Sidebar session={session} />
        <Feed session={session} posts = {posts}/>
        <Widgets />
      </div>
    );
}

export default Mainbody