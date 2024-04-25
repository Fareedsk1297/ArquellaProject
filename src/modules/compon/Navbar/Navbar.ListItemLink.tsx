import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import './Navbar.css'
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation
} from "react-router-dom";
import { NavbarAreaInner } from "./Navbar.AreaInner";
import { Divider } from "@mui/material";

//redux-imports
import { useSelector } from "react-redux";

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
    nested: any;
    setshortLinkCollector?:any;
    shortLinkCollector?:any,
    index?:number,
    handleItemClick?:any,
    openIndex?:any,
    setOpenIndex?:any,
    classname?:any
}


function ListItemLink(props: ListItemLinkProps) {
    const location = useLocation();
    const {classname,setshortLinkCollector, icon, primary, to,nested,shortLinkCollector } = props;
    const isActive = location.pathname.includes(props.to);

    //redux-variable
    const count = useSelector((state: any) => state.drawerState.value);

    //path-extract
    const urlSegments = location.pathname
        .split("/")
        .filter((segment) => segment !== "");
    const lastWord = urlSegments[urlSegments.length - 1];

    function getLastWordFromString(str?: any) {
        const words = str?.trim()?.split("/"); // Split the string by whitespace
        console.log(str);
        return words[words.length - 1]; // Get the last word
    }
    
    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
                <RouterLink to={to} ref={ref} {...itemProps} />
            )),
        [to]
    );

    function linkCollector() {
        let dataObj = {primary,to,icon}
        let obj = shortLinkCollector.find((o:any) => o.primary === dataObj.primary);
        if(!obj){
            props.setshortLinkCollector((prevState:any) => [...prevState,dataObj])
        }
    }

    return (
        <>
        {
            !!nested? <div>
            {nested.map((area:any, index:any) =>{
            return <div key={index}>
                    <NavbarAreaInner classname={"nestedContainerCollapse"} index={index} setshortLinkCollector={setshortLinkCollector} shortLinkCollector={shortLinkCollector} innerStyle={true} {...area} />
                    <Divider />
                </div>
            }
            )}
        </div>:
        <li 
        // className={classname}
        className={getLastWordFromString(String(to)) ==
            lastWord
                ? "innerLinkContainerActive innerLinkContainer"
                : "innerLinkContainer"}
        >
            <ListItem
                onClick={linkCollector}
                component={!!nested ? 'div':renderLink}
                className="innerItemSpacing"
                // selected={isActive}
                >
                {icon ? <ListItemIcon className={getLastWordFromString(String(to)) ==
                                    lastWord
                                        ? "colorIcon"
                                        : ""}>{icon}</ListItemIcon> : null}
                
                {count && <ListItemText className={getLastWordFromString(String(to)) ==
            lastWord
                ? "innerLinkTextActive"
                : "innerLinkText"} primary={primary} />}
                
            </ListItem>
        </li>
        }
        
        </>
    );
}

export default ListItemLink;
