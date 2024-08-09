import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { CONFIG_OPTIONS } from "src/config/constants";
import { ConfigOptions } from "./interfaces";
import { ConfigurableModuleClass } from "./config.module-definition";

// @Module({})
// export class ConfigModule {
//   static register(options: ConfigOptions): DynamicModule {
//     return {
//       module: ConfigModule,
//       providers: [
//         {
//           provide: CONFIG_OPTIONS,
//           useValue: options
//         },
//         ConfigService
//       ],
//       exports: [ConfigService],
//     };
//   }
// }

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule extends ConfigurableModuleClass {}
