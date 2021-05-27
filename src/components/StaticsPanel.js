import styled from 'styled-components';
import { screen } from "../styles/globalStyles"
import { useTranslation } from "react-i18next";

const StaticsPanel = (props) => {

    const [t, i18n] = useTranslation("global");
    const statisticsData = [
        { details: "details.hp", stat: props.hp, barColor: "blue" },
        { details: "details.attack", stat: props.attack, barColor: "orange" },
        { details: "details.defense", stat: props.defense, barColor: "green" },
        { details: "details.speed", stat: props.speed, barColor: "blue" },
        { details: "details.spatk", stat: props.spatk, barColor: "orange" },
        { details: "details.spdf", stat: props.spdef, barColor: "green" }
    ]

    return (
        <StatisticsPanelStyles>

            <h3>{t("details.statistics")}</h3>
            <hr className='decorationLine' />
            {statisticsData.map(stat =>
                <div className='stat'>
                    <h4>{t(stat.details)}</h4>
                    <div className={`progress-bar ${stat.barColor} stripes shine`}>
                        <span style={{ width: stat.stat }}>
                            <div className='number'>{stat.stat}</div>
                        </span>
                    </div>
                </div>
            )}
        </StatisticsPanelStyles>
    )
}

export default StaticsPanel;

export const StatisticsPanelStyles = styled.div`

    margin: 3rem 0;

    .decorationLine{
        color: gray;
    }

    .stat{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h4 {
            font-weight: bold;
            margin-right: 1rem;
        }
    }
    

    .number{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1px;
    }

    h3{
        text-align: center;
        color: gray;
        letter-spacing: 8px;
    }

    .progress-bar {
        background-color: #1a1a1a;
        height: 20px;
        padding: 3px;
        width: 150px;
        margin: 8px 0;         
        border-radius: 5px;
        box-shadow: 0 1px 5px #000 inset, 0 1px 0 #444;           
    }

    .progress-bar span {
        display: inline-block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
        transition: width .4s ease-in-out; 
        background-color: #ccc;   
    }

    /**** GRADIENTS ****/
    .blue span {
        background-color: #34c2e3;   
    }

    .orange span {
        background-color: #fecf23;
        background-image: linear-gradient(top, #fecf23, #fd9215);  
    }   

    .green span {
        background-color: #a5df41;
        background-image: linear-gradient(top, #a5df41, #4ca916);  
    }

    /**** STRIPES ****/
    .stripes span {
        background-size: 30px 30px;
        background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
            transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
            transparent 75%, transparent);            

        animation: animate-stripes 3s linear infinite;             
    }

    @keyframes animate-stripes {
        0% {background-position: 0 0;} 100% {background-position: 60px 0;}
    }

    /**** SHINE ****/
    .shine span {
        position: relative;
    }

    .shine span::after {
        content: '';
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        border-radius: 3px;
        animation: animate-shine 2s ease-out infinite;             
    }

    @keyframes animate-shine {
        0% {opacity: 0; width: 0;}
        50% {opacity: .5;}
        100% {opacity: 0; width: 95%;}
    }

    /**** GLOW ****/
    .glow span {
        box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;    
        animation: animate-glow 1s ease-out infinite;          
    }

    @keyframes animate-glow {
        0% { box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;} 
        50% { box-shadow: 0 5px 5px rgba(255, 255, 255, .3) inset, 0 -5px 5px rgba(255, 255, 255, .3) inset;} 
        100% { box-shadow: 0 5px 5px rgba(255, 255, 255, .7) inset, 0 -5px 5px rgba(255, 255, 255, .7) inset;}
    }

    ${screen.md}{
        .progress-bar {
            width: 350px;
        }
    }
`