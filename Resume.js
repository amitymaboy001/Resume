import React, { useState } from 'react'
import './Resume.css'
import info from './DataInfo.js'

   
function Resume() {

    const [infoText, setAward] = useState(info);

    function TitleHead() {
        return <div className="titleHead">{infoText[0].Name[0]}<br /> {infoText[0].Name[1]} <br />{infoText[0].Name[2]} </div>
    }

    function TitleImage() {
        return (<div class="titleImage">
            <img src={infoText[0].Image} />
        </div>)
    }


    function LeftText() {
        return (<div class="leftText">
            <b>Education</b>
            <br />{infoText[0].Education[0]}<br /> <b>{infoText[0].Education[1]}</b><br />{infoText[0].Education[2]}
            <br />{infoText[0].Education[3]}
            <br /><br /><br />
            <b>Contact</b>
            <br />{infoText[0].Contact[0]}<br />{infoText[0].Contact[1]}<br />{infoText[0].Contact[2]}
            <br /><br /><br />
            <b>Interest</b>
            <br />{infoText[0].Interest[0]}
            <br />{infoText[0].Interest[1]}
            <br />{infoText[0].Interest[2]}
        </div>
        )
    }

    function RightText() {
        return (
            <div class="rightText">
                <b>Award</b>
                <br /> {infoText[0].AwardInfo[0]}
                <br />{infoText[0].AwardInfo[1]}
                <br />{infoText[0].AwardInfo[2]}
                <br /><br /><br />
                <b>Skills</b>
                <br />{infoText[0].Skill[0]}
                <br />{infoText[0].Skill[1]}
                <br />{infoText[0].Skill[2]}
                <br />{infoText[0].Skill[3]}
                <br />{infoText[0].Skill[4]}
                <br />{infoText[0].Skill[5]}
                <br />{infoText[0].Skill[6]}
                <br />{infoText[0].Skill[7]}
                <br />{infoText[0].Skill[8]}
                <br /><br /><br />
                <b>Software</b>
                <br />{infoText[0].SoftWare[0]}
                <br />{infoText[0].SoftWare[1]}
                <br />{infoText[0].SoftWare[2]}
                <br />{infoText[0].SoftWare[3]}
            </div>
        )
    }


    function MainPaper() {
        return (
            <div className="mainPaper">
                <TitleHead />
                <div class="lineHead"></div>
                <div className="secoundPaper">
                    <TitleImage />
                    <LeftText />
                    <div class="lineWhite"></div>
                    <RightText />
                </div>
            </div>
        )
    }

    return (
        <>

            <MainPaper />

        </>
    );

}

export default Resume;