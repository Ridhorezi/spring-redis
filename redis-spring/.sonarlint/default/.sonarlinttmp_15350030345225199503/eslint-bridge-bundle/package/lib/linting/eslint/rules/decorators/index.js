"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorators = void 0;
const accessor_pairs_decorator_1 = require("./accessor-pairs-decorator");
const brace_style_decorator_1 = require("./brace-style-decorator");
const default_param_last_decorator_1 = require("./default-param-last-decorator");
const jsx_key_decorator_1 = require("./jsx-key-decorator");
const jsx_no_constructed_context_values_1 = require("./jsx-no-constructed-context-values");
const new_cap_decorator_1 = require("./new-cap-decorator");
const no_base_to_string_decorator_1 = require("./no-base-to-string-decorator");
const no_dupe_keys_decorator_1 = require("./no-dupe-keys-decorator");
const no_duplicate_imports_decorator_1 = require("./no-duplicate-imports-decorator");
const no_empty_decorator_1 = require("./no-empty-decorator");
const no_empty_function_decorator_1 = require("./no-empty-function-decorator");
const no_empty_interface_decorator_1 = require("./no-empty-interface-decorator");
const no_extend_native_decorator_1 = require("./no-extend-native-decorator");
const no_extra_semi_decorator_1 = require("./no-extra-semi-decorator");
const no_redeclare_decorator_1 = require("./no-redeclare-decorator");
const no_this_alias_decorator_1 = require("./no-this-alias-decorator");
const no_throw_literal_decorator_1 = require("./no-throw-literal-decorator");
const no_unreachable_decorator_1 = require("./no-unreachable-decorator");
const no_unstable_nested_components_1 = require("./no-unstable-nested-components");
const no_unused_expressions_decorator_1 = require("./no-unused-expressions-decorator");
const no_useless_constructor_decorator_1 = require("./no-useless-constructor-decorator");
const object_shorthand_decorator_1 = require("./object-shorthand-decorator");
const prefer_enum_initializers_decorator_1 = require("./prefer-enum-initializers-decorator");
const prefer_for_of_decorator_1 = require("./prefer-for-of-decorator");
const prefer_function_type_decorator_1 = require("./prefer-function-type-decorator");
const prefer_string_starts_ends_with_decorator_1 = require("./prefer-string-starts-ends-with-decorator");
const prefer_template_decorator_1 = require("./prefer-template-decorator");
const semi_decorator_1 = require("./semi-decorator");
const use_isnan_decorator_1 = require("./use-isnan-decorator");
const no_var_decorator_1 = require("./no-var-decorator");
const no_redundant_type_constituents_1 = require("./no-redundant-type-constituents");
/**
 * The set of internal ESLint rule decorators
 *
 * Once declared here, these decorators are automatically applied
 * to the corresponding rule definitions by the linter's wrapper.
 * There is no further setup required to enable them, except when
 * one needs to test them using ESLint's rule tester.
 */
exports.decorators = {
    'accessor-pairs': accessor_pairs_decorator_1.decorateAccessorPairs,
    'brace-style': brace_style_decorator_1.decorateBraceStyle,
    'default-param-last': default_param_last_decorator_1.decorateDefaultParamLast,
    'jsx-key': jsx_key_decorator_1.decorateJsxKey,
    'jsx-no-constructed-context-values': jsx_no_constructed_context_values_1.decorateJsxNoConstructedContextValues,
    'new-cap': new_cap_decorator_1.decorateNewCap,
    'no-base-to-string': no_base_to_string_decorator_1.decorateNoBaseToString,
    'no-dupe-keys': no_dupe_keys_decorator_1.decorateNoDupeKeys,
    'no-duplicate-imports': no_duplicate_imports_decorator_1.decorateNoDuplicateImports,
    'no-empty': no_empty_decorator_1.decorateNoEmpty,
    'no-empty-function': no_empty_function_decorator_1.decorateNoEmptyFunction,
    'no-empty-interface': no_empty_interface_decorator_1.decorateNoEmptyInterface,
    'no-extend-native': no_extend_native_decorator_1.decorateNoExtendNative,
    'no-extra-semi': no_extra_semi_decorator_1.decorateNoExtraSemi,
    'no-redeclare': no_redeclare_decorator_1.decorateNoRedeclare,
    'no-redundant-type-constituents': no_redundant_type_constituents_1.decorateNoRedundantTypeConstituents,
    'no-this-alias': no_this_alias_decorator_1.decorateNoThisAlias,
    'no-throw-literal': no_throw_literal_decorator_1.decorateNoThrowLiteral,
    'no-unreachable': no_unreachable_decorator_1.decorateNoUnreachable,
    'no-unstable-nested-components': no_unstable_nested_components_1.decorateNoUnstableNestedComponents,
    'no-unused-expressions': no_unused_expressions_decorator_1.decorateNoUnusedExpressions,
    'no-useless-constructor': no_useless_constructor_decorator_1.decorateNoUselessConstructor,
    'no-var': no_var_decorator_1.decorateNoVar,
    'object-shorthand': object_shorthand_decorator_1.decorateObjectShorthand,
    'prefer-enum-initializers': prefer_enum_initializers_decorator_1.decoratePreferEnumInitializers,
    'prefer-for-of': prefer_for_of_decorator_1.decoratePreferForOf,
    'prefer-function-type': prefer_function_type_decorator_1.decoratePreferFunctionType,
    'prefer-string-starts-ends-with': prefer_string_starts_ends_with_decorator_1.decoratePreferStringStartsEndsWithDecorator,
    'prefer-template': prefer_template_decorator_1.decoratePreferTemplate,
    semi: semi_decorator_1.decorateSemi,
    'use-isnan': use_isnan_decorator_1.decorateUseIsNan,
};
//# sourceMappingURL=index.js.map