import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as path from 'path';
import * as fs from 'fs';
import { Logger } from 'winston';
import * as winston from 'winston';

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
  HTTP = 'http',
}

@Injectable()
export class LoggerService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  static getWinstonConfig() {
    const logDir = path.resolve(process.cwd(), 'logs');

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    return {
      levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
      },
      level:
        process.env.NODE_ENV === 'production' ? LogLevel.INFO : LogLevel.DEBUG,

      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.json(),
      ),

      transports: [
        ...(process.env.NODE_ENV !== 'production'
          ? [
              new winston.transports.Console({
                format: winston.format.combine(
                  winston.format.colorize(),
                  winston.format.simple(),
                ),
              }),
            ]
          : []),

        //Error
        new winston.transports.File({
          filename: path.join(logDir, 'error.log'),
          level: LogLevel.ERROR,
          maxsize: 10 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),

        //Warn
        new winston.transports.File({
          filename: path.join(logDir, 'warn.log'),
          level: LogLevel.WARN,
          maxsize: 10 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),

        //Info
        new winston.transports.File({
          filename: path.join(logDir, 'info.log'),
          level: LogLevel.INFO,
          maxsize: 50 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),

        //Debug

        new winston.transports.File({
          filename: path.join(logDir, 'debug.log'),
          level: LogLevel.DEBUG,
          maxsize: 50 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),

        //Http
        new winston.transports.File({
          filename: path.join(logDir, 'http.log'),
          level: LogLevel.HTTP,
          maxsize: 10 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),

        //Combined
        new winston.transports.File({
          filename: path.join(logDir, 'combined.log'),
          maxsize: 50 * 1024 * 1024,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
      ],
    };
  }

  log(level: LogLevel, message: string, meta?: any) {
    this.logger.log(level, message, {
      context: 'Logger',
      ...meta,
      timeStamp: new Date().toISOString(),
    });
  }

  info(message: string, meta?: any) {
    this.log(LogLevel.INFO, message, meta);
  }

  error(message: string, error: Error, meta?: any) {
    this.log(LogLevel.ERROR, message, {
      ...meta,
      stack: error?.stack,
      errorName: error?.name,
      errorMessage: error?.message,
    });
  }

  warn(message: string, meta?: any) {
    this.log(LogLevel.WARN, message, meta);
  }

  debug(message: string, meta?: any) {
    this.log(LogLevel.DEBUG, message, meta);
  }

  httpRequest(request: any, responce: any, duration: number) {
    this.logger.log('HTTP Request', {
      context: 'HTTP',
      method: request.method,
      url: request.url,
      statusCide: responce.statusCide,
      duration: `${duration}ms`,
      userAgent: request.headers['user-agent'],
      ip: request.ip,
    });
  }

  async safeStep<T>(
    step: string,
    game: any,
    fn: () => Promise<T>,
  ): Promise<T | null> {
    try {
      return await fn();
    } catch (error) {
      this.logger.error(`Game import failed at step: ${step}`, error, {
        step,
        psnId: game?.psnId,
        slug: game?.slug,
        region: game?.region,
      });
      return null;
    }
  }
}
