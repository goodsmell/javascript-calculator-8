import { MissionUtils } from '@woowacourse/mission-utils';
import { result } from './calculator.js';

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    MissionUtils.Console.print(`결과 : ${result(input)}`);
  }
}

export default App;
