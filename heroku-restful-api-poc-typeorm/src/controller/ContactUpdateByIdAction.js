"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Contact_1 = require("../entity/Contact");
const User = require("../controller/UserController");

function contactUpdateByIdAction(request, response) {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
    if (typeof authorizationHeader !== 'undefined') {
        let [, token] = authorizationHeader.split(' ');
        
        if (token != User.getToken()) {
            response.sendStatus(400) // Forbidden, you're not logged in
            console.log("User not logged in");
        } else {
            return __awaiter(this, void 0, void 0, function* () {
        
                const contactRepository = typeorm_1.getManager().getRepository(Contact_1.Contact);
            
                const contact = yield contactRepository.update(request.params.id, request.body);
        
                if (!contact) {
                    response.status(404);
                    response.end();
                    return;
                }
                // return loaded account
                response.json({
                    success: true,
                    message: "Updated Successfully",
                    result: contact
                });
            });
        }
    } else {
        response.sendStatus(400);
    }
}
exports.contactUpdateByIdAction = contactUpdateByIdAction;
//# sourceMappingURL=AccountGetByIdAction.js.map