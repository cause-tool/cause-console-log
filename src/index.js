'use strict';

const sf = require('sf');
const chalk = require('chalk');
const _ = require('lodash');
const formattingUtils = require('cause-utils/dist/formatting');


function main(step, context, config, input, done) {
	const title = _.template(config.title)(context);
	const message = _.template(config.message)(context);

	const line = sf(
		'{0} {1} {2}: {3}',
		formattingUtils.cliMsg(context.task.name),
		chalk.blue(context.prevStep.block),
		chalk.white(title),
		chalk.green(message)
	);
	context.logger.log(line);

	const output = input;
	done(null, output, null);
}


module.exports = {
	main: main,
	defaults: {
		config: {
			title: '<%=step.name%>',
			message: '<%=input%>'
		},
		data: {},
		description: 'log to console'
	}
};
