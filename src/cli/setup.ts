import { camelize, isBase64 } from './../utils/tools';
import commandLineUsage from 'command-line-usage';
import meow, { AnyFlags } from 'meow';
import { Merge, JsonObject } from 'type-fest';
import { HELP_HEADER } from "./logo";
import { readJsonSync, writeFile } from 'fs-extra'
import * as changeCase from "change-case";
import { tryOpenFileAsObject } from './file-utils';
import { ConfigObject } from '../api/model/config';
import uuidAPIKey from 'uuid-apikey';
import { ev, Spin } from '../controllers/events';
import isUrl from 'is-url-superb';
import * as path from 'path';

let checkUrl = url => typeof url === 'string' ? isUrl(url) : false;

const configWithCases = readJsonSync(path.join(__dirname,'../../bin/config-schema.json'));

const optionList:
    Merge<Merge<{
        name?: string,
        description?: string,
        typeLabel?: string,
    }, meow.AnyFlag>, {
        type?: typeof Boolean | typeof Number | typeof String
    }>[] = [{
        name: 'no-api',
        default: false,
        alias: 'n',
        type: Boolean,
        description: "Don't expose the api. This may be useful if you just want to set the webhooks."
    },{
        name: 'bot-press-url',
        alias: 'b',
        type: String,
        typeLabel: '{blue {underline http://localhost:3000/api/v1/bots/cool-bot}}',
        description: "The Botpress URL that ends with your bot id."
    },{
        name: 'twilio-webhook',
        alias: 't',
        type: String,
        typeLabel: '{blue {underline http://localhost:5555/incoming}}',
        description: "Send twillio payloads to this URL. EASY API will also parse and processes twillio response message payloads."
    },{
        name: 'chatwoot-url',
        type: String,
        typeLabel: '{blue {underline http://localhost:3000/api/v1/accounts/3/inboxes/1}}',
        description: "The URL of the specific Chatwoot inbox you set up for this session"
    },{
        name: 'chatwoot-api-access-token',
        type: String,
        typeLabel: '{blue {underline mEEwUGEEML2ZThMm252rLg1M}}',
        description: "The access token of the specific Chatwoot inbox you set up for this session"
    },
    {
        name: 'port',
        alias: 'p',
        default: 8002,
        type: Number,
        typeLabel: '{blue {underline 8080}}',
        description: "Set the port for the api. Default to 8002."
    },
    {
        name: 'api-host',
        type: String,
        typeLabel: '{yellow {underline localhost}}',
        description: "The easy API may be sitting behind a reverse proxy. In this case set --api-host in order to make sure the api docs and api explorer are working properly. You will need to include the protocol as well."
    },
    {
        name: 'host',
        alias: 'h',
        default: 'localhost',
        type: String,
        typeLabel: '{red {underline localhost}}',
        description: "Set the hostname for the api documantation and statistics. Overrides --api-host. Default: localhost."
    },
    {
        name: 'webhook',
        alias: 'w',
        type: String,
        typeLabel: '{yellow {underline https://webhook.site/....}}',
        description: "Webhook to use for the listeners."
    },
    {
        name: 'ev',
        alias: 'e',
        type: String,
        typeLabel: '{green {underline https://webhook.site/....}}',
        description: "Send launch events to this URL."
    },
    {
        name: 'ef',
        type: String,
        //@ts-ignore
        default: ["qr", "STARTUP"],
        isMultiple: true,
        typeLabel: '{blueBright {underline qr,STARTUP}}',
        description: "Filters which namespaces trigger the webhook set in -e/--ev."
    },
    {
        name: 'allow-session-data-wh',
        alias: 'x',
        default: false,
        type: Boolean,
        description: "By default, if you set -e flag, the session data is not transferred to the webhook as it is extremely sensitive data. In order to bypass this security measure, use this flag."
    },
    {
        name: 'key',
        alias: 'k',
        type: String,
        typeLabel: '{redBright {underline apikey}}',
        description: "Specify an api key to use as a check for all requests. If you add -k by itself, a key will be autogenerated for you."
    },
    {
        name: 'config',
        alias: 'c',
        type: String,
        typeLabel: '{yellowBright {underline ./config.json}}',
        description: "The relative json file that contains the config. By default the system will look for config.json which will override any config variables set. Default: './config.json'."
    },
    {
        name: 'session',
        alias: 's',
        type: String,
        typeLabel: '{magentaBright {underline BASE64}}',
        description: "A base64 string representing the session data."
    },
    {
        name: 'keep-alive',
        alias: 'a',
        type: Boolean,
        description: "If true, the system will force the session to refocus in this process. This will prevent you from opening a session elsewhere."
    },
    {
        name: 'use-session-id-in-path',
        alias: 'i',
        type: Boolean,
        description: "If true, all API paths will include the session id. default to false and the default session Id is 'session'."
    },
    {
        name: 'generate-api-docs',
        alias: 'd',
        type: Boolean,
        default: true,
        description: "Generate postman collection and expose api docs to open in browser."
    },
    {
        name: 'session-data-only',
        alias: 'o',
        type: Boolean,
        description: "Kill the process when the session data is saved.",
        default: false
    },
    {
        name: 'skip-save-postman-collection',
        type: Boolean,
        description: "Don't save the postman collection.",
        default: false
    },
    {
        name: 'headful',
        type: Boolean,
        description: "Show the browser window on your machine.",
        default: false
    },
    {
        name: 'headful',
        type: Boolean,
        description: "Pre authenticate documentation site [High security risk]."
    },
    {
        name: 'stats',
        type: Boolean,
        description: "Exposes API swagger-statistics.",
        default: false
    },
    {
        name: 'pre-auth-docs',
        type: Boolean,
        description: "Grab config options from the environment variables.",
        default: false
    },
    {
        name: 'no-kill-on-logout',
        type: Boolean,
        description: "Keeps the process alive when host account logs out of session. default is false",
        default: false
    },
    {
        name: 'debug',
        type: Boolean,
        description: "Print out the CLI flag values and the WA_* env vars. default is false",
        default: false
    },
    {
        name: 'cors',
        type: Boolean,
        description: "Enable all cors requests",
        default: false
    },
    {
        name: 'socket',
        type: Boolean,
        description: "Expose a socket.io middleware on the server.",
        default: false
    },
    {
        name: 'license-key',
        alias: 'l',
        type: String,
        typeLabel: '{yellowBright {underline B2BJ4JFB-2UN2J3ND-2J5I.....}}',
        description: "The license key you want to use for this server. License keys are used to unlock features. Learn more here https://github.com/open-wa/wa-automate-nodejs#license-key"
    },
    {
        name: 'ready-webhook',
        type: String,
        typeLabel: '{yellow {underline https://webhook.site/....}}',
        description: "Webhook that fires when the EASY API is completely ready"
    },
    {
        name: 'on-call',
        type: String,
        typeLabel: '{yellow {underline "Please do not call this number"}}',
        description: "A default message to send to any number that is trying to call the host account"
    },
    {
        name: 'auto-reject',
        type: Boolean,
        description: "Automatically reject incoming phone and video calls to the host account."
    },
    {
        name: 'emit-unread',
        type: Boolean,
        description: "Emit all unread messages via onMessage webhooks on launch.",
        default: false
    },
    {
        name: 'skip-url-check',
        type: Boolean,
        description: "Don't validate webhook URLs. Enables use of non-FQDNs."
    },
    {
        name: 'tunnel',
        type: Boolean,
        description: "Expose a tunnel to your EASY API session - this is for testing and it is unsecured."
    },
    {
        name: 'help',
        description: 'Print this usage guide.'
    }
    ]

export const optionKeys = optionList.map(({ name }) => camelize(name));

export const PrimitiveConverter = {
    Number : 1,
    Boolean : true,
    String : "hello"
}

export const cliOptionNames = optionList.reduce((acc, c) => {
    if (!c.type) return acc
    acc[camelize(c.name)] = typeof PrimitiveConverter[c.type.name]
    return acc
}, {})

export const meowFlags: () => AnyFlags = () => {
    const extraFlags = {}
    configWithCases.map(({ type, key }) => {
        if (key === "popup") type = "number";
        if (key === "viewport") type = "string";
        if (key === "stickerServerEndpoint") type = "string";
        extraFlags[key] = {
            type
        }
    });

    const res = {};
    optionList.map(option => {
        res[camelize(option.name)] = {
            ...option,
            //@ts-ignore
            type: option.type?.name?.toLowerCase()
        }
    });
    return {
        ...res,
        ...extraFlags
    };
}

export const helptext = commandLineUsage([{
    content: HELP_HEADER,
    raw: true,
},
{
    header: '',
    optionList
},
{
    header: "Session config flags",
    optionList: [
        ...configWithCases.map(c => {
            let type;
            if (c.type === 'boolean') type = Boolean;
            if (c.type === 'string') type = String;
            if (c.type === '"number"' || c.type === 'number') type = Number;
            return {
                name: c.p,
                type,
                description: c.description
            }
        })
    ]
},
{
    content: `Please check here for more information on some of the above mentioned parameters: {underline https://docs.openwa.dev/interfaces/api_model_config.configobject}`
},
{
    content: 'Project home: {underline https://github.com/open-wa/wa-automate-nodejs}'
}
])

export const envArgs: () => JsonObject = () => {
    const env = {};
    Object.entries(process.env).filter(([k, ]) => k.includes('WA')).map(([k, v]) => env[changeCase.camelCase(k.replace('WA_', ''))] = (v == 'false' || v == 'FALSE') ? false : (v == 'true' || v == 'TRUE') ? true : Number(v) || v);
    return env
}

export const configFile: (config : string) => JsonObject = (config : string) => {
    let confFile = {};
    const conf = config || process.env.WA_CLI_CONFIG
    if (conf) {
        if (isBase64(conf as string)) {
            confFile = JSON.parse(Buffer.from(conf as string, 'base64').toString('ascii'))
        } else {
            confFile = tryOpenFileAsObject(conf as string || `cli.config.json`);
            if (!confFile) console.error(`Unable to read config file json: ${conf}`)
        }
    } else {
        confFile = tryOpenFileAsObject(`cli.config.json`);
    }
    return confFile;
}

export const cli: () => {
    createConfig: ConfigObject,
    cliConfig: Merge<ConfigObject, {
        [k: string]: any
    }>,
    PORT: number,
    spinner: Spin
} = () => {
    const _cli = meow(helptext, {
        flags: {
            ...meowFlags(),
            popup: {
                type: 'boolean',
                default: false
            }
        },
        booleanDefault: undefined
    });

    const cliConfig: any = {
        sessionId: "session",
        /**
         * Prioirity goes from bottom up
         */
        /**
         * CLI flags
         */
        ..._cli.flags,
        /**
         * The configuration file OR the --config base64 encoded config object
         */
        ...(configFile(_cli.flags.config as string) || {}),
        /**
         * Environmental Variables
         */
        ...envArgs()
    };

    const PORT = Number(cliConfig.port || process.env.PORT || 8080);
    const spinner = new Spin(cliConfig.sessionId, 'STARTUP', cliConfig?.disableSpins);

    const createConfig: ConfigObject = {
        ...cliConfig
    };


    if (cliConfig?.session) {
        createConfig.sessionData = cliConfig.session;
    }

    if (cliConfig?.allowSessionDataWh) {
        cliConfig.allowSessionDataWebhook = cliConfig.allowSessionDataWh;
    }

    /**
     * Build create() specific conig
     */

    if ((cliConfig?.licenseKey || cliConfig?.l)) {
        createConfig.licenseKey = cliConfig.licenseKey || cliConfig.l
    }

    if (cliConfig?.popup) {
        createConfig.popup = PORT
    }

    if (!(cliConfig?.key == null) && cliConfig?.key == "") {
        cliConfig.key = uuidAPIKey.create().apiKey;
    }

    if (cliConfig.viewport && cliConfig.viewport.split && cliConfig.viewport.split('x').length && cliConfig.viewport.split('x').length == 2 && cliConfig.viewport.split('x').map(Number).map(n => !!n ? n : null).filter(n => n).length == 2) {
        const [width, height] = cliConfig.viewport.split('x').map(Number).map(n => !!n ? n : null).filter(n => n);
        createConfig.viewport = { width, height }
    }

    if (cliConfig.resizable) {
        createConfig.defaultViewport = null // <= set this to have viewport emulation off
    }

    if (cliConfig.sessionDataOnly) {
        ev.on(`sessionData.**`, async (sessionData, sessionId) => {
            writeFile(`${sessionId}.data.json`, JSON.stringify(sessionData), (err) => {
                if (err) { spinner.fail(err.message); return; }
                else
                    spinner.succeed(`Session data saved: ${sessionId}.data.json\nClosing.`);
                process.exit();
            });
        })
    }

    if(cliConfig.skipUrlCheck) checkUrl = () => true;

    if (cliConfig.webhook || cliConfig.webhook == '') {
        if (checkUrl(cliConfig.webhook) || Array.isArray(cliConfig.webhook)) {
            spinner.succeed('webhooks set already')
        } else {
            if (cliConfig.webhook == '') cliConfig.webhook = 'webhooks.json';
            cliConfig.webhook = tryOpenFileAsObject(cliConfig.webhook, true);
            if (!checkUrl(cliConfig.webhook)) {
                cliConfig.webhook = undefined
            }
        }
    }


    if (cliConfig.twilioWebhook || cliConfig.twilioWebhook == '') {
            if (cliConfig.twilioWebhook == '' && cliConfig.webhook) cliConfig.twilioWebhook = cliConfig.webhook;
            if (!checkUrl(cliConfig.twilioWebhook)) {
                cliConfig.twilioWebhook = undefined
        }
        if(cliConfig.twilioWebhook && (!createConfig.cloudUploadOptions || createConfig.messagePreprocessor!=='UPLOAD_CLOUD')) {
            spinner.info('twilioWebhook set but messagePreprocessor not set to UPLOAD_CLOUD or cloudUploadOptions is missing')
        }
    }

    if (cliConfig.apiHost) {
        cliConfig.apiHost = cliConfig.apiHost.replace(/\/$/, '')
    }

    if (cliConfig.debug) {
        spinner.succeed(`DEBUG - flags: ${JSON.stringify(cliConfig)}`)
        const WA_ENV = {};
        Object.keys(process.env).map(k => {
            if (k.startsWith('WA_')) WA_ENV[k] = process.env[k];
        })
        spinner.succeed(`DEBUG - env vars: ${JSON.stringify(WA_ENV)}`)
    }


    return {
        createConfig, cliConfig, PORT, spinner
    }
}