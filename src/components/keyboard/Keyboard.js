import React from "react";
import Key from "./Key";


export default function Keyboard() {
    return (
        <div className="container p-0">
            <div className="row">
                <Key letter={"Q"} />
                <Key letter={"W"} />
                <Key letter={"E"} />
                <Key letter={"R"} />
                <Key letter={"T"} />
                <Key letter={"Y"} />
                <Key letter={"U"} />
                <Key letter={"I"} />
                <Key letter={"O"} />
                <Key letter={"P"} />
            </div>
            <div className="row">
                <Key letter={"A"} />
                <Key letter={"S"} />
                <Key letter={"D"} />
                <Key letter={"F"} />
                <Key letter={"G"} />
                <Key letter={"H"} />
                <Key letter={"J"} />
                <Key letter={"K"} />
                <Key letter={"L"} />
            </div>
            <div className="row">
                <Key letter={"EN"} />
                <Key letter={"Z"} />
                <Key letter={"X"} />
                <Key letter={"C"} />
                <Key letter={"V"} />
                <Key letter={"B"} />
                <Key letter={"N"} />
                <Key letter={"M"} />
                <Key letter={"BS"}/>
            </div>
        </div>
    );
};