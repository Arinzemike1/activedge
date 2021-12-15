import React from "react";

const Header = ({ title }) => {
    return (
        <div>
           <h1 className="d-flex mt-5 justify-content-center header">{title}</h1><hr />
        </div>
    )
}

export default Header;