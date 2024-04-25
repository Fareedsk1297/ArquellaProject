import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarArea } from "./Navbar.Area";

import Eye, { areas } from "./NavbarIcon.SvgData";

import { List } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";

import profilePic from "../../../assets/Avatarvar.png";
import { useSelector } from "react-redux";

export const NavbarPaths: React.FC<{}> = () => {
    //redux-variables
    const count = useSelector((state: any) => state.drawerState.value);

    const [shortLinkCollector, setshortLinkCollector] = useState<
        any | undefined
    >([]);
    const location = useLocation();
    const urlSegments = location.pathname
        .split("/")
        .filter((segment) => segment !== "");
    const lastWord = urlSegments[urlSegments.length - 1];
    //save reference for dragItem and dragOverItem
    const dragItem = React.useRef<any>(null);
    const dragOverItem = React.useRef<any>(null);
    const [newFruitItem, setNewFruitItem] = React.useState("");
    //const handle drag sorting
    const handleSort = () => {
        //duplicate items
        let _fruitItems = [...shortLinkCollector];

        //remove and save the dragged item content
        const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];

        //switch the position
        _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);

        //reset the position ref
        dragItem.current = null;
        dragOverItem.current = null;

        //update the actual array
        setshortLinkCollector(_fruitItems);
    };

    //handle name change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setshortLinkCollector(e.target.value);
    };

    //handle new item addition
    const handleAddItem = () => {
        const _fruitItems = [...shortLinkCollector];
        _fruitItems.push(newFruitItem);
        setshortLinkCollector(_fruitItems);
    };

    const [openIndex, setOpenIndex] = useState();

    const handleItemClick = (index: any) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const removeElement = (element: any) => {
        const newArray = shortLinkCollector.filter(
            (item: any) => item !== element
        );
        setshortLinkCollector(newArray);
    };

    function getLastWordFromString(str?: any) {
        const words = str?.trim()?.split("/"); // Split the string by whitespace
        console.log(str);
        return words[words.length - 1]; // Get the last word
    }
    console.log(shortLinkCollector);
    return (
        <div style={{ padding: count ? "15px" : "0px" }}>
            {count && (
                <>
                    <div className="sideBarProfileContainer">
                        <img src={profilePic} />
                        <div className="detailDiv">
                            <div className="nameP">Cora Trantow</div>
                            <div className="title">Project Manager</div>
                        </div>
                    </div>
                    <span className="shortcutText">Shortcuts</span>
                    <div className="shortListContainer">
                        {shortLinkCollector.map((link: any, index: any) => (
                            <div
                                className={
                                    getLastWordFromString(String(link.to)) ==
                                    lastWord
                                        ? "list-item shortCutLinkActivate"
                                        : "list-item shortCutLinkdeActivate"
                                }
                                draggable
                                onDragStart={(e) => (dragItem.current = index)}
                                onDragEnter={(e) =>
                                    (dragOverItem.current = index)
                                }
                                onDragEnd={handleSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                
                                <div className="iconLinkContainerShortLink">
                                    <span
                                        className={
                                            getLastWordFromString(
                                                String(link.to)
                                            ) == lastWord
                                                ? "colorIcon"
                                                : ""
                                        }
                                        style={{ display: "flex" }}
                                    >
                                        {link.icon}
                                    </span>
                                    <li
                                        key={index}
                                        className="shortcutLinkText"
                                    >
                                        <Link to={link.to}>{link.primary}</Link>
                                    </li>
                                </div>

                                <div
                                    onClick={() => removeElement(link)}
                                    style={{
                                        cursor: "pointer",
                                        display: "flex",
                                    }}
                                    className="removeEye"
                                >
                                    <Eye />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <p className="categoryTExt">Categories</p>

            <List component="nav" aria-label="collapsible list">
                {areas.map((area, index) => (
                    <div key={index}>
                        <NavbarArea
                            {...area}
                            index={index}
                            handleItemClick={handleItemClick}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            setshortLinkCollector={setshortLinkCollector}
                            shortLinkCollector={shortLinkCollector}
                        />
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
};
