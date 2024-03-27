import React, { useState } from 'react'

function Button(props) {
    let [cup, setCup] = useState(0)
    var abc = () => {
        setCup(cup + 1)
    }
    var def = () => {
        setCup(cup - 1)
    }

    () => {
        if (document.getElementById('ib').checked == true) {
            setCup(cup + 1);
        }
        else {
            setCup(cup - 1);
        }
    }


    return (
        <>
            <div type="button" className="btn border-0 position-relative fs-5">
                <div>{props.icon}</div>
                <div onClick={abc}>{props.icon1}</div>
                <div onClick={def}>{props.icon2}</div>

                <div className={props.cls}>
                    <span className="position-absolute hidden top-0 start-100 translate-middle badge rounded-pill bg-success w-50 d-flex justify-content-center  ">
                        {cup}
                        <span className="visually-hidden">total items</span>
                    </span>
                </div>

            </div>
        </>
    )
}

export default Button