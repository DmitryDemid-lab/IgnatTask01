import JuniorPlus from "./JuniorPlus";
import {Meta} from "@storybook/react";
import React from "react";
import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";

export default {
  title: 'Example/JuniorPlus',
  components: JuniorPlus,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;

export const JuniorPlusBasic = () => {
  return <JuniorPlus/>
}

