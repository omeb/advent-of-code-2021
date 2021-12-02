import COMMAND_TYPE from '../command-types';

export default (commands) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  commands.forEach((command) => {
    const [commandType, value] = command.split(' ');
    switch (commandType) {
      case COMMAND_TYPE.FORWARD:
        horizontalPosition += +value;
        depth += +value * aim;
        break;
      case COMMAND_TYPE.UP:
        aim -= +value;
        break;
      case COMMAND_TYPE.DOWN:
        aim += +value;
        break;
      default:
        break;
    }
  });

  return depth * horizontalPosition;
};
