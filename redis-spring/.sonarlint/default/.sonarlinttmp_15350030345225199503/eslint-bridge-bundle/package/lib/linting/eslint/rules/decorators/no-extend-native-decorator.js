"use strict";
/*
 * SonarQube JavaScript Plugin
 * Copyright (C) 2011-2023 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// https://sonarsource.github.io/rspec/#/rspec/S6643/javascript
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateNoExtendNative = void 0;
const helpers_1 = require("./helpers");
function decorateNoExtendNative(rule) {
    return (0, helpers_1.interceptReport)(rule, (context, reportDescriptor) => {
        const node = reportDescriptor.node;
        let reportedNode;
        if (node.type === 'CallExpression') {
            // `*.prototype` <- CallExpression
            reportedNode = node.arguments[0];
        }
        else {
            // `*.prototype` <- MemberExpression <- AssignmentExpression
            reportedNode = node.left;
        }
        context.report({ ...reportDescriptor, node: reportedNode });
    });
}
exports.decorateNoExtendNative = decorateNoExtendNative;
//# sourceMappingURL=no-extend-native-decorator.js.map