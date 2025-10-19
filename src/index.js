import App from './App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const app = new App();

(async () => {
  try {
    await app.run();
  } catch (err) {
    MissionUtils.Console.print(err?.message ?? '[ERROR] 알 수 없는 오류가 발생했습니다.');
  }
})();
