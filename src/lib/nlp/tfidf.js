"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const natural = require("natural");
// This class facilitate "Term Frequency–Inverse Document Frequency" module functionality
class NlpTfIdf {
    constructor() {
        this.TfIdf = natural.TfIdf;
        this.tfidf = new this.TfIdf();
    }
    add_document_string(data) {
        this.tfidf.addDocument(data);
    }
    add_document_list(data) {
        this.tfidf.addDocument(data);
    }
    get_score(data) {
        let results = 0;
        this.tfidf.tfidfs(data, function (i, measure) {
            results = measure;
        });
        return results;
    }
}
exports.NlpTfIdf = NlpTfIdf;
//# sourceMappingURL=tfidf.js.map