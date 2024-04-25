import { Collapse, List, ListItemIcon, ListItemText } from "@mui/material";
import MuiListItem, { ListItemProps as MuiAppBarProps } from '@mui/material/ListItem';
import { styled } from "@mui/material/styles";
// import ExpandLess from "@mui/material/Icon";
import ExpandMore from "@mui/material/Icon";
import clsx from "clsx";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import ListItemLink from "./Navbar.ListItemLink";
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css'

export interface NavBarLinkProps {
    Icon: JSX.Element,
    Title: string,
    Path: string,
    nested?: any;
    nestedLvl?:number;

}

export interface NavBarAreaProps {
    AreaIcon: JSX.Element,
    Title: string,
    RootPath: string,
    Links: NavBarLinkProps[],
    innerStyle?:boolean,
    setshortLinkCollector?:any,
    shortLinkCollector?:any,
    index?:number,
    classname?:any
}

const ListItem = styled(MuiListItem, {
    shouldForwardProp: (prop) => prop !== 'open',
})<any>(({ theme }) => ({
    // color: 'white',
    background: '#D1F9F5'
}));

export const NavbarAreaInner: React.FC<NavBarAreaProps> = ({ classname,index,AreaIcon, Title, RootPath, Links,innerStyle,setshortLinkCollector,shortLinkCollector}) => {
    const [isExpanded, setExpanded] = React.useState(false);
    let currLocation = useLocation();
    const ToggleExpanded = () => {
        setExpanded(!isExpanded);
    };
    function IsActiveArea(area: string): boolean {
        if (currLocation.pathname.includes(area)) return true;
        return false;
    }

    //prac
    return <Fragment>
        <ListItem
            button
            onClick={ToggleExpanded}
            className={innerStyle ? 'nestedLvl1Style':clsx(IsActiveArea(RootPath))}>
            <ListItemIcon>
                {AreaIcon}
            </ListItemIcon>
            <ListItemText primary={Title} />
            {isExpanded ? <ExpandLessIcon className="lessExpand" /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse  in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {Links.map((link, index) =>
                    <ListItemLink
                        key={index}
                        primary={link.Title}
                        to={`/${RootPath}/${link.Path}`}
                        icon={link.Icon}
                        nested={link.nested}
                        setshortLinkCollector={setshortLinkCollector}
                        shortLinkCollector={shortLinkCollector}
                        classname={classname}
                    />
                )}
            </List>
        </Collapse>
    </Fragment>
}