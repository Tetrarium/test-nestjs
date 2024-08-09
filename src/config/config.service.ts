import { Inject, Injectable } from "@nestjs/common";
import { EnvConfig } from "./interfaces";
import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { CONFIG_OPTIONS } from "./constants";
import { MODULE_OPTIONS_TOKEN } from "./config.module-definition";
import { CopnfigModuleOptions } from "./interfaces/config-module-options.interface";

// @Injectable()
// export class ConfigService {
//   private readonly envConfig: EnvConfig;

//   constructor(@Inject(CONFIG_OPTIONS) private options: Record<string, any>) {
//     const filePath = `${process.env.NODE_ENV || 'development'}.env`;
//     const envFile = path.resolve(__dirname, '../../', options.folder, filePath);

//     this.envConfig = dotenv.parse(fs.readFileSync(envFile));
//   }
 
//   get(key: string): string {
//     return this.envConfig[key]; 
//   }
// }

@Injectable()
export class ConfigService {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: CopnfigModuleOptions) {}
}