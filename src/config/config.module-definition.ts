import { ConfigurableModuleBuilder } from "@nestjs/common";
import { CopnfigModuleOptions } from "./interfaces/config-module-options.interface";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CopnfigModuleOptions>()
  .setExtras(
    {
      isGlobal: true,
    },
    (definition, extras) => {
      console.log(definition);
      console.log(extras);
      return {
        ...definition,
        global: extras.isGlobal
      }
    }
  )
  .build();
