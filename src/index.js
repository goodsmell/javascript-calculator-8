import App from './App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const app = new App();

(async () => {
  try {
    await app.run();
  } catch (err) {
    MissionUtils.Console.print(err?.message);
  }
})();
