import { MissionUtils } from '@woowacourse/mission-utils';
import { result } from './calculator.js';
import { MESSAGE } from './constants/message.js';

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_PROMPT);
    MissionUtils.Console.print(`${MESSAGE.RESULT_PREFIX}${result(input)}`);
  }
}

export default App;
