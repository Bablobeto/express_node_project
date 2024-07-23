"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = validator;
const class_validator_1 = require("class-validator");
const axios_1 = require("axios");
function validator(Dto, group) {
    return async (req, res, next) => {
        try {
            const dtoData = Dto.fromJson(req.body);
            const errors = await (0, class_validator_1.validate)(dtoData, {
                groups: [group],
                strictGroups: true,
                validationError: {
                    target: false,
                    value: false,
                },
            });
            if (errors.length > 0) {
                const validationErrors = mapErrors(errors);
                return res.error("Validation failed", validationErrors, axios_1.HttpStatusCode.UnprocessableEntity);
            }
            req.updateContext({ validData: dtoData });
            next();
        }
        catch (error) {
            return res.error("Internal server error", error.message, axios_1.HttpStatusCode.InternalServerError);
        }
    };
}
const mapErrors = (errors) => {
    const mappedErrors = {};
    for (const error of errors) {
        const { property, children, constraints } = error;
        if (constraints) {
            mappedErrors[property] = Object.values(constraints)[0];
        }
        else if ((children === null || children === void 0 ? void 0 : children.length) > 0) {
            mappedErrors[property] = mapErrors(children);
        }
    }
    return mappedErrors;
};
