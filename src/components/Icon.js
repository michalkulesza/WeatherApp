import React from "react";

import { ReactComponent as ClearDayIcon } from "../img/icons/clear-day.svg";
import { ReactComponent as ClearNightIcon } from "../img/icons/clear-night.svg";
import { ReactComponent as RainIcon } from "../img/icons/rain.svg";
import { ReactComponent as SnowIcon } from "../img/icons/snow.svg";
import { ReactComponent as SleetIcon } from "../img/icons/sleet.svg";
import { ReactComponent as WindIcon } from "../img/icons/wind.svg";
import { ReactComponent as FogIcon } from "../img/icons/fog.svg";
import { ReactComponent as CloudyIcon } from "../img/icons/cloudy.svg";
import { ReactComponent as PartlyCloudyDayIcon } from "../img/icons/partly-cloudy-day.svg";
import { ReactComponent as PartlyCloudyNightIcon } from "../img/icons/partly-cloudy-night.svg";

const Icon = props => {
  switch (props.name) {
    case "clear-day":
      return <ClearDayIcon />;
    case "clear-night":
      return <ClearNightIcon />;
    case "rain":
      return <RainIcon />;
    case "snow":
      return <SnowIcon />;
    case "sleet":
      return <SleetIcon />;
    case "wind":
      return <WindIcon />;
    case "fog":
      return <FogIcon />;
    case "cloudy":
      return <CloudyIcon />;
    case "partly-cloudy-day":
      return <PartlyCloudyDayIcon />;
    case "partly-cloudy-night":
      return <PartlyCloudyNightIcon />;
    default:
      return <ClearDayIcon />;
  }
};

export default Icon;
