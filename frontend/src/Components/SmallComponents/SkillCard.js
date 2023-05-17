import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { LinearProgress } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const SkillCard = ({ icon, title, text, skills }) => {
  return (
    <div className="p-8 rounded-lg overflow-hidden bg-white border border-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-50">
      <center className="pb-4">
        <i
          className={
            icon + " w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 text-4xl"
          }
        ></i>

        <a>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white">
            {title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 inline-block">
          {text}
        </p>
        <h2 className="pt-2 text-green-600 text-lg font-semibold">
          Tech-Stack
        </h2>
      </center>
      <div className="flex flex-wrap justify-center">
        {Object.entries(skills).map(([key, value]) => (
          <div key={key} className="flex text-start px-4">
            <HtmlTooltip
              title={
                <div>
                  <Typography color="inherit">
                    {" "}
                    <b>{value.title}</b>
                  </Typography>
                  <div className="pt-2 pb-4 text-green-600">
                    My experience:
                    <LinearProgress
                      variant="determinate"
                      color="inherit"
                      value={value.level}
                    />
                  </div>
                  <em>{value.text}</em>
                </div>
              }
            >
              <div>
                <i
                  className={`${value.icon} text-2xl text-gray-600 hover:text-green-500 hover:text-4xl transition-scale duration-300`}
                  data-tip=""
                  data-for={key}
                />
              </div>
            </HtmlTooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
