import React from "react";
import Navbar from "./Navbar";
import LockScreen from "./LockScreen";
import "../css/Display.css"
import Menu from "./Menu";
import Music from "./Music";
// import {act} from 'react-dom/test-utils'
import Settings from "./Settings";
import Song from "./Song";
import Playing from "./Playing";
import Theme from "./Theme";
import Wheelcolor from "./Wheelcolor";
import Wallpaper from "./Wallpaper";

class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems,songItems, playing, songIndex, audio, songUrl ,songImgUrl,wallpaper,wallpaperItems, noty, setNoty,notifyText} = this.props;
        
        return (
            <div style={{backgroundImage:`url(${wallpaperItems[wallpaper]})`}} className="display">
                <Navbar noty={noty} setNoty={setNoty} playing={playing} notifyText ={notifyText} />
                {currentMenu===-2&&<LockScreen/>}
                {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />}
                {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
                {currentMenu === 2 && <div className="blank-div"><h1 className="empty-text">Games</h1></div>}
                {currentMenu === 3 && <Settings active={active}/>}
                {currentMenu === 4 && <Song songItems={songItems} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1 className="empty-text">Artists</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1 className="empty-text">Albums</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}
                {currentMenu===8&&<Theme active={active}/>}
                {currentMenu===9&&<Wheelcolor active={active}/>}
                {currentMenu===10&&<Wallpaper active={active}/>}
            </div>
        )
    }
}

export default Display;