import React from "react";

const SkillCard = ({ icon, title, skills }) => {
  const classString = icon;
  return (
    <div>
      <center>
        <div style={{ padding: 30, color: "AAAAAA" }}>
          <i className={`${classString}`} style={{ fontSize: "4em" }}></i>
        </div>

        <h4>{title}</h4>
      </center>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <ul
            style={{
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {skills.map((skill, index) => (
              <li key={index} style={{ alignContent: "left" }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
