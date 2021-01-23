"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateObj = void 0;
class ValidateObj {
    isValid(schema, obj) {
        return console.log(schema, obj);
        // const error: Joi.ValidationResult =  schema.validate(obj);
        // if (error) {
        //   return {err: error.error, value: error.value}
        // } else {
        //   return true
        // }
    }
}
exports.ValidateObj = ValidateObj;
//# sourceMappingURL=validateObj.js.map