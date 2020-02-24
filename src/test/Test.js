import React from "react";

//------ передача параметров через {props.параметр}
//       и контента через {props.children}  ----------

export default props => (
  <div>
    <p>
      Передача парметров и контента. Time: {props.time}. Year: {props.year}
    </p>

    {props.children}
  </div>
);
