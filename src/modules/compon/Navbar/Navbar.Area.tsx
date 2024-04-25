import { Collapse, List, ListItemIcon, ListItemText } from "@mui/material";
import MuiListItem, { ListItemProps as MuiAppBarProps } from '@mui/material/ListItem';
import { styled } from "@mui/material/styles";
// import ExpandLess from "@mui/material/Icon";
import ExpandMore from "@mui/material/Icon";
import clsx from "clsx";
import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import ListItemLink from "./Navbar.ListItemLink";
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css'

export interface NavBarLinkProps {
    Icon: any,
    Title: string,
    Path: string,
    nested?: any;
    nestedLvl?:number;

}

export interface NavBarAreaProps {
    AreaIcon: React.ReactElement; // Assuming AreaIcon is a React component
    Title: string;
    RootPath: string;
    Links: NavBarLinkProps[];
    innerStyle?: boolean;
    setshortLinkCollector: (value: any) => void; // Adjust the type to match your requirements
    shortLinkCollector?: any; // You may want to specify a more specific type
    index: number;
    handleItemClick: (index: number | null ) => void; // Adjust the parameter type to match your usage
    openIndex?: number | null; // Use 'null' instead of 'any' for clarity
    setOpenIndex?: any;
}

const ListItem = styled(MuiListItem, {
    shouldForwardProp: (prop) => prop !== 'open',
})<any>(({ theme }) => ({
    // color: 'white',
    background: '#D1F9F5'
}));

export const NavbarArea: React.FC<NavBarAreaProps> = ({handleItemClick,openIndex,setOpenIndex, index,AreaIcon, Title, RootPath, Links,innerStyle,setshortLinkCollector,shortLinkCollector}) => {
    const [isExpanded, setExpanded] = React.useState(true);
    let currLocation = useLocation();
    const ToggleExpanded = () => {
        setExpanded(!isExpanded);
    };
    function IsActiveArea(area: string): boolean {
        if (currLocation.pathname.includes(area)) return true;
        return false;
    }

    return <Fragment key={index}>
    <ListItem
        button
        // onClick={ToggleExpanded}
        onClick={() => {handleItemClick(index); ToggleExpanded()}}
        aria-expanded={openIndex === index}
        aria-controls={`collapse-content-${index}`}
        className={openIndex === index ? 'activeListItemColor':'deactiveListItemColor'}>
        <ListItemIcon className={openIndex === index? "colorIcon":"neutralIcon"}>
            {AreaIcon}
        </ListItemIcon>
        <ListItemText className="muliFont" primary={Title} />
        {openIndex === index ? <ExpandLessIcon className="lessExpand" /> : <ExpandMoreIcon />}
    </ListItem>
    <Collapse in={openIndex === index} timeout="auto" unmountOnExit id={`collapse-content-${index}`}>
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
                    index={index} 
                    handleItemClick={handleItemClick}
                    openIndex={openIndex} 
                    setOpenIndex={setOpenIndex}
                />
            )}
        </List>
    </Collapse>
</Fragment>
}