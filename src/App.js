import { MissionUtils } from '@woowacourse/mission-utils';
import { result } from './calculator.js';
class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const resultValue = result(input);
    MissionUtils.Console.print(`결과 : ${resultValue}`);
  }
}

export default App;
