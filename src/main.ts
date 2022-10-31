import { Container } from 'inversify';
import Application from './app/application.js';
import LoggerService from './common/logger/logger.service.js';
import ConfigService from './common/config/config.service';
import { Component } from './types/component.types.js';
import { ConfigInterface } from './common/config/config.interface.js';
import { LoggerInterface } from './common/logger/logger.interface.js';

const applicationContainer = new Container();
applicationContainer.bind<Application>(Component.Application).to(Application);
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService);
applicationContainer.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService);

const application = applicationContainer.get<Application>(Component.Application);
await application.init();
