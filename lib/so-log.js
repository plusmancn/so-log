'use strict';
/**
 * 简单日志服务
 */
const fs = require('fs');
const moment = require('moment');
const util = require('util');

function Solog(options){
    let self = this;
    self.stdout = fs.createWriteStream(options.stdoutFile, {flags: 'a'});
    self.stderr = fs.createWriteStream(options.stderrFile, {flags: 'a'});
}

Solog.prototype.info = function(message){
    let self = this;
    let logMessage = `[INFO] [${moment().format('YYYY-MM-DD HH:mm:ss')}] ${self.transf(message)}`;
    self.stdout.write(logMessage + '\n', 'utf-8');
};

Solog.prototype.error = function(message){
    let self = this;
    let logMessage = `[ERROR] [${moment().format('YYYY-MM-DD HH:mm:ss')}] ${self.transf(message)}`;
    self.stderr.write(logMessage + '\n', 'utf-8');
    self.stdout.write(logMessage + '\n', 'utf-8');
};

Solog.prototype.transf = function(message){
    if(util.isError(message)){
        return message.stack;
    }

    if(util.isString(message)){
        return message;
    }

    try{
        return JSON.stringify(message)
    }catch(e){
        return 'Unkonw Type';
    }
};

module.exports = Solog;
