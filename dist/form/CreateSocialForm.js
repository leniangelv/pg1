"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSocialFrom = exports.CreateSocialFrom = void 0;
exports.CreateSocialFrom = {
    action: `/social/create`,
    title: `Crear Red Social`,
    method: `POST`,
    submit: {
        text: `Crear`,
        ico: `bi bi-send-fill`
    },
    class: ``,
};
const UpdateSocialFrom = (id) => {
    return {
        action: `/social/${id}/update`,
        title: `Actualizar Medio Social`,
        method: `POST`,
        submit: {
            text: `Actualizar`,
            ico: `bi bi-send-fill`
        },
        class: ``,
    };
};
exports.UpdateSocialFrom = UpdateSocialFrom;
