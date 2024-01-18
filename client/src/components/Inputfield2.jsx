import React from "react";

import { Text } from "components";

const Inputfield2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-1.5 items-start justify-start w-full">
            <Text
              className="text-blue_gray-800 text-sm w-auto"
              size="txtInterMedium14Bluegray800"
            >
              {props?.userlabel}
            </Text>
            {props.txtarea ?
              <textarea value={props.val} onChange={props.onChange} rows={props.rows} style={{ resize: 'none' }}
                className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-3 rounded-lg shadow-bs w-full" />


              :
              <input value={props.val} onChange={props.onChange} type={props.type}
                className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-4 py-3 rounded-lg shadow-bs w-full" />
            }
          </div>
        </div>
      </div>
    </>
  );
};

Inputfield2.defaultProps = { userlabel: "First name" };

export default Inputfield2;
