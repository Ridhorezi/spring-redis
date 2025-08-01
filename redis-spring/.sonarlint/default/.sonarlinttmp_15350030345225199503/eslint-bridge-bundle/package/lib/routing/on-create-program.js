"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = require("services/program");
/**
 * Handles TypeScript Program creation requests
 */
function default_1(request, response, next) {
    try {
        const { tsConfig } = request.body;
        const { programId, files, projectReferences, missingTsConfig } = (0, program_1.createAndSaveProgram)(tsConfig);
        response.json({ programId, files, projectReferences, missingTsConfig });
    }
    catch (error) {
        next(error);
    }
}
exports.default = default_1;
//# sourceMappingURL=on-create-program.js.map