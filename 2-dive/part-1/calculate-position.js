import COMMAND_TYPE from '../command-types';

export default (commands) => {
  let horizontalPosition = 0;
  let depth = 0;

  commands.forEach((command) => {
    const [commandType, value] = command.split(' ');
    switch (commandType) {
      case COMMAND_TYPE.FORWARD:
        horizontalPosition += +value;
        break;
      case COMMAND_TYPE.UP:
        depth -= +value;
        break;
      case COMMAND_TYPE.DOWN:
        depth += +value;
        break;
      default:
        break;
    }
  });

  return depth * horizontalPosition;
};
