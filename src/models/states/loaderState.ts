
// Global Store State for all loading actions
export interface LoaderState<ET, HT> {
    // whilte loading (show spinner etc.)
    loading: false,
    // has been loaded successfully
    success: false,
    // properties have errors
    error?: string,
    // object with errors
    hasError?: ET,
    // help for errors from backend
    help?: HT
}

/**
 * 
 * In case of validation error the objwect looks like:
 * 
 * {
 *   hasError: {
 *      email: true
 *   },
 *   error: {
 *      email: 'required'
 *   },
 *   help: {
 *      email: 'E-Mail is mandatory'
 *   },
 * }
 * 
 */