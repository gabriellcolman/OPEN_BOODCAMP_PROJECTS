const miFuncion = val =>{
    if (typeof val === "number"){
            return 2* val
    }
    throw new Error("el valor debe ser de tipo numero")
}
//
try{
    console.log("esta ejecutandose normal")
    const doble = miFuncion(numera)
    console.log(doble)
}catch(e){
    //si falla
    console.log("Error!*")
}

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.info("mensaje informativo")
logger.debug("msj debu")
logger.warn("msj de advertencia")
logger.error("esto es un error")