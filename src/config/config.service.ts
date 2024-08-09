import { Injectable } from "@nestjs/common";
import { EnvConfig } from "./interfaces";
import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    const options = { folder: './config' };

    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    console.log(envFile);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key]; 
  }
}