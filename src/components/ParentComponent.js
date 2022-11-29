import React from "react";
import {useTranslation} from 'react-i18next';

export function FTUTrans(props) {
    const {t} = useTranslation(props.ns);

    if (props.vari) {
        return t(props.name, props.vari);
    } else {
        return t(props.name);
    }
}

export class ParentComponent extends React.Component{
    
}