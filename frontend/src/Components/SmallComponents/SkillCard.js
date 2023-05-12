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
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <center className="pb-4">
        <i
          className={
            icon + " w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 text-4xl"
          }
        ></i>

        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 inline-block">
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
                  <Typography color="inherit">{value.text}</Typography>
                  <div className="p-2 text-green-600">
                    <LinearProgress
                      variant="determinate"
                      color="inherit"
                      value={60}
                    />
                  </div>
                  <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                  <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                </div>
              }
            >
              <div>
                <i
                  className={`${value.icon} text-2xl text-gray-700 hover:text-green-500 hover:text-4xl transition-scale duration-300`}
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
