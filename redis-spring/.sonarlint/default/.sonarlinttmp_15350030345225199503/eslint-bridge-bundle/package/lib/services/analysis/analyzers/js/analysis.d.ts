import { FileType, JsTsLanguage } from 'helpers';
import { CpdToken, Issue, Metrics, SymbolHighlight, SyntaxHighlight } from 'linting/eslint';
import { AnalysisInput, AnalysisOutput } from 'services/analysis';
import { Perf } from 'services/monitoring';
/**
 *
 * A JavaScript / TypeScript analysis input
 *
 * On SonarLint and Vue projects, TSConfig-based analysis relies on an automatically
 * created TypeScript Program's instance by TypeScript ESLint parser, which leaves
 * to it the lifecycle of such an instance.
 *
 * For all other cases, analysis relies on an automatically created TypeScript Program's
 * instance based on a TSConfig to control the lifecycle of the main internal
 * data structure used by TypeScript ESLint parser for performance reasons.
 *
 * @param fileType the file type to select the proper linting configuration
 * @param ignoreHeaderComments a flag used by some rules to ignore header comments
 * @param tsConfigs a list of TSConfigs
 * @param language the file language ('js' or 'ts')
 * @param programId the identifier of a TypeScript Program's instance
 */
export interface JsTsAnalysisInput extends AnalysisInput {
    fileType: FileType;
    language?: JsTsLanguage;
    ignoreHeaderComments?: boolean;
    tsConfigs?: string[];
    programId?: string;
    createProgram?: boolean;
    forceUpdateTSConfigs?: boolean;
}
/**
 * A JavaScript / TypeScript analysis output
 */
export interface JsTsAnalysisOutput extends AnalysisOutput {
    issues: Issue[];
    highlights?: SyntaxHighlight[];
    highlightedSymbols?: SymbolHighlight[];
    metrics?: Metrics;
    cpdTokens?: CpdToken[];
    perf?: Perf;
    ucfgPaths?: string[];
}
