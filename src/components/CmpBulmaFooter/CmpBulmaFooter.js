import React from "react";
import logofull from "../../img/Group 66@2x.png";
import {StyledFooterP, StyledLink} from "../StyledAzusaCmp";
import {useRest} from "@karpeleslab/react-klbfw-hooks";
import {getLocale, getPrefix} from "@karpeleslab/klbfw";
import {useLocation} from "react-router-dom";

function useLanguage() {
    return useRest("Language:local", "GET");
}

const CmpBulmaFooter = function () {
    const [languages] = useLanguage();
    const location = useLocation();

    const changeLangHandler = (e) => {
        const currentPrefix = getPrefix();
        let newPrefix = '';
        if (currentPrefix.includes(getLocale())) {
            newPrefix = currentPrefix.replace(getLocale(), e.target.value)
        } else {
            newPrefix += '/l/' + e.target.value + '/';
        }

        let newUrl = newPrefix + location.pathname;
        if (location.search) newUrl += '?' + location.search;
        if (location.hash) newUrl += '#' + location.hash;


        window.location = newUrl;
    };

    return (
        <footer className="footer" id="footer">
            <div className="level container">
                <div className="level-item">
                    <img src={logofull} alt="" width="214px"/>
                </div>
                <div className="level-item">
                    <StyledLink to="/page/terms" className="level-item">
                        TERMS
                    </StyledLink>
                </div>
                <div className="level-item">
                    <StyledLink to="/page/scta" className="level-item">
                        SCTA
                    </StyledLink>
                </div>
                <div className="level-item">
                    <StyledLink to="/page/privacy" className="level-item">
                        PRIVACY&nbsp;POLICY
                    </StyledLink>
                </div>
                <div className="level-item">
                    <div className="select is-rounded is-small">
                        <select value={getLocale()} onChange={changeLangHandler}>
                            {languages !== null && languages.data.map(l =>
                                <option key={l.Language__} value={l.Language__}>{l.Local_Name}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="level-item">
                    <StyledFooterP> © AzusaOs - All Rights Reserved</StyledFooterP>
                </div>
            </div>
        </footer>
    );
};

export default CmpBulmaFooter;
