// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportPilotIndex from '../../../app/controller/pilot/index';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    pilot: {
      index: ExportPilotIndex;
    }
  }
}
