'use strict';
// var assert = require('assert');
const SoLog  = require('../');

const soLog = new SoLog({
    stdoutFile: '/tmp/so-log-out.log',
    stderrFile: '/tmp/so-log-err.log'
});

describe('SoLog', function(){
    describe('#error', function(){
        it('Write Error type error message', function(){
            soLog.error(new Error('This is an error message'));
        });

        it('Write String type error message', function(){
            soLog.error('This is an error message');
        });
    });


    describe('#info', function(){
        it('Write String type info message', function(){
            soLog.info('This is an info message');
        });
    });
});
